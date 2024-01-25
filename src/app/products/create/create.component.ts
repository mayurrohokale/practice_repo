import { Component } from '@angular/core';
import { Products } from '../products';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  newProductForm: Products = {
    id: 0,
    name: '',
    price: 0
  }

  constructor(private productService: ProductService, private router: Router){}

  createProduct(){
    this.productService.createProduct(this.newProductForm)
    .subscribe({
      next: ()=>{
        this.router.navigate(['/products/home']);
      },
      error: (e)=>{
        console.error(e);
      }
    })
  }
}
