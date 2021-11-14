import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserListServiceService {

  constructor(private http: HttpClient) { }

  public getAllUsers(){
    return this.http.get("http://localhost:8080/api/users", {responseType:'text' as 'json'});
  }

  public getUserById(id:number){
    return this.http.get("http://localhost:8080/api/user/"+id, {responseType:'text' as 'json'});

  }
}
