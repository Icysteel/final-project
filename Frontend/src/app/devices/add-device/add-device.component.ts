import { DeviceModel } from './../device.model';
import { AuthService } from '../../core/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificatorService } from 'src/app/core/notificator.service';


@Component({
  selector: 'app-register',
  templateUrl: './add-device.component.html'
})
export class AddDeviceComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly notificator: NotificatorService
  ) { }


  public register(deviceData: DeviceModel): void {
    this.authService.registerDevice(deviceData).subscribe(
      () => {
        console.log(deviceData);
        this.notificator.success('Registered successfully!');
        this.router.navigate(['users/devices']);
      },
      error => {
        console.log(deviceData);
        console.log(error);
        this.notificator.error('Reason...', 'Failed');
      }
    );
  }

  public cancel(): void {
    this.router.navigate(['/home']);
  }
}
