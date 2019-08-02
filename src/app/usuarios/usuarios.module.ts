import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltauComponent } from './altau/altau.component';
import { ListauComponent } from './listau/listau.component';
import { UpdateuComponent } from './updateu/updateu.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UsuariosService } from './usuarios.service';
import { AgregaramigosComponent } from './agregaramigos/agregaramigos.component';
import { AltagrupoComponent } from './altagrupo/altagrupo.component';
import { AgregaramigogrupoComponent } from './agregaramigogrupo/agregaramigogrupo.component';

@NgModule({
  declarations: [AltauComponent, ListauComponent, UpdateuComponent, LoginComponent, AgregaramigosComponent, AltagrupoComponent, AgregaramigogrupoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[UsuariosService]
})
export class UsuariosModule { }
