import { UserModel } from './../models/user.model';
import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/users-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html'
})
export class UsersListComponent implements OnInit {
  constructor(private readonly usersService: UserDataService) { }
  http: any;
  baseUrl: string;

  users: UserModel[];

  columnDefs = [
    { headerName: 'Email', field: 'email' },
    { headerName: 'Delete', field: 'this.deleteUser(user' }
  ];

  rowData: UserModel[];

  ngOnInit() {
    this.usersService.getAllUsers().subscribe(data => {
      this.users = data;
      this.rowData = data;
    });
  }


  deleteUser(user) {
    console.log('Deleted');
    this.usersService.deleteUser(user.email).subscribe(res => {
      console.log('Deleted');
    });
  }

}
