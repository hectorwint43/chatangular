import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Mensaje } from './mensajes.model';
import { BehaviorSubject } from 'rxjs';
import Ws from '@adonisjs/websocket-client';
//Se Define la direccion del socket
//no funciona con esta linea de ws
 const ws = Ws('ws://127.0.0.1:3333');

@Injectable({
  providedIn: 'root'
})
export class MensajesService {
  private messageSource = new BehaviorSubject([]);
  currentMessage = this.messageSource.asObservable();

  constructor(private httpclient:HttpClient) 
  {
    //Se conecta
    ws.connect();
   }


   suscribir()
   {
     
   //Se subscribe al canal que esta en adonis TEST
    const socket = ws.subscribe('chat');

   //Evento que sucede al completar la conexion
   socket.on('ready', () => {
     //Emite el mensaje hacia el servidor del socket
      // socket.emit("message","esta dentro")
   })
   //Escuchador que espera mensajes desde el servidor
   socket.on('message', (event) => {
     //console.log(event);
     this.changeMessage(event);
   })
   socket.on('error', (error) => {
     console.log(error)
   })
   socket.on('close', () => {
   })
   }


  getmensaje(): Observable<Mensaje[]>
  {
    return this.httpclient.get<Mensaje[]>("http://127.0.0.1:3333/mensaje");
  }

  agregarMensaje(mnsj: Mensaje):Observable<Mensaje> {
    return this.httpclient.post<Mensaje>("http://127.0.0.1:3333/mensaje/guardar",mnsj,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      });
      }

      nuevomensaje():Mensaje{
        return{
          id:0,
          from:'',
          to:'',
          mensaje:''
        };
      }

      
  

  enviarMensaje(datos){
     ws.getSubscription('chat').emit('message',datos);
 }

      changeMessage(msg) {
        this.messageSource.next(msg);
      }
    
      cerrar(id)
      {
        const socket = ws.subscribe('chat');
        socket.close();
        console.log('se cerro');
      }

}
