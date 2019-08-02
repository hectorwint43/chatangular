import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../usuarios.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-altagrupo',
  templateUrl: './altagrupo.component.html',
  styleUrls: ['./altagrupo.component.css']
})
export class AltagrupoComponent implements OnInit {

  // usuario:Usuario;
  nombregrupo;
  constructor(
    private usuariosservice:UsuariosService,
    private navegar: Router
  ) { }

  ngOnInit() {
    // this.usuario = this.usuariosservice.nuevousuario();
  }

  agregarusuario():void{
    this.usuariosservice.agregargrupo(this.nombregrupo,localStorage.getItem('miid')).subscribe(
      (data)=>{
        console.log(data);
        this.navegar.navigate(['listausuario',localStorage.getItem('miid')]);
      },(error:any)=>console.log(error)
    );
    // this.usuario = this.usuariosservice.nuevousuario();
    
  
  }
}
