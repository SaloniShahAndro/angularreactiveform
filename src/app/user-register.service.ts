import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {User} from "./model/user.model";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  constructor(private http: HttpClient) { }
  getData(data) {
   
    var body = JSON.stringify(data)

    return this.http.post('http://localhost:4555/addAngUser', body, httpOptions)
  }

  getUsers() {
  
   
      return this.http.get<User[]>('http://localhost:4555/getuserlist');
      
    }
}
