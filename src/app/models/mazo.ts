import { Carta } from './carta';

export class Mazo {
  cartas: Carta[];

  constructor() {
    this.cartas = [];
    this.generarCartas();
  }

  /* 
  genera cartas para el mazo
  */
  generarCartas() {
    for (let i = 1; i <= 13; i++) {
      let img = '../../../../../assets/img/cartas/cartaN' + i + '.jpg';
      this.cartas.push(new Carta(img, i));
    }
  }
  
  /* 
  saca una carta random del mazo y lo retorna
  */
  seleccionarCarta() {
    const indice = Math.floor(Math.random() * this.cartas.length);
    let cartaActual: Carta = this.cartas[indice];
    this.cartas.splice(indice, 1);
    return cartaActual;
  }
}
