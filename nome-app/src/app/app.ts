import { Component, signal } from '@angular/core';
import { Componente1 } from './componente1/componente1';
import { Post } from './post/post';
import { CommonModule } from '@angular/common';
import { Esercizio1 } from './esercizio1/esercizio1';

@Component({
  selector: 'app-root',
  imports: [Componente1,Post,CommonModule,Esercizio1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  messaggio = 'Ciao dal componente padre!';

  //array di post va messo nell'app.ts
posts = [
{
titolo: 'titolo1',
testo: 'esempio di testo1'
},
{
titolo: 'titolo1',
testo: 'esempio di testo2'
},
{
titolo: 'titolo3',
testo: 'esempio di testo3'
}
];
}
