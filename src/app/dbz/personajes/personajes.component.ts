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

  nuevoPersonaje: Personaje = {
    nombre: "",
    poder: 0
  }

  enviar() {
    if (this.nuevoPersonaje.nombre.trim().length===0) {
      return;
    }
   this.personajess.push(this.nuevoPersonaje)
    this.nuevoPersonaje = {
      nombre: "",
      poder: 0
    }
  }

}
