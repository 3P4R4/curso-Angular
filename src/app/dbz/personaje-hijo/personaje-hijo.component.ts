import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from "../services/dbz.service";

@Component({
  selector: 'app-personaje-hijo',
  templateUrl: './personaje-hijo.component.html',
  styleUrls: ['./personaje-hijo.component.css']
})
export class PersonajeHijoComponent {
 

  get personaje(){
  return this.dbzservice.personajes
}
constructor(private dbzservice: DbzService){

}
}
