import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.auth.uid.subscribe((uid) => console.log(uid));
    // this.auth.singUp('Ivan@abv.bg', 'parolaribamech');
    this.auth.logOut();
  }
  constructor (private readonly auth: AuthService) {

  }
}
