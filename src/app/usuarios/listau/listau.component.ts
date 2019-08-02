import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../usuarios.model';
import { Router, ActivatedRoute } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-listau',
  templateUrl: './listau.component.html',
  styleUrls: ['./listau.component.css']
})
export class ListauComponent implements OnInit {

  // usuarios:Usuario[];
  id; 
  usuarios;
  grupos;
  usuario:Usuario;
  constructor(
    private route:ActivatedRoute,
    private usuarioservice: UsuariosService,
     private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.id = parseInt(params.get('id'));
      console.log('id del usuario '+this.id);
    });

    this.usuarioservice.Logininfo(localStorage.getItem('usuario')).subscribe(data =>
      this.usuario=data
     );
    // this.usuarioservice.getusuario().subscribe(data =>this.usuarios=data);
  console.log('HOLAA HOLAA MCFLY: '+localStorage.getItem('miid'));

    this.usuarioservice.getmiscontactos(localStorage.getItem('miid')).
    subscribe(data =>this.usuarios=data);

    this.usuarioservice.getmisgrupos(localStorage.getItem('miid')).
    subscribe(data =>this.grupos=data);
  }

  
  eliminarMono(id)
  {
    // lo que en realidad hara sera, eliminar la relacion de amistad de la cuenta
this.usuarioservice.destruirUsuario(id).subscribe(
  ()=> console.log(`Usuario with Id = ${id} deleted`),
      (err) => console.log(err)
);
    
    window.location.reload();
  }

  editarMono(id)
  {
    // le enviaremos nuestra propia informacion
    this.router.navigate(['/updateusuario',id])
  }

  Conversar(id,id2,idcanal)
  {
    // console.log('este es mi id para el channel '+idcanal);
    localStorage.setItem('channel', idcanal);
    console.log('este soy yo: '+id2);
    // localStorage.setItem('miid', id2);
    this.router.navigate(['/chatt',id,idcanal])
  }


  eliminarGrupo(id)
  {
    // lo que en realidad hara sera, eliminar la relacion de amistad de la cuenta
this.usuarioservice.destruirUsuario(id).subscribe(
  ()=> console.log(`Usuario with Id = ${id} deleted`),
      (err) => console.log(err)
);
    
    window.location.reload();
  }

  editarGrupo(id)
  {
    // le enviaremos nuestra propia informacion
    this.router.navigate(['/agregaramigogrupo',id])
  }

  ConversarGrupo(nombregrupo,idgrupo)
  {
    // console.log('este es mi id para el channel '+idcanal);
    // localStorage.setItem('channel', idcanal);
    console.log('id: '+idgrupo);
    console.log('nombre: '+nombregrupo);
    // localStorage.setItem('miid', id2);
    this.router.navigate(['/chattgrupo',idgrupo,nombregrupo])
  }


}
