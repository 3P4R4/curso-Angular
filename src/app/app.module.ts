import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ContadorComponent} from 'src/contador/contador.component';

import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';
import { PersonajesComponent } from './dbz/personajes/personajes.component';






@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    PersonajesComponent,



  ],
  imports: [
    BrowserModule,
    DbzModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
