import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuarios.model';
import { UsuariosService } from '../usuarios.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-updateu',
  templateUrl: './updateu.component.html',
  styleUrls: ['./updateu.component.css']
})
export class UpdateuComponent implements OnInit {

  usuario:Usuario;
  id:number ; 

  constructor(
    private route:ActivatedRoute,
    private usuariosservice:UsuariosService,
    private router:Router
  ) { }

  ngOnInit() {
    this.usuario = this.usuariosservice.nuevousuario();
    this.route.paramMap.subscribe(params=>{
      this.id = +params.get('id');
      this.usuariosservice.getusuariouno(this.id).subscribe((usuario)=>this.usuario = usuario,
    (err:any) => console.log(err));
    }
    );
  }

  editarusuario():void{
    this.usuariosservice.editarUsuario(this.usuario,this.id).subscribe(
      (data: void)=>{
        console.log(data);
      },(error:any)=>console.log(error)
    );
    this.usuario = this.usuariosservice.nuevousuario();

    
    this.router.navigate(['/'])
    
      }

}
