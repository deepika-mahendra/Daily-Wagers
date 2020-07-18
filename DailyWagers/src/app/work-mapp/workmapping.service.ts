import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorkMap } from './workMap';

@Injectable({
  providedIn: 'root'
})
export class WorkmappingService {
  constructor(private http: HttpClient) { }
  createWorkmap(model):Observable<WorkMap>{
      return this.http.post<WorkMap>('http://localhost:3000/api/workmap',model);
     
   }
   getWorkmap():Observable<WorkMap[]>{
    return this.http.get<WorkMap[]>('http://localhost:3000/api/workmap');
    }
}
