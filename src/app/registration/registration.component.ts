import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user:User= new User("","","","");
  public message:any;
  urlType: boolean = false;



  constructor(private service: UserRegistrationService) { }

  ngOnInit(): void {
  }

  public registerNow(urlType: boolean){
    let resp = this.service.doRegistration(this.user, urlType);
    resp.subscribe((data)=>this.message=data);
    // return this.service.doRegistration(this.user);
  }

  public sendEmail(){
    let resp = this.service.sendEmail(new Map);
    resp.subscribe((data)=>this.message=data);
  }
}
