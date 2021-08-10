import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string = "/assets/data/users.json";
  user:any;
  isAuthenticated:any;
  private userSource = new Subject<User>();
  user$ = this.userSource.asObservable();
  private authSource = new Subject<Boolean>();
  auth$ = this.authSource.asObservable();

  constructor(private http: HttpClient) { }
  
  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }
  getauth(isAuth:Boolean){
    this.authSource.next(isAuth);
  }
  getUser(user:User){
    this.userSource.next(user);
  }
}
