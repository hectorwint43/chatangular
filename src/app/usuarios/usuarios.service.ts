import { Injectable } from '@angular/core';
import { Usuario } from './usuarios.model';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  // private vari:string = "http://192.168.43.146:3333/usuario/eliminar";
  private vari:string = "http://192.168.43.146:3333/amigo/eliminar";
  private vari2:string = "http://192.168.43.146:3333/usuario";
  private varicontac:string = "http://192.168.43.146:3333/amigosconsulta";
  private vari3:string = "http://192.168.43.146:3333/usuario/editar";
  private url:string = "http://192.168.43.146:3333/";
  private url2:string = "http://192.168.43.146:3333/verusua";
  private url3:string = "http://192.168.43.146:3333/usuario/especial";
  private agregaramigo:string = "http://192.168.43.146:3333/amigo/agregar";
  private urlvergrupos:string = "http://192.168.43.146:3333/grupoconsula";
  private urlverungrupo:string = "http://192.168.43.146:3333/grupoveruno";
  private urlguardargrupo:string = "http://192.168.43.146:3333/grupo/guardar";
  private urlagregaramigogrupo:string = "http://192.168.43.146:3333/grupo/agregaramigogrupo";

  private destruirgrupoamigo:string = "http://192.168.43.146:3333/grupo/eliminaramistadgrupal";

  constructor(private httpclient:HttpClient) { }

  // para agregar grupos---------
  agregargrupo(nombregrupo:string, id){
    var datos={nombregrupo:nombregrupo}
  return this.httpclient.post(`${this.urlguardargrupo}/${id}`,datos);  
  }

  agregaramigogrupo(email:string, idgrupo){
    var datos={email:email,idgrupo:idgrupo}
  return this.httpclient.post(this.urlagregaramigogrupo,datos);  
  }
  // -----------------------------------------

  getparticipantegrupo(idgrupo)
  {
    return this.httpclient.get("http://192.168.43.146:3333/participantesgrupo/"+idgrupo);
  }


  getmisgrupos(id)
  {
    return this.httpclient.get(`${this.urlvergrupos}/${id}`);
  }

  getmiscontactos(id)
  {
    return this.httpclient.get(`${this.varicontac}/${id}`);
  }
  
  getusuariouno(id:number): Observable<Usuario>
  {
     
    return this.httpclient.get<Usuario>(`${this.vari2}/${id}`);
  }

  destruiramigogrupal(id)
  {
    return this.httpclient.delete(`${this.destruirgrupoamigo}/${id}`);
  }

  destruirUsuario(id:number): Observable<void>{
  //  utilizaremos esto para destruir la relacion entre usuarios
    return this.httpclient.delete<void>(`${this.vari}/${id}`);
  }
// para agregar nuevos amiigooos---------
  agregaramigosnuevos(email:string, miid){
    var datos={miid:miid ,email:email}
  return this.httpclient.post(this.agregaramigo,datos);  
  }
  // -----------------------------------------

  getusuario(): Observable<Usuario[]>
  {
    return this.httpclient.get<Usuario[]>("http://192.168.43.146:3333/usuario");
  }

  agregarUsuario(usuario: Usuario):Observable<Usuario> {
    return this.httpclient.post<Usuario>("http://192.168.43.146:3333/usuario/guardar",usuario,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      });
      }

      Login(email:string, password:string){
        var datos={email:email, password:password}
      return this.httpclient.post(this.url+"login",datos);  
      }

      // Logininfo(email:string)
      // {
      //   var datos2={email:email};
      // return this.httpclient.post(this.url2,datos2);  
      // }

      Logininfo(email:string): Observable<Usuario>
      {
        var datos2={email:email};
      return this.httpclient.post<Usuario>(this.url2,datos2);  
      }

      miusuarioespecial(id): Observable<Usuario>
      {
        var datos2={id:id};
      return this.httpclient.post<Usuario>(this.url3,datos2);  
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
          password:'',
          foto:''
        };
      }

      nuevousuario2(ids):Usuario{
        return{
          id:ids,
          username:'',
          email:'',
          password:'',
          foto:''
        };
      }

}
