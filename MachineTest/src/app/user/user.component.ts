import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


import { NgxUiLoaderService } from "ngx-ui-loader";
export class User {
  id!: number
  name!: string
  username !: string;
  email !: string;
  address!: Address
  company!: Company
}

export class Geo {
  lat !: string
  lng!: string
}

export class Address {
  city!: string
  geo!: Geo
  street !: string
  suite!: string
  zipcode!: string
}
export class Company {
  bs !: string
  catchPhrase !: string
  name !: string

}



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  currentPage: number = 1;
  user: User = new User();
  userdata: User[] = [];
  userAddress: Address = new Address();
  isShow: boolean = false;

  constructor(private userservice: UserService, private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.LoaderOnOff(5000);
    this.GetUsersData();
  }

  //By using this method will get all users data
  GetUsersData() {
    // this.ngxService.start();
    this.userservice.GetUsers().subscribe((responce: any) => {
      this.userdata = responce;
      //we need to use stop and start loader between request and repsonse but we have less data loader will stop immediately
      //thats why i user timer 
      //this.ngxService.stop();
    })
  }

  //we can show pop-up
  OnViewAddress(add: Address) {
    this.isShow = true;
    this.userAddress = add;
  }

  //we can close pop-up
  OnClose() {
    this.isShow = false;

  }

  //this method will show loader for given time
  LoaderOnOff(time: number) {
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, time);
  }


}
