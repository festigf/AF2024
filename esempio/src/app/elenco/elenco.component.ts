import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrl: './elenco.component.css'
})
export class ElencoComponent {
  @Input() titolo: string| undefined;
  @Output() eventoContatore = new EventEmitter<number>(); //evento personalizzato

  contatore: number = 0; //attributo di classe

  inc(){ //gestore di evento legato al button
    this.contatore++;
    this.eventoContatore.emit(this.contatore); //emette evento personalizzato
  }

}
