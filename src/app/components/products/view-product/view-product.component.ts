import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
  animations: [
    trigger('fade',[
      transition(':enter',[
        query('.product-content', style({ opacity:0, transform: 'translateX(40px)'})),
        query('.product-image', style({ opacity:0, transform: 'translateX(-40px)'})),
        query('.product-content,.product-image', stagger('300ms',[
          animate('500ms 150ms ease-out',style({ opacity:1, transform: 'translateX(0)' }))
        ]))
      ])
    ])
  ]
})
export class ViewProductComponent implements OnInit {
  
  public selectedProduct:any;
  public productId:any;
  public products:any = [];
  public quantity:number = 1;
  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit(){
    this.productId = this.route.snapshot.paramMap.get('id');
    this.productService.getProducts().subscribe(data => {this.products = data
    this.selectedProduct = this.products.find((prod:any) => prod.id == this.productId);
    })
  }
  addItem(){
    this.quantity = this.quantity + 1;
  }
  removeItem(){
    if(this.quantity>1){
      this.quantity = this.quantity - 1;
    }
    else{
      this.quantity = 1;
    }
  }
  addToCart(productId:any){
    var product = this.productService.cart.find((prod:any) => prod.id == productId);
    this.selectedProduct.quantity = this.quantity;
    if(product == null){
    this.productService.cart.push(this.selectedProduct);
    this.productService.cartCount = this.productService.cartCount + 1;
    this.productService.getCartCount(this.productService.cartCount);
    }
    else{
      this.productService.cart.forEach((element:any,index:any) => {
        if(element==product) this.productService.cart.splice(index,1);
      });
      this.productService.cart.push(this.selectedProduct);
    }
    this.router.navigate(['/cart']);
  }
}
