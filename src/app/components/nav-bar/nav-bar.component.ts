import { Component, OnInit } from '@angular/core';
import { dropdown, fade } from 'src/app/animations/animations';
import { User } from 'src/app/Models/user';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations:[
    dropdown
  ]
})
export class NavBarComponent implements OnInit {
  cartCount:Number = 0;
  isAuthenticated:Boolean = false;
  viewLogout:boolean = false;
  user:User = {firstName:"",lastName:"",fullname:"",username:"",password:"",profilePicture:""};
  constructor(private productService: ProductService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.productService.cartCount$.subscribe( count => {
      this.cartCount = count;
    })
    this.userService.auth$.subscribe(auth =>{
      this.isAuthenticated = auth;
    })
    this.userService.user$.subscribe(user =>{
      this.user = user;
    })
  }
  showLogoutButton(){
    if(this.viewLogout==false){
      this.viewLogout = true;
    }
    else{
      this.viewLogout = false;
    }
  }
  hideLogoutButton(){
    if(this.viewLogout==true){
      this.viewLogout = false;
    }
  }
  logout(){
    this.viewLogout = false;
    this.user = {firstName:"",lastName:"",fullname:"",username:"",password:"",profilePicture:""};
    this.userService.getauth(false);
    this.userService.user = null;
    this.userService.isAuthenticated = false;
    this.userService.getUser(this.user);
    this.router.navigateByUrl('/login');
    this.productService.getCartCount(0);
    this.productService.cart = []
  }
}
