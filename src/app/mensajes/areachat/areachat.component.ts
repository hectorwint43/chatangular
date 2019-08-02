import { Component, OnInit, OnDestroy } from '@angular/core';
import { MensajesService } from '../mensajes.service';
import { Mensaje } from '../mensajes.model';
import { Usuario } from 'src/app/usuarios/usuarios.model';
import { Router, convertToParamMap } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/usuarios/usuarios.service';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-areachat',
  templateUrl: './areachat.component.html',
  styleUrls: ['./areachat.component.css']
})
export class AreachatComponent implements OnInit, OnDestroy  {

  mensajes:Mensaje[];
  mensaje:Mensaje;
  usuarioprincipal:Usuario;
  usuariocontacto:Usuario;
  id:number ; 
  idchannel ; 
   xe;
   xevideo;
   xeaudio;
   siescribeono:boolean;
   siescribeon2:string='false';
   tipo;
   
  
  constructor(
    private route:ActivatedRoute,
    private mensajesservice:MensajesService,
    private usuarioservice:UsuariosService,
    private http:HttpClient
  ) { }


  ngOnInit() {
        console.log('id usuario en areachat'+ localStorage.getItem('miid'));
    this.route.paramMap.subscribe(params=>{
      this.id = parseInt(params.get('id'));
      this.idchannel = parseInt(params.get('idchannel'));
      console.log('id del contacto pa chatear '+this.id);
      console.log('idpara mi channel'+ this.idchannel);
      this.mensajesservice.suscribir(this.idchannel);
      this.siescribeon2 = 'false';
      this.mensajesservice.getmensaje(this.id,localStorage.getItem('miid')).subscribe(data =>{
        this.mensajes=data
        this.mensajesservice.enviarMensaje(data,this.idchannel);
      });

      console.log('ahora es '+this.siescribeon2);
      this.mensajesservice.suscribir2(this.idchannel+"2929");
      this.mensajesservice.enviarMensaje2(this.siescribeon2,this.idchannel+"2929");
        this.mensajesservice.currentMessage2.subscribe(message =>{
          this.siescribeon2 = message
        });

    // esto es para las listas de usuario---------------------------------
      this.usuarioservice.miusuarioespecial(localStorage.getItem('miid')).subscribe(data2 =>
        this.usuarioprincipal=data2
       );
      //  -----------------------------------------------------------------
       this.usuarioservice.miusuarioespecial(this.id).subscribe(data3 =>
        this.usuariocontacto=data3
       );
     // esto es para las listas de usuario--------------------------------
  });

// Esto es un current message---------------------------------------------
  this.mensajesservice.currentMessage.subscribe(message =>{
    this.mensajes = message
  });
// Esto es un current message---------------------------------------------
console.log('ahora es '+this.siescribeon2);
// Esto es para la caja  de texto----------------------------------
    this.mensaje= this.mensajesservice.nuevomensaje(this.id,localStorage.getItem('miid'));
// Esto es para la caja  de texto----------------------------------
  }

  agregarusuario():void{
    console.log('mi id '+this.id);
    this.mensaje.tipo='1';
    this.mensajesservice.agregarMensaje(this.mensaje).subscribe(
      (data: Mensaje[])=>{
        console.log(data);
        this.mensajes=data
        this.mensajesservice.enviarMensaje(data,this.idchannel);
      },(error:any)=>console.log(error)
    );
    this.mensajesservice.currentMessage.subscribe(message =>{
      this.mensajes = message
    });
  //esto es para el canal del input
  this.siescribeon2 = 'false';
       this.mensajesservice.enviarMensaje2(this.siescribeon2,this.idchannel+"2929");
        this.mensajesservice.currentMessage2.subscribe(message =>{
          this.siescribeon2 = message
        });
  //esto es para el canal del input
    this.mensaje = this.mensajesservice.nuevomensaje(this.id,localStorage.getItem('miid'));
     }

     

     escrbiendo(event){
      if(event == '')
      {
        this.siescribeono=false;
        console.log('neeel'+this.siescribeono);
        this.siescribeon2 = 'false';
       this.mensajesservice.enviarMensaje2(this.siescribeon2,this.idchannel+"2929");
        this.mensajesservice.currentMessage2.subscribe(message =>{
          this.siescribeon2 = message
        });
      }else{
        this.siescribeono=true;
        console.log('esta escribiendo'+this.siescribeono);
        this.siescribeon2 = 'true';
        this.mensajesservice.enviarMensaje2(this.siescribeon2,this.idchannel+"2929");
        this.mensajesservice.currentMessage2.subscribe(message =>{
          this.siescribeon2 = message
        });
      }
     }

