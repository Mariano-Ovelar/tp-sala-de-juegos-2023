import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuegosListaComponent } from './juegos-lista/juegos-lista.component';



@NgModule({
  declarations: [
    JuegosListaComponent
  ],
  exports:[
    JuegosListaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsJuegosModule { }
