import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';


@Injectable()

export class DbzService{
    
    private _personajes: Personaje[] = [
        {
          nombre: "GK",
          poder: 15000
        },
        {
          nombre: "VG",
          poder: 8500
        }
      ];

      get personajes(): Personaje[]{
        return [...this._personajes]
      }

    constructor(){
        console.log("Servicio Init");
    }
    
}