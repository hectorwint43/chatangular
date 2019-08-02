import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../usuarios.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;
   variablechida;
  usuario:Usuario;
  usuario2:Usuario[];

  constructor(private navegar: Router,private usuarios:UsuariosService) { }

  ngOnInit() {

    
  } 

  iniciarSesion(){
    this.usuarios.Login(this.email,this.password).subscribe(token => {
      localStorage.setItem('token', token['token']);
      localStorage.setItem('usuario',this.email);
      this.navegar.navigate(['login']);

    this.usuarios.Logininfo(this.email).subscribe(data => {
       this.usuario = data;
        console.log('id '+this.usuario.id);
    },error => {
      console.log(JSON.stringify(error));
      console.log('Usuario o contraseña invalidos');
    });

       console.log('tokenX2 '+token['token']);
        console.log('el token : '+localStorage.getItem('token'));

    }, 
    error => {
      console.log(JSON.stringify(error));
      console.log('Usuario o contraseña invalidos');
      // alert('Usuario o contraseña invalidos');
    });
  }

  Empezar(id){
    console.log('estoy apunto '+id);
    localStorage.setItem('miid',id);
    window.location.replace("listausuario/"+id);
    // this.navegar.navigate(['listausuario',id]);
    
  }

}
