import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Products } from '../products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Products[]=[];

  constructor(private productSevice: ProductService){}
  ngOnInit(): void {
   this.getProducts();
  }

  getProducts(){
    this.productSevice.getProducts().subscribe((data)=>{
      this.products=data;
    })
  }

}
