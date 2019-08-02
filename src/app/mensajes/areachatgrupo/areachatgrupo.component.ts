import { Component, OnInit, OnDestroy } from '@angular/core';
// import { MensajesService } from '../mensajes.service';
import { MensajesgrupoService } from '../mensajesgrupo.service';
import { Mensaje } from '../mensajes.model';
import { Usuario } from 'src/app/usuarios/usuarios.model';
import { Router, convertToParamMap } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/usuarios/usuarios.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-areachatgrupo',
  templateUrl: './areachatgrupo.component.html',
  styleUrls: ['./areachatgrupo.component.css']
})
export class AreachatgrupoComponent implements OnInit, OnDestroy   {

  mensajes:Mensaje[];
  mensaje:Mensaje;
  participantegrupo;
  usuarioprincipal:Usuario;
  usuariocontacto:Usuario;
  id:number ; 
  idchannel ;
  
  xe;
   xevideo;
   xeaudio;
  
  siescribeono:boolean;
  siescribeon2:string='false';

  constructor(
    private route:ActivatedRoute,
    private mensajesservice:MensajesgrupoService,
    private usuarioservice:UsuariosService,
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.id = parseInt(params.get('idgrupo'));
      this.idchannel = params.get('nombregrupo');
      console.log('id del contacto pa chatear '+this.id);
      console.log('idpara mi channel'+ this.idchannel);
      this.mensajesservice.suscribir(this.idchannel,this.id);

      this.mensajesservice.getmensajegrupo(this.id,localStorage.getItem('miid')).subscribe(data =>{
        this.mensajes=data
        this.mensajesservice.enviarMensaje(data,this.idchannel,this.id);
      });
      
    
    // esto es para las listas de usuario---------------------------------
    this.usuarioservice.miusuarioespecial(localStorage.getItem('miid')).subscribe(data2 =>
      this.usuarioprincipal=data2
     );
    //  -----------------------------------------------------------------
     this.usuarioservice.miusuarioespecial(this.id).subscribe(data3 =>
      this.usuariocontacto=data3
     );

     this.mensajesservice.getparticipantegrupo(this.id).subscribe(data4 =>
      this.participantegrupo=data4
      );
   // esto es para las listas de usuario--------------------------------
  });

  this.siescribeon2 = 'false';

  console.log('ahora es '+this.siescribeon2);
      this.mensajesservice.suscribir2(this.idchannel+"2929",this.id);
      this.mensajesservice.enviarMensaje2(this.siescribeon2,this.idchannel+"2929",this.id);
        this.mensajesservice.currentMessage2.subscribe(message =>{
          this.siescribeon2 = message
        });

// Esto es un current message---------------------------------------------
this.mensajesservice.currentMessage.subscribe(message =>{
  this.mensajes = message
});
// Esto es un current message---------------------------------------------

// Esto es para la caja  de texto----------------------------------
  this.mensaje= this.mensajesservice.nuevomensaje(this.id,localStorage.getItem('miid'));
// Esto es para la caja  de texto----------------------------------
  }

  agregarusuario():void{

    console.log('mi id '+this.id);
    this.mensaje.tipo='1';
    this.mensajesservice.agregarMensajegrupo(this.mensaje).subscribe(
      (data: Mensaje[])=>{
        console.log(data);
        this.mensajes=data
        this.mensajesservice.enviarMensaje(data,this.idchannel,this.id);
      },(error:any)=>console.log(error)
    );

     //esto es para el canal del input
  this.siescribeon2 = 'false';
  this.mensajesservice.enviarMensaje2(this.siescribeon2,this.idchannel+"2929",this.id);
   this.mensajesservice.currentMessage2.subscribe(message =>{
     this.siescribeon2 = message
   });
//esto es para el canal del input


    this.mensajesservice.currentMessage.subscribe(message =>{
      this.mensajes = message
    });

    this.mensaje = this.mensajesservice.nuevomensaje(this.id,localStorage.getItem('miid'));
     }

     escrbiendo(event){
      
      if(event == '')
      {
        
        this.siescribeono=false;
        console.log('neeel'+this.siescribeono);
        this.siescribeon2 = 'false';
       this.mensajesservice.enviarMensaje2(this.siescribeon2,this.idchannel+"2929",this.id);
        this.mensajesservice.currentMessage2.subscribe(message =>{
          this.siescribeon2 = message
        });
        
      }else{
        
        this.siescribeono=true;
        console.log('esta escribiendo'+this.siescribeono);
        this.siescribeon2 = 'true';
        this.mensajesservice.enviarMensaje2(this.siescribeon2,this.idchannel+"2929",this.id);
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
      this.mensajesservice.agregarMensajegrupo(this.mensaje).subscribe(
        (data: Mensaje[])=>{
          console.log(data);
          this.mensajes=data
          this.mensajesservice.enviarMensaje(data,this.idchannel,this.id);
        },(error:any)=>console.log(error)
      );
  
       //esto es para el canal del input
    this.siescribeon2 = 'false';
    this.mensajesservice.enviarMensaje2(this.siescribeon2,this.idchannel+"2929",this.id);
     this.mensajesservice.currentMessage2.subscribe(message =>{
       this.siescribeon2 = message
     });
  //esto es para el canal del input
  
  
      this.mensajesservice.currentMessage.subscribe(message =>{
        this.mensajes = message
      });
  
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

        this.mensajesservice.agregarMensajegrupo(this.mensaje).subscribe(
          (data: Mensaje[])=>{
            console.log(data);
            this.mensajes=data
            this.mensajesservice.enviarMensaje(data,this.idchannel,this.id);
          },(error:any)=>console.log(error)
        );
    
         //esto es para el canal del input
      this.siescribeon2 = 'false';
      this.mensajesservice.enviarMensaje2(this.siescribeon2,this.idchannel+"2929",this.id);
       this.mensajesservice.currentMessage2.subscribe(message =>{
         this.siescribeon2 = message
       });
    //esto es para el canal del input
    
    
        this.mensajesservice.currentMessage.subscribe(message =>{
          this.mensajes = message
        });
    
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
          this.mensajesservice.agregarMensajegrupo(this.mensaje).subscribe(
            (data: Mensaje[])=>{
              console.log(data);
              this.mensajes=data
              this.mensajesservice.enviarMensaje(data,this.idchannel,this.id);
            },(error:any)=>console.log(error)
          );
      
           //esto es para el canal del input
        this.siescribeon2 = 'false';
        this.mensajesservice.enviarMensaje2(this.siescribeon2,this.idchannel+"2929",this.id);
         this.mensajesservice.currentMessage2.subscribe(message =>{
           this.siescribeon2 = message
         });
      //esto es para el canal del input
      
      
          this.mensajesservice.currentMessage.subscribe(message =>{
            this.mensajes = message
          });
      
          this.mensaje = this.mensajesservice.nuevomensaje(this.id,localStorage.getItem('miid'));
          
          this.xeaudio='';
           }


  ngOnDestroy(): void {
     this.mensajesservice.cerrar(1);
     this.mensajesservice.cerrar2(1);
}

}
