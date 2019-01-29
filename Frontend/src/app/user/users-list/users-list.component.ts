import { UserModel } from './../models/user.model';
import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/users-data.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html'
})
export class UsersListComponent implements OnInit {
  constructor(private readonly usersService: UserDataService) { }

  users: UserModel[];

  ngOnInit() {
    this.usersService.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }

}
