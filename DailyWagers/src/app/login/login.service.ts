import { Injectable } from '@angular/core';
import {User} from './login'
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
  getUser():Observable<User[]>{
    return this.http.get<User[]>('http://localhost:3000/api/user');
    }
    createUser(model):Observable<User>{
      return this.http.post<User>('http://localhost:3000/api/user/signup',model);
     
   }
   loginUser(model):Observable<User>{
    return this.http.post<User>('http://localhost:3000/api/user/login',model);
   
 }
}
