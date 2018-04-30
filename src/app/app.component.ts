import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public input:string = "Le decorateur @Input permet de passer la data du component parent vers le component enfant";
  public output:string;

  getMessage(message:string): void{
  	this.output = message;
  }

  ecrireConsole(): void{
  	console.log('Hi :)');
  }
}