  previewFile(event) { 
    let elemnt = event.target
    let formData = new FormData()
     if(elemnt.files.length > 0)
     {
       formData.append('file',elemnt.files[0])
       this.http.post<any>('http://192.168.43.146:3333/archivos',formData).subscribe(res =>{
        localStorage.setItem('imageen',res.url);
        console.log('storage 1 '+localStorage.getItem('imageen'));
        this.agregararchivo(); 
       });
     }
  } 

  agregararchivo():void{
    console.log('storage 1 '+localStorage.getItem('imageen'));
    this.xe = localStorage.getItem('imageen');
    this.mensaje.mensaje=this.xe;
    this.mensaje.tipo='2';
    this.mensajesservice.agregarMensaje(this.mensaje).subscribe(
      (data: Mensaje[])=>{
        this.mensajes=data
        this.mensajesservice.enviarMensaje(data,this.idchannel);
      },(error:any)=>console.log(error)
    );
    this.mensajesservice.currentMessage.subscribe(message =>{
      this.mensajes = message
    });
  //esto es para el canal del input
  this.siescribeon2 = 'false';
       this.mensajesservice.enviarMensaje2(this.siescribeon2,this.idchannel+"2929");
        this.mensajesservice.currentMessage2.subscribe(message =>{
          this.siescribeon2 = message
        });
  //esto es para el canal del input

    this.mensaje = this.mensajesservice.nuevomensaje(this.id,localStorage.getItem('miid'));
    this.xe='';
     }
 

    previewFileV(event) { 
      let elemnt = event.target
      let formData = new FormData()
       if(elemnt.files.length > 0)
       {
         formData.append('file',elemnt.files[0])
         this.http.post<any>('http://192.168.43.146:3333/archivos',formData).subscribe(res =>{
          localStorage.setItem('videeo',res.url);
          console.log('storage 1 '+localStorage.getItem('videeo'));
          this.agregarvideo(); 
         });
       }
    } 

     agregarvideo():void{
      console.log('storage 1 '+localStorage.getItem('videeo'));
      this.xevideo = localStorage.getItem('videeo');
      this.mensaje.mensaje=this.xevideo;
      this.mensaje.tipo='3';
      this.mensajesservice.agregarMensaje(this.mensaje).subscribe(
        (data: Mensaje[])=>{
          this.mensajes=data
          this.mensajesservice.enviarMensaje(data,this.idchannel);
        },(error:any)=>console.log(error)
      );
      this.mensajesservice.currentMessage.subscribe(message =>{
        this.mensajes = message
      });
    //esto es para el canal del input
    this.siescribeon2 = 'false';
         this.mensajesservice.enviarMensaje2(this.siescribeon2,this.idchannel+"2929");
          this.mensajesservice.currentMessage2.subscribe(message =>{
            this.siescribeon2 = message
          });
    //esto es para el canal del input
  
      this.mensaje = this.mensajesservice.nuevomensaje(this.id,localStorage.getItem('miid'));
      this.xevideo='';
       }

       previewFileA(event) { 
        let elemnt = event.target
        let formData = new FormData()
         if(elemnt.files.length > 0)
         {
           formData.append('file',elemnt.files[0])
           this.http.post<any>('http://192.168.43.146:3333/archivos',formData).subscribe(res =>{
            localStorage.setItem('audioo',res.url);
            console.log('storage 1 '+localStorage.getItem('audioo'));
            this.agregaraudio(); 
           });
         }
      } 


       agregaraudio():void{
        console.log('storage 1 '+localStorage.getItem('audioo'));
        this.xeaudio = localStorage.getItem('audioo');
        this.mensaje.tipo='4';
        this.mensaje.mensaje=this.xeaudio;
        this.mensajesservice.agregarMensaje(this.mensaje).subscribe(
          (data: Mensaje[])=>{
            this.mensajes=data
            this.mensajesservice.enviarMensaje(data,this.idchannel);
          },(error:any)=>console.log(error)
        );
        this.mensajesservice.currentMessage.subscribe(message =>{
          this.mensajes = message
        });
      //esto es para el canal del input
      this.siescribeon2 = 'false';
           this.mensajesservice.enviarMensaje2(this.siescribeon2,this.idchannel+"2929");
            this.mensajesservice.currentMessage2.subscribe(message =>{
              this.siescribeon2 = message
            });
      //esto es para el canal del input
    
        this.mensaje = this.mensajesservice.nuevomensaje(this.id,localStorage.getItem('miid'));
        this.xeaudio='';
         }

  
  ngOnDestroy(): void {
     this.mensajesservice.cerrar(1);
     this.mensajesservice.cerrar2(1);
 }

}
