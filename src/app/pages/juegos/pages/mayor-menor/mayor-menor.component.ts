import { Component } from '@angular/core';
import { Carta } from 'src/app/models/carta';
import { MayorMenor } from 'src/app/models/mayor-menor';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.scss'],
})
export class MayorMenorComponent {
  dorso: string = '../../../../../assets/img/cartas/dorso.jpg';
  juegoMayorMenor: MayorMenor;
  cartaActual: Carta;
  siguienteCarta?: Carta;
  cartas: Carta[];
  constructor() {
    this.juegoMayorMenor = new MayorMenor();
    this.cartaActual = this.juegoMayorMenor.cartaActual;
    this.siguienteCarta = this.juegoMayorMenor.siguienteCarta;
    this.cartas = [];
  }
  ngOnInit() {}
  compararRespuesta(respuesta: string) {
    this.juegoMayorMenor.compararRespuesta(respuesta);
  }
}
