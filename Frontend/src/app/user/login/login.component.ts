import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';
import { NotificatorService } from 'src/app/core/notificator.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,

    // Here is used the module ngx-toastr https://www.npmjs.com/package/ngx-toastr registered at the app.module.ts
    private readonly notificator: ToastrService,
    private readonly formBuilder: FormBuilder,
  ) { }


  // Reactive forms
  ngOnInit() {

    const email = this.formBuilder.control('', [Validators.required]);
    const password = this.formBuilder.control('', [Validators.required]);
    this.loginForm = this.formBuilder.group({
      email,
      password,
    });
  }


  public login(): void {
    this.authService.loginUser(this.loginForm.value).subscribe(
      () => {
        this.notificator.success('Logged in successfully!');
        this.router.navigate(['/home']);
      },
      error => {
        console.log(error);
        this.notificator.error('Reason...', 'Login failed!');
      }
    );
  }

  public cancel(): void {
    this.router.navigate(['/home']);
  }
}
