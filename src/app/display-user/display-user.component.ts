import { Component, OnInit } from '@angular/core';
import { UserRegisterService } from '../user-register.service';
import { User } from "../model/user.model";



@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
  public users: User[];
  constructor(private userService : UserRegisterService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(
      data => {
        this.users = data
        console.log(">>users>>",this.users)
      },
      err => console.log(err)
      );
  }

}
