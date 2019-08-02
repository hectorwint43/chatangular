import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../usuarios.model';
import { Amigo } from '../amigos.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregaramigos',
  templateUrl: './agregaramigos.component.html',
  styleUrls: ['./agregaramigos.component.css']
})
export class AgregaramigosComponent implements OnInit {

  // grupos;
  // usuario2:Usuario;
  
  usuario:Amigo;
  usuarioyo:Usuario;
  usuarioyo2:Usuario;
  email:string;
  miid ;
  id;
  constructor(
    private route:ActivatedRoute,
    private usuariosservice:UsuariosService,
    private navegar: Router
  ) { }

  ngOnInit() {
  this.route.paramMap.subscribe(params=>{
    this.miid = parseInt(params.get('id'));});
console.log('aqui llege '+this.id);

// this.usuariosservice.Logininfo(localStorage.getItem('usuario')).subscribe(data =>
//   this.usuario2=data
//  );
//  this.usuariosservice.getparticipantegrupo(this.miid).
//     subscribe(data =>this.grupos=data);

   this.usuarioyo2 = this.usuariosservice.nuevousuario2(this.id);

  }

  agregaramigo():void{
console.log('eyoe loco joe'+this.usuarioyo2.id);
    this.usuariosservice.agregaramigosnuevos(this.email,this.miid).subscribe(data=>{
      this.navegar.navigate(['listausuario',this.miid]);
    },error => {
      console.log(JSON.stringify(error));
      console.log('No existe el usuario');
       alert('No existe el usuario');
    });
    // this.usuariosservice.agregarUsuario(this.usuario).subscribe(
    //   (data: Usuario)=>{
    //     console.log(data);
    //   },(error:any)=>console.log(error)
    // );
    // this.usuario = this.usuariosservice.nuevousuario();
    //  }   
  }


}
