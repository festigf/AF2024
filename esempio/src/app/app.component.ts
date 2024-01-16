import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'esempio: sono il titolo della app-root';
  
  visibile :boolean= true;

  contatoreGlobale: number = 0;
  
  eventoContatore(valore : number){
    console.log('eventoContatore',valore);
    this.contatoreGlobale = valore;
  }
}
