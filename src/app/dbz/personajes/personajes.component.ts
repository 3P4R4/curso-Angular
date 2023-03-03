import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';



@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  personajess: Personaje[] = [
    {
      nombre: "GK",
      poder: 15000
    },
    {
      nombre: "VG",
      poder: 8500
    }
  ];
  agregarPersonaje(Personaje:Personaje){
    this.personajess.push(Personaje)
  }
}
