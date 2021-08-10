import { Component, OnInit } from '@angular/core';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { UserService } from 'src/app/services/user.service';
import {Router} from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('fade',[
      transition(':enter',[
        query('.login-details', style({ opacity:0, transform: 'translateX(40px)'})),
        query('.heading', style({ opacity:0, transform: 'translateX(-40px)'})),
        query('.login-details,.heading', stagger('300ms',[
          animate('500ms 150ms ease-out',style({ opacity:1, transform: 'translateX(0)' }))
        ]))
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {
  username:string = '';
  password:string = '';
  public users:any = [];
  errorMsg:boolean = false;
  ifInfoIcon:boolean = false;

  constructor(private userService: UserService, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data=> this.users = data);
  }
  signIn(){
    let getUser = this.users.filter((user:any) => user.username == this.username && user.password == this.password)[0];
    if(getUser!=null){
      this.userService.user = getUser;
      this.userService.isAuthenticated = true;
      this.userService.getUser(getUser);
      this.userService.getauth(true);
      this.router.navigateByUrl('/home');
    }
    else{
      this.errorMsg = true;
    }
  }
  removeErrorMsg(){
    this.errorMsg = false;
  }
  enterCredentials(){
    this.username = "abhishek";
    this.password = "test1234";
  }
}
