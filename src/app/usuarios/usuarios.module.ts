import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltauComponent } from './altau/altau.component';
import { ListauComponent } from './listau/listau.component';
import { UpdateuComponent } from './updateu/updateu.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UsuariosService } from './usuarios.service';

@NgModule({
  declarations: [AltauComponent, ListauComponent, UpdateuComponent, LoginComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[UsuariosService]
})
export class UsuariosModule { }
