import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ElementRef, HostBinding, HostListener, OnInit, ViewChild } from '@angular/core';
import { Directive } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {

numbers = [3,5,8,6,4,10];
sortOrder = 'asc';
showList: boolean = false;
get sortedNumbers(){
  const sortedArr = [...this.numbers].sort((a,b) => {
    if(this.sortOrder === 'asc'){
      return a - b;
  }
  else{
    return b - a;
 } });

 return sortedArr;
}
  
showSorting(){
  this.showList = true;
}

}


