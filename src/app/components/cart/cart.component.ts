import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { fade } from 'src/app/animations/animations';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  animations: [
    fade
  ]
})
export class CartComponent implements OnInit {

  public cart:any = [];
  public bill:number=0;
  isCartEmpty:boolean = false;
  showbuyButton:boolean = false;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.cart = this.productService.cart;
    for(let product of this.cart){
      this.bill = this.bill+product.quantity*product.price;
    }
    
  }
  removeProduct(product:any){
    this.bill = this.bill - product.quantity*product.price;
    this.productService.cart.forEach((element:any,index:any) => {
      if(element==product) this.productService.cart.splice(index,1);
    });
    this.cart = this.productService.cart;
    this.productService.cartCount = this.productService.cartCount - 1;
    this.productService.getCartCount(this.productService.cartCount);
  }
  showProduct(product:any){
    this.router.navigate(['/products',product.id]);
  }
  checkOut(){
    if(this.bill==0){
      this.isCartEmpty = true;
    }
    else{
      this.isCartEmpty = false;
      this.productService.cart = [];
      this.productService.cartCount = 0;
      this.productService.getCartCount(this.productService.cartCount);
      this.router.navigateByUrl('/checkOut');
    }
  }
}
