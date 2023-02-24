import { Component } from '@angular/core';

interface Personaje {
  nombre: string,
  poder: number
}

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  personajes: Personaje[] = [
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
   this.personajes.push(this.nuevoPersonaje)
    this.nuevoPersonaje = {
      nombre: "",
      poder: 0
    }
  }

}
