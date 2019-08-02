import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreachatComponent } from './areachat/areachat.component';
import {HttpClientModule,HttpClient } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MensajesService } from './mensajes.service';
import { MensajesgrupoService } from './mensajesgrupo.service';
import { AreachatgrupoComponent } from './areachatgrupo/areachatgrupo.component';

@NgModule({
  declarations: [AreachatComponent, AreachatgrupoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[MensajesService, MensajesgrupoService]
})
export class MensajesModule { }
