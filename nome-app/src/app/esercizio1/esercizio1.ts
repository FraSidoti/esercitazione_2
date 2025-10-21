import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-esercizio1',
  templateUrl: './esercizio1.html',
  imports: [CommonModule],
  styleUrls: ['./esercizio1.css']
})
export class Esercizio1 {
  // Variabile che controlla se mostrare o nascondere
  mostraMessaggio: boolean = true;

  // Metodo per cambiare (toggle)
  cambiaVisibilita() {
    this.mostraMessaggio = !this.mostraMessaggio;
  }
}