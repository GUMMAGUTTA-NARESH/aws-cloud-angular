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
  showMsg: boolean = false;
  public to :any;
  public subject :any;
  public body :any;



  constructor(private service: UserRegistrationService) { }

  ngOnInit(): void {
  }

  public registerNow(urlType: boolean){
    let resp = this.service.doRegistration(this.user, urlType);
    resp.subscribe((data)=>this.message=data);
    this.showMsg= true;
    // return this.service.doRegistration(this.user);
  }

  public sendEmail(urlType:boolean){
    const demo = {
      to: this.to,
      subject: this.subject,
      body: this.body,
      template:true
    }
    let resp = this.service.sendEmail(demo,this.urlType);
    resp.subscribe((data)=>this.message=data);
  }
}
