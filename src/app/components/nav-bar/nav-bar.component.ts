import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  cartCount:Number = 0;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.cartCount$.subscribe( count => {
      this.cartCount = count;
    })
  }

}
