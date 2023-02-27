import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-personaje-hijo',
  templateUrl: './personaje-hijo.component.html',
  styleUrls: ['./personaje-hijo.component.css']
})
export class PersonajeHijoComponent {
  @Input() personajes: Personaje[] = [];
}
