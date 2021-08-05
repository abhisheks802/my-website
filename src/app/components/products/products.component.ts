import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [
    trigger('fade',[
      transition(':enter',[
        query('img', style({ opacity:0, transform: 'translateX(40px)'})),
        query('div', style({ opacity:0, transform: 'translateX(-40px)'})),
        query('img,div', stagger('300ms',[
          animate('500ms 150ms ease-out',style({ opacity:1, transform: 'translateX(0)' }))
        ]))
      ])
    ])
  ]
})
export class ProductsComponent implements OnInit {

  public products:any = [] ;
  public selectedProduct:any;
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => this.products = data);
  }
  displayProductDetails(product:any){
    this.router.navigate(['/products',product.id]);
  }
}
