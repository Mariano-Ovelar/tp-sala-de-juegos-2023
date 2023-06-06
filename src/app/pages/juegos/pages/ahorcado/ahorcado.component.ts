import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss'],
})
export class AhorcadoComponent {
  palabraOculta = 'ABCD';
  letrasSeleccionadas: string[] = [];
  palabraMostrada: string = '';
  juegoTerminado: boolean = false;
  contadorIncorrectas: number = 0;
  @ViewChild('ahorcado', { static: true }) ahorcadoElementRef!: ElementRef;
  ngOnInit() {
    this.actualizarPalabra();
  }

  letraSeleccionada(letra: string) {
    if (!this.letrasSeleccionadas.includes(letra)) {
      this.letrasSeleccionadas.push(letra);
      if (!this.palabraOculta.includes(letra)) {
        this.contadorIncorrectas++; // Incrementar el contador si la letra no está en la palabra oculta
        this.actualizarImg();
      }
      this.actualizarPalabra();
    }
  }

  actualizarPalabra() {
    this.palabraMostrada = this.palabraOculta
      .split('')
      .map((letra) => (this.letrasSeleccionadas.includes(letra) ? letra : '_'))
      .join(' ');

    console.log(this.palabraMostrada); // Puedes usar esta variable para mostrarla en tu template
    console.log(this.palabraOculta); // Puedes usar esta variable para mostrarla en tu template
    setTimeout(() => {
      if (this.palabraMostrada.replace(/\s/g, '') === this.palabraOculta) {
        this.juegoTerminado = true;
        alert('¡Felicidades! Has adivinado la palabra.');
      }
    }, 10);
  }

  moveImg() {
    const backgroundPosition = `-${180 * this.contadorIncorrectas}px 0px`;
    this.ahorcadoElementRef.nativeElement.style.backgroundPosition =
      backgroundPosition;
  }
  moveImg2() {
    const backgroundPosition = `-${196 * this.contadorIncorrectas}px 220px`;
    this.ahorcadoElementRef.nativeElement.style.backgroundPosition =
      backgroundPosition;
  }
  actualizarImg() {
    this.moveImg();
    if (this.contadorIncorrectas > 2) this.moveImg2();
    if (this.contadorIncorrectas >= 5) {
      alert('Perdiste!!!!');
      this.juegoTerminado = true;
    }
  }
}
