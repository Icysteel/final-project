
import { AddDeviceComponent } from './../devices/add-device/add-device.component';
import { DevicesListComponent } from './../devices/devices-list/devices-list.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UsersListComponent } from './users-list/users-list.component';
import { AuthRouteActivatorService } from '../core/route-guards/auth-route-activator.service';
import { AnonymousRouteActivatorService } from '../core/route-guards/anonymous-route-activator.service';
import { EngineerComponent } from './engineer/engineer.component';

const routes: Routes = [

  {
    path: 'all',
    component: UsersListComponent,
    canActivate: [AuthRouteActivatorService]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AnonymousRouteActivatorService]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AnonymousRouteActivatorService]
  },
  {
    path: 'add-engineer',
    component: EngineerComponent,
    canActivate: [AuthRouteActivatorService]
  },
  {
    path: 'devices',
    component: DevicesListComponent,
    canActivate: [AuthRouteActivatorService]
  },
  {
    path: 'add-device',
    component: AddDeviceComponent,
    canActivate: [AuthRouteActivatorService]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
