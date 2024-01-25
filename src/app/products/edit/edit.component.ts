import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  newProductForm: Products = {
    id: 0,
    name: '',
    price:0
  }
  router: any;

  constructor(private productService: ProductService,
              private rout: ActivatedRoute){}
  ngOnInit(): void {
    this.productService.paramMap.subscribe((param: { get: (arg0: string) => any; })=>{
      let id = Number(param.get('id'));
      this.getProductsById(id);
    })
  }

  getProductsById(id: number){
    this.productService.getProductsById(id).subscribe((data) => {this.newProductForm = data});
  }
  
  updateProduct(){
    this.productService.updateProduct(this.newProductForm).subscribe({
      next: ()=>{
        this.router.navigate(['/products/home']);
      },
      error: (e) => {
        console.error(e);
      }
    });
  }
}
