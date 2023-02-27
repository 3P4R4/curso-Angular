import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { PersonajeHijoComponent } from './personaje-hijo/personaje-hijo.component';








@NgModule({
  declarations: [
    PersonajesComponent,
    PersonajeHijoComponent,

  ],
  exports:[
    PersonajesComponent,

  ],
  imports: [
    CommonModule,
    FormsModule
    
  ]
})
export class DbzModule { }
