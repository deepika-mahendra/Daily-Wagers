import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Application } from './application';

const BaseUrl = 'http://localhost:3000/api/application'
@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http: HttpClient) { }
  createApplication(model):Observable<Application>{
      return this.http.post<Application>(`${BaseUrl}`,model);
     
   }
   getallApplication():Observable<Application[]>{
    return this.http.get<Application[]>(`${BaseUrl}`)
}
   getApplication(id):Observable<Application[]>{
       return this.http.get<Application[]>(`${BaseUrl}`)
   }
}
