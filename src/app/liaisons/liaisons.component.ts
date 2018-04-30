import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-liaisons',
  templateUrl: './liaisons.component.html',
  styleUrls: ['./liaisons.component.css']
})
export class LiaisonsComponent implements OnInit {

	@Output('cle') event:EventEmitter<null> = new EventEmitter();

  constructor() { }
  
  ngOnInit() {
  }

  execute(): void{
  	this.event.emit();
  }
}
