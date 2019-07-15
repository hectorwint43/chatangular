import { Injectable } from '@angular/core';
import { Usuario } from './usuarios.model';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private vari:string = "http://127.0.0.1:3333/usuario/eliminar";
  private vari2:string = "http://127.0.0.1:3333/usuario";
  private vari3:string = "http://127.0.0.1:3333/usuario/editar";

  constructor(private httpclient:HttpClient) { }

  
  getusuariouno(id:number): Observable<Usuario>
  {
     
    return this.httpclient.get<Usuario>(`${this.vari2}/${id}`);
  }

  destruirUsuario(id:number): Observable<void>{
    return this.httpclient.delete<void>(`${this.vari}/${id}`);
  }

  getusuario(): Observable<Usuario[]>
  {
    return this.httpclient.get<Usuario[]>("http://127.0.0.1:3333/usuario");
  }

  agregarUsuario(usuario: Usuario):Observable<Usuario> {
    return this.httpclient.post<Usuario>("http://127.0.0.1:3333/usuario/guardar",usuario,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      });
      }


      editarUsuario(usuario: Usuario,id:number):Observable<void> {

        return this.httpclient.put<void>(`${this.vari3}/${id}`,usuario,
          {
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            })
          });
          }

      nuevousuario():Usuario{
        return{
          id:0,
          username:'',
          email:'',
          password:''
        };
        
        
      }

}
