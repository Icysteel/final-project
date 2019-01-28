import { AuthService } from '../../core/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificatorService } from 'src/app/core/notificator.service';
import { EnginnerModel } from '../models/engineer.model';

@Component({
  selector: 'app-register',
  templateUrl: './engineer.component.html'
})
export class EngineerComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly notificator: NotificatorService
  ) { }


  public register(userData: EnginnerModel): void {
    this.authService.registerEngineer(userData).subscribe(
      () => {
        this.notificator.success('Registered successfully!');
        this.router.navigate(['/home']);
      },
      error => {
        console.log(error);
        this.notificator.error('Reason...', 'Registration failed!');
      }
    );
  }

  public cancel(): void {
    this.router.navigate(['/home']);
  }
}
