import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url:string = "/assets/data/products.json";
  public cart:any = [];
  public cartCount:number = 0;
  private cartCountSource = new Subject<Number>();
  cartCount$ = this.cartCountSource.asObservable();

  constructor(private http: HttpClient) { }
  
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.url);
  }
  getCartCount(count:Number){
    this.cartCountSource.next(count);
  }
}
