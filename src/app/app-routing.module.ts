import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './usuarios/login/login.component';
import { AltauComponent } from './usuarios/altau/altau.component';
import { ListauComponent } from './usuarios/listau/listau.component';
import { UpdateuComponent } from './usuarios/updateu/updateu.component';
import { AreachatComponent } from './mensajes/areachat/areachat.component';

const routes: Routes = [
  
    //-----------------RUTAS USUARIO--------------------
    {path: '',component: LoginComponent},
    //{path: 'login',component:LoginComponent},
    {path: 'altausuario',component:AltauComponent},
    {path: 'listausuario',component:ListauComponent},
    {path: 'updateusuario/:id',component:UpdateuComponent},
    //-----------------RUTAS USUARIO--------------------

    //-----------------RUTAS CHAT--------------------
    {path: 'chatt/:id',component:AreachatComponent}
    //-----------------RUTAS CHAT--------------------
  
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }