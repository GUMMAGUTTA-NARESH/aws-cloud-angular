import { Component, OnInit } from '@angular/core';
// import { User } from '../user';
import { UserListServiceService } from '../user-list-service.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public message:any;
  public id : any;
  // users : User[] = [];


  constructor(private service: UserListServiceService) { }

  ngOnInit(): void {
  }

  public getAllUsers(){
    let resp = this.service.getAllUsers();
    resp.subscribe((data)=>this.message=data);
    // this.service.getAllUsers().subscribe(
    //   response => {
    //     this.users = response;
    //   }
    // );

  }

  public getUserById(id : number){
    let resp = this.service.getUserById(id);
    resp.subscribe((data)=>this.message=data);
  }

}
