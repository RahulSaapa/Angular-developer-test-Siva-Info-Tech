import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

import { NgxUiLoaderService } from "ngx-ui-loader";


export class User {
  id!: number
  name!: string
  username !: string;
  email !: string;
}

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {

  userId !: number;
  id: any;
  userData: any;

  user: User = new User();
  userlist: User[] = []
  constructor(private userService: UserService, private route: ActivatedRoute, private navigate: Router, private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
    debugger;

    this.id = this.route.snapshot.paramMap.get('id');
    this.userId = +this.id

    this.userService.GetUserById(this.userId).subscribe(

      ((res: any) => {
        debugger
        this.userlist = res;
        this.user = res[0];;
        console.log(this.user);
      })

    )

    // if (this.userId != 0 && this.userId != undefined) {

    // }

  }

  //By using this method will get user data based omn UserId
  GetUserById(id: number) {
    this.ngxService.start();
    this.userService.GetUserById(id).subscribe((responce: any) => {
      this.userlist = responce;
      this.ngxService.stop();
    })
  }



}
