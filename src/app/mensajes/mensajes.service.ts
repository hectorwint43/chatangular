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
export class MensajesService {
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


   suscribir(idchannel)
   {
    // -----------------------------------------
     this.socket = ws.subscribe('chat:'+idchannel);
   this.socket.on('ready', () => {
   })
   this.socket.on('message', (event) => {
     this.changeMessage(event);
   })
   this.socket.on('error', (error) => {
     console.log(error)
   })
   this.socket.on('close', () => {
   })
   }

   suscribir2(idchannel)
   {
    // -----------------------------------------
     this.socket2 = ws.subscribe('chat:'+idchannel);
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

   getusuariouno(id:number): Observable<Usuario>
  {
     
    return this.httpclient.get<Usuario>(`${this.vari2}/${id}`);
  }

  getmensaje(idcontacto, idusuario): Observable<Mensaje[]>
  {
    return this.httpclient.get<Mensaje[]>("http://192.168.43.146:3333/mensaje/"+idusuario+"/"+idcontacto);
  }

  agregarMensaje(mnsj: Mensaje):Observable<Mensaje[]> {
    return this.httpclient.post<Mensaje[]>("http://192.168.43.146:3333/mensaje/guardar",mnsj,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      });
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

      
      enviarMensaje2(datos,idchannel){
        // -----------------------------------------
           ws.getSubscription('chat:'+idchannel).emit('message',datos);
     }

  enviarMensaje(datos,idchannel){
    // -----------------------------------------
       ws.getSubscription('chat:'+idchannel).emit('message',datos);
 }

      changeMessage(msg) {
        this.messageSource.next(msg);
      }

      changeMessage2(msg) {
        this.messageSource2.next(msg);
      }
    
      cerrar(id)
      {
        //  socket = ws.subscribe('chat');
        this.socket.close();
        console.log('se cerro');
      }

      cerrar2(id)
      {
        //  socket = ws.subscribe('chat');
        this.socket2.close();
        console.log('se cerro');
      }

}
