import { Component, DoCheck, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent  {

@Output() ChildData = new EventEmitter();

clicktoSend(){
  this.ChildData.emit('Hello From Child Component');
}

}
