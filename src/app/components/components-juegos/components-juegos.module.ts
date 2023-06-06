import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuegosListaComponent } from './juegos-lista/juegos-lista.component';
import { RouterModule } from '@angular/router';
import { LetrasComponent } from './ahorcado/letras/letras.component';



@NgModule({
  declarations: [
    JuegosListaComponent,
    LetrasComponent,
  ],
  exports:[
    JuegosListaComponent,
    LetrasComponent,


  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsJuegosModule { }
