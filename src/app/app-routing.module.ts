import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {path: "",redirectTo:"register",pathMatch:"full"},
  {path: "register",component:RegistrationComponent},
  {path: "getUsers",component:UsersListComponent},
  {path: "getUser",component:UsersListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
