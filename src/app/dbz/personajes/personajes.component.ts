import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

nuevo:Personaje={
  nombre: "Lenin",
  poder: 43000
}
  
  constructor(){
  }
}
