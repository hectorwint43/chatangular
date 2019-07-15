import { Component, OnInit, OnDestroy } from '@angular/core';
import { MensajesService } from '../mensajes.service';
import { Mensaje } from '../mensajes.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-areachat',
  templateUrl: './areachat.component.html',
  styleUrls: ['./areachat.component.css']
})
export class AreachatComponent implements OnInit, OnDestroy  {

  mensajes:Mensaje[];
  mensaje:Mensaje;
  constructor(
    private route:ActivatedRoute,
    private mensajesservice:MensajesService
  ) { }


  ngOnInit() {

    this.route.paramMap.subscribe(params=>{
      
      this.mensajesservice.suscribir();

      this.mensajesservice.getmensaje().subscribe(data =>{
        this.mensajes=data
        this.mensajesservice.enviarMensaje(data);
      });

    this.mensajesservice.currentMessage.subscribe(message =>{
      this.mensajes = message
    });
  });

    this.mensaje= this.mensajesservice.nuevomensaje();
  }

  agregarusuario():void{
    
    this.mensajesservice.agregarMensaje(this.mensaje).subscribe(
      (data: Mensaje)=>{
        console.log(data);

        this.mensajesservice.enviarMensaje(data);

      },(error:any)=>console.log(error)
    );

    this.mensajesservice.currentMessage.subscribe(message =>{
      this.mensajes = message
    });

    this.mensaje = this.mensajesservice.nuevomensaje();

    this.mensajesservice.getmensaje().subscribe(data =>{
      this.mensajes=data
      this.mensajesservice.enviarMensaje(data);
    });
     }

  
  ngOnDestroy(): void {
    this.mensajesservice.cerrar(1);
 }

}
