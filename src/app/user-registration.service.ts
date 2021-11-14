import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  baseUrl:string = "http://localhost:8080/";
  baseAwsUrl:string = "http://ec2-3-134-78-107.us-east-2.compute.amazonaws.com:8080/";
  constructor(private http: HttpClient) { }

  public doRegistration(user:User, urlType:boolean){
    if(urlType){
      return this.http.post(this.baseAwsUrl+"api/users",user, {responseType:'text' as 'json'});
    }else{
      return this.http.post(this.baseUrl+"api/users",user, {responseType:'text' as 'json'});
    }
    
   
  }

  public sendEmail(map:Map<String,Object>){
    return this.http.post("http://localhost:8080/api/email",map, {responseType:'text' as 'json'})
  }
}
