import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/services/user.service';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
  animations:[
    trigger('fade',[
      transition(':enter',[
        query('h2', style({ opacity:0, transform: 'translateX(40px)'})),
        query('h3', style({ opacity:0, transform: 'translateX(-40px)'})),
        query('h2,h3', stagger('300ms',[
          animate('500ms 150ms ease-out',style({ opacity:1, transform: 'translateX(0)' }))
        ]))
      ])
    ])
  ]
})
export class CheckOutComponent implements OnInit {

  user:User = {firstName:"",lastName:"",fullname:"",username:"",password:"",profilePicture:""};
  isAuthenticated:Boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.user;
    this.isAuthenticated = this.userService.isAuthenticated;
  }
}
