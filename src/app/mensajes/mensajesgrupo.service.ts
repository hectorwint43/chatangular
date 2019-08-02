import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Usuario } from './../usuarios/usuarios.model';
import { Observable } from 'rxjs';
import { Mensaje } from './mensajes.model';
import { BehaviorSubject } from 'rxjs';
import Ws from '@adonisjs/websocket-client';
//Se Define la direccion del socket
//no funciona con esta linea de ws
 const ws = Ws('ws://192.168.43.146:3333');

@Injectable({
  providedIn: 'root'
})
export class MensajesgrupoService {
  private messageSource2 = new BehaviorSubject('');
  currentMessage2  = this.messageSource2.asObservable();

  private messageSource = new BehaviorSubject([]);
  currentMessage = this.messageSource.asObservable();
  private socket;
  private socket2;
  private vari2:string = "http://192.168.43.146:3333/usuario";

  constructor(private httpclient:HttpClient) 
  {
    //Se conecta
    ws.connect();
   }

   suscribir(idchannel,idgrupo)
   {
    // -----------------------------------------
     this.socket = ws.subscribe('chat:'+idchannel+'_'+idgrupo);
    // this.socket = ws.subscribe('chat');

   //Evento que sucede al completar la conexion
   this.socket.on('ready', () => {
     //Emite el mensaje hacia el servidor del socket
      // socket.emit("message","esta dentro")
   })
   //Escuchador que espera mensajes desde el servidor
   this.socket.on('message', (event) => {
     //console.log(event);
     this.changeMessage(event);
   })
   this.socket.on('error', (error) => {
     console.log(error)
   })
   this.socket.on('close', () => {
   })
   }

   suscribir2(idchannel,idgrupo)
   {
    // -----------------------------------------
     this.socket2 = ws.subscribe('chat:'+idchannel+'_'+idgrupo);
   this.socket2.on('ready', () => {
   })
   this.socket2.on('message', (event) => {
     this.changeMessage2(event);
   })
   this.socket2.on('error', (error) => {
     console.log(error)
   })
   this.socket2.on('close', () => {
   })
   }

   getparticipantegrupo(idgrupo)
  {
    return this.httpclient.get("http://192.168.43.146:3333/participantesgrupo/"+idgrupo);
  }


      getmensajegrupo(idgrupo, idusuario): Observable<Mensaje[]>
  {
    return this.httpclient.get<Mensaje[]>("http://192.168.43.146:3333/mensajegrupo/"+idusuario+"/"+idgrupo);
  }

  agregarMensajegrupo(mnsj: Mensaje):Observable<Mensaje[]> {
    return this.httpclient.post<Mensaje[]>("http://192.168.43.146:3333/mensajegrupo/guardar",mnsj,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      });
      }

      nuevomensaje(contacto,usuario):Mensaje{
        return{
          id:0,
          from:usuario,
          to:''+contacto,
          mensaje:'',
          tipo:''
        };
      }

      enviarMensaje2(datos,idchannel,idgrupo){
        // -----------------------------------------
           ws.getSubscription('chat:'+idchannel+'_'+idgrupo).emit('message',datos);
     }
  

  enviarMensaje(datos,idchannel,idgrupo){
    // -----------------------------------------
       ws.getSubscription('chat:'+idchannel+'_'+idgrupo).emit('message',datos);
 }

      changeMessage(msg) {
        this.messageSource.next(msg);
      }

      changeMessage2(msg) {
        this.messageSource2.next(msg);
      }

      cerrar2(id)
      {
        //  socket = ws.subscribe('chat');
        this.socket2.close();
        console.log('se cerro');
      }
    
      cerrar(id)
      {
        //  socket = ws.subscribe('chat');
        this.socket.close();
        console.log('se cerro');
      }

}
