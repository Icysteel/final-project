import { UserModel } from './../models/user.model';
import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/users-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html'
})
export class UsersListComponent implements OnInit {
  http: any;
  baseUrl: string;
  constructor(private readonly usersService: UserDataService) { }

  users: UserModel[];

  ngOnInit() {
    this.usersService.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }

  deleteUser(user) {
    this.usersService.deleteUser(user.email).subscribe(res => {
      console.log('Deleted');
    });
  }

}
