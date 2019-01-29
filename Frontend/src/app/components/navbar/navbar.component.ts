import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { NotificatorService } from 'src/app/core/notificator.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  public isLoggedIn: boolean;
  private loginSubscription: Subscription;

  public constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly notificator: NotificatorService
  ) { }


  public ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(
      isLogged => (this.isLoggedIn = isLogged)
    );
  }

  public ngOnDestroy(): void {
    this.loginSubscription.unsubscribe();
  }

  public logout(): void {
    this.authService.logoutUser();
    this.router.navigate(['/home']);
    this.notificator.success('Logged out successfully!');
  }

}
