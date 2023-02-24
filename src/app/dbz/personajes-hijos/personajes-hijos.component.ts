import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personajes-hijos',
  templateUrl: './personajes-hijos.component.html',

})
export class PersonajesHijosComponent {
  @Input() personajes: any[] =[]
}
