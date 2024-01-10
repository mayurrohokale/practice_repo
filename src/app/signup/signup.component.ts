import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy{
  @Input() items:string[]= [];
  @Output() itemDeleted = new EventEmitter<number>();

  deleteIndex(index:number){
    this.itemDeleted.emit(index);
  }

  ngOnInit(): void {
    console.log('child component is initialized');
  }
  ngOnDestroy(): void {
    console.log('child component is destroy');
  }
}
