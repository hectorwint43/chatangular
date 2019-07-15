import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreachatComponent } from './areachat/areachat.component';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MensajesService } from './mensajes.service';

@NgModule({
  declarations: [AreachatComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[MensajesService]
})
export class MensajesModule { }
