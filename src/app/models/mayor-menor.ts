import { Carta } from './carta';
import { Mazo } from './mazo';

export class MayorMenor {
  mazo: Mazo;
  juegoTerminado: boolean;
  siguienteCarta: Carta;
  puntaje: number;
  cartaActual: Carta;
  cartasMostradas: Carta[] = [];

  constructor() {
    this.mazo = new Mazo();
    this.cartaActual = this.mazo.seleccionarCarta();
    this.cartaActual.bocaArriba = true;
    this.siguienteCarta = this.mazo.seleccionarCarta();
    this.juegoTerminado = false;
    this.puntaje = 0;
    this.cartasMostradas.push(this.cartaActual);
    this.cartasMostradas.push(this.siguienteCarta);
  }

  compararRespuesta(respuesta: string) {
    if (!this.juegoTerminado) {
      this.siguienteCarta.bocaArriba = true;
      if (
        (respuesta === 'mayor' &&
          this.siguienteCarta.valor > this.cartaActual.valor) ||
        (respuesta === 'menor' &&
          this.siguienteCarta.valor < this.cartaActual.valor)
      ) {
        this.puntaje += 10;
      } else {
        this.puntaje -= 5;
      }
      if (this.mazo.cartas.length > 0) {
          this.cartaActual = this.siguienteCarta;
          this.siguienteCarta = this.mazo.seleccionarCarta();
        this.cartasMostradas.push(this.siguienteCarta);
      } else {
        // Juego terminado
        console.log('Juego terminado. Puntaje final:', this.puntaje);
        /* alert('Juego terminado. Puntaje final:' + this.puntaje); */
        this.juegoTerminado = true;
      }
    }
  }
}
