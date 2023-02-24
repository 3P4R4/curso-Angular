import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajesHijosComponent } from './personajes-hijos/personajes-hijos.component';
import { FormsModule } from '@angular/forms';








@NgModule({
  declarations: [
    PersonajesHijosComponent
  ],
  exports:[
    PersonajesHijosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
    
  ]
})
export class DbzModule { }
