import { AfterContentChecked, AfterContentInit, Component, OnInit } from '@angular/core';
import { Directive } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent  {

  itemsArr: string[]= ['Item1','Item2', 'Item3'];

  addItem(){
    const newItem = `Item ${this.itemsArr.length +1}`;
    this.itemsArr.push(newItem);
  }

  deleteItem(index:number){
    if(index >=0 && index < this.itemsArr.length){
      this.itemsArr.splice(index, 1);
    }
  }

  ngOnInIt():void {
    console.log('App component initialized');
  }
  
}

