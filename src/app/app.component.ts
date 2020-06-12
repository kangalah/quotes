import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:string[];
  authors:string[];


  constructor(){
    this.quotes = ['Never quit', 'Happiness comes from sharing']
    this.authors = ['Joan Nanjala', 'Hannington Curl']
  } 
}
