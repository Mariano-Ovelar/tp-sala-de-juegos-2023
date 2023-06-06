import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import { JuegosComponent } from './juegos.component';
import { AhorcadoComponent } from './pages/ahorcado/ahorcado.component';
import { MayorMenorComponent } from './pages/mayor-menor/mayor-menor.component';
import { LetrasComponent } from 'src/app/components/components-juegos/ahorcado/letras/letras.component';
import { ComponentsJuegosModule } from 'src/app/components/components-juegos/components-juegos.module';


@NgModule({
  declarations: [
    JuegosComponent,
    AhorcadoComponent,
    MayorMenorComponent,
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule,
    ComponentsJuegosModule
  ]
})
export class JuegosModule { }
