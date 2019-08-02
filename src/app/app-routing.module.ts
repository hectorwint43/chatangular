import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregaramigosComponent } from './usuarios/agregaramigos/agregaramigos.component';
import { AltagrupoComponent } from './usuarios/altagrupo/altagrupo.component';
import { AgregaramigogrupoComponent } from './usuarios/agregaramigogrupo/agregaramigogrupo.component';
import { LoginComponent } from './usuarios/login/login.component';
import { AltauComponent } from './usuarios/altau/altau.component';
import { ListauComponent } from './usuarios/listau/listau.component';
import { UpdateuComponent } from './usuarios/updateu/updateu.component';
import { AreachatComponent } from './mensajes/areachat/areachat.component';
import { AreachatgrupoComponent } from './mensajes/areachatgrupo/areachatgrupo.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  
    //-----------------RUTAS USUARIO--------------------
    {path: '',component: AltauComponent},
    {path: 'login',component:LoginComponent},
    {path: 'agregaramigo/:id',component:AgregaramigosComponent, canActivate:[LoginGuard]},
    // {path: 'altausuario',component:AltauComponent, canActivate:[LoginGuard]},
    {path: 'listausuario/:id',component:ListauComponent, canActivate:[LoginGuard]},
    {path: 'updateusuario/:id',component:UpdateuComponent, canActivate:[LoginGuard]},
    //-----------------RUTAS USUARIO--------------------

    //-----------------RUTAS CHAT--------------------
    {path: 'chatt/:id/:idchannel',component:AreachatComponent, canActivate:[LoginGuard]},
    {path: 'chattgrupo/:idgrupo/:nombregrupo',component:AreachatgrupoComponent, canActivate:[LoginGuard]},
    //-----------------RUTAS CHAT--------------------

    //-----------------RUTAS GRUPO--------------------
    {path: 'altagrupo',component:AltagrupoComponent, canActivate:[LoginGuard]},
    {path: 'agregaramigogrupo/:id',component:AgregaramigogrupoComponent, canActivate:[LoginGuard]}
    //-----------------RUTAS GRUPO--------------------
  
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }