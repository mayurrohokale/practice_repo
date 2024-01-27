import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ElementRef, HostBinding, HostListener, Inject, OnInit, ViewChild, WritableSignal, computed, effect, signal, untracked } from '@angular/core';
import { Directive } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { DatePipe } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { DemoService } from './dependencies/demo.service';
import { FormControl, Validators, NgForm, ReactiveFormsModule } from '@angular/forms';
import { FormGroup,FormArray, FormBuilder } from '@angular/forms';
import { urlValidator } from './custom-validators/upperCase-validators';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { from } from 'rxjs';
import { interval } from 'rxjs';
import { timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConstantPool } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent implements OnInit{

  newItemName: string = '';
  newItemPrice: number | null = null;

  items = [
    {name: 'product-A', price: 10},
    {name: 'product-B', price: 15},
    {name: 'product-C', price: 20},
  ];

  itemList = signal(this.items);

  addItem(){
    if(this.newItemName && this.newItemPrice !== null){
      const newItem = { name : this.newItemName , price : this.newItemPrice};
      this.itemList.set([...this.itemList(), newItem]);

      this.newItemName = '';
      this.newItemPrice = null;
    }
  }

  removeItem(item: {name: string; price: number}){
    this.itemList.set(this.itemList().filter((i)=> i !==item));
  }

  totalPrice =  computed(()=> {
    return this.itemList().reduce((acc, curr) => acc + curr.price,0);
  })


  ngOnInit(): void {
  
  }

}