import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { PersonajeHijoComponent } from './personaje-hijo/personaje-hijo.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './services/dbz.service';


@NgModule({
  declarations: [
    PersonajesComponent,
    PersonajeHijoComponent,
    AgregarComponent,

  ],
  exports:[
    PersonajesComponent,

  ],
  imports: [
    CommonModule,
    FormsModule 
  ],
  providers:[
    DbzService,
  ]
})
export class DbzModule { }
