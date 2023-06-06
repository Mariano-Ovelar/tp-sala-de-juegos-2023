export class Carta {
  img: string;
  valor: number;
  bocaArriba: boolean;
  dorso: string;
  constructor(img: string, valor: number) {
    this.img = img;
    this.valor = valor;
    this.bocaArriba = false;
    this.dorso = '../../../../../assets/img/cartas/dorso.jpg';
  }
}
