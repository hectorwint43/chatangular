import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../usuarios.model';

@Component({
  selector: 'app-altau',
  templateUrl: './altau.component.html',
  styleUrls: ['./altau.component.css']
})
export class AltauComponent implements OnInit {

  usuario:Usuario;
  constructor(
    private usuariosservice:UsuariosService
  ) { }

  ngOnInit() {
    this.usuario = this.usuariosservice.nuevousuario();
  }

  
  agregarusuario():void{
    
    this.usuariosservice.agregarUsuario(this.usuario).subscribe(
      (data: Usuario)=>{
        console.log(data);
      },(error:any)=>console.log(error)
    );
    this.usuario = this.usuariosservice.nuevousuario();
     }

}
