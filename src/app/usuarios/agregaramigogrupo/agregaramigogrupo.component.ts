import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../usuarios.model';
import { Amigo } from '../amigos.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregaramigogrupo',
  templateUrl: './agregaramigogrupo.component.html',
  styleUrls: ['./agregaramigogrupo.component.css']
})
export class AgregaramigogrupoComponent implements OnInit {
  usuario:Usuario;
  usuariosamigo;
  grupos;
  
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
  
      
       this.usuariosservice.getparticipantegrupo(this.miid).
          subscribe(data =>this.grupos=data);

  this.usuariosservice.Logininfo(localStorage.getItem('usuario')).subscribe(data =>
    this.usuario=data
   );
  //  console.log('Que es '+localStorage.getItem('usuario'));
  this.usuariosservice.getmiscontactos(localStorage.getItem('miid')).
  subscribe(data =>this.usuariosamigo=data);
  // console.log('Que es2 '+localStorage.getItem('miid'));
  }

  agregargrupo():void{
    console.log('Que es '+this.email);
    console.log('Que es2 '+this.miid);
        this.usuariosservice.agregaramigogrupo(this.email,this.miid).subscribe(data=>{
          this.navegar.navigate(['listausuario',localStorage.getItem('miid')]);
        },error => {
          console.log(JSON.stringify(error));
          console.log('No existe el usuario');
           alert('No existe el usuario');
        });
      }

      eliminarMono(id)
  {
    console.log('envio '+id);
this.usuariosservice.destruiramigogrupal(id).subscribe(
  ()=> console.log(`Usuario with Id = ${id} deleted`),
      (err) => console.log(err)
);
  
window.location.reload();
}

}
