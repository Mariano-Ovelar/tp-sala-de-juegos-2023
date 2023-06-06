import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-letras',
  templateUrl: './letras.component.html',
  styleUrls: ['./letras.component.scss'],
})
export class LetrasComponent {
  botons: any[] = [];
  letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  bloquearBoton: boolean = false;
  @Output() letraSeleccionada = new EventEmitter<string>();
  @Input() juegoTerminado: boolean = false;
  ngOnInit() {
    this.letras.forEach((element) => {
      this.botons.push({ letra: element, bloquearBoton: false });
    });
  }

  seleccionarLetraBoton(boton: any) {
    if (!this.juegoTerminado) {
      boton.bloquearBoton = true;
      this.letraSeleccionada.emit(boton.letra);
    }
  }
}
