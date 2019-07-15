import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../usuarios.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listau',
  templateUrl: './listau.component.html',
  styleUrls: ['./listau.component.css']
})
export class ListauComponent implements OnInit {

  usuarios:Usuario[];

  constructor(private usuarioservice: UsuariosService, private router:Router) { }

  ngOnInit() {
    this.usuarioservice.getusuario().subscribe(data =>this.usuarios=data);
  }

  
  eliminarMono(id)
  {
this.usuarioservice.destruirUsuario(id).subscribe(
  ()=> console.log(`Usuario with Id = ${id} deleted`),
      (err) => console.log(err)
);
    
    window.location.reload();
  }

  editarMono(id)
  {
    this.router.navigate(['/updateusuario',id])
  }

  Conversar(id)
  {
    this.router.navigate(['/chatt',id])
  }

}
