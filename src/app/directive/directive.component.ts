import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

	public name: string;
	
	@Input('') messageInput: string;
	
	@Output('send') sendToParent: EventEmitter<string> = new EventEmitter<string>();
	
	public message: string = "Le decorateur @Output permet de passer la data du component enfant vers le component parent";;

	public status:boolean = true;

	public texts: string[] = ['un','deux','trois'];
  
  constructor() { }

  ngOnInit() {
  }

  execute(): void{
  	this.sendToParent.emit(this.message);
  }

  inverser(): void{
  	this.status = !this.status;
  }

}
