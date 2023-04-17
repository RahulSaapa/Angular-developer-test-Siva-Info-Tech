import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
  {path : "", component:UserComponent},
  {path : "user", component:UserComponent},
  {path : "User/:id" , component : UserEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
