import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http: HttpClient) { }

  public doRegistration(user:User){
    // return this.http.post("http://localhost:8080/api/users",user, {responseType:'text' as 'json'});
    return this.http.post("ec2-3-134-78-107.us-east-2.compute.amazonaws.com:8080/api/users",user, {responseType:'text' as 'json'});
  }

  public sendEmail(map:Map<String,Object>){
    return this.http.post("http://localhost:8080/api/email",map, {responseType:'text' as 'json'})
  }
}
