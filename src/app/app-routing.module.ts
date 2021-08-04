import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BranchesComponent } from './components/branches/branches.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ViewProductComponent } from './components/products/view-product/view-product.component';

const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'about',component: AboutComponent},
  {path: 'products',component: ProductsComponent},
  {path: 'branches',component: BranchesComponent},
  {path: 'products/:id',component: ViewProductComponent},
  {path: 'cart',component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,AboutComponent,ProductsComponent,BranchesComponent,ViewProductComponent,CartComponent]