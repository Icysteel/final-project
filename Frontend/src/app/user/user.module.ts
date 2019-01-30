
import { AddDeviceComponent } from './../devices/add-device/add-device.component';
import { DevicesListComponent } from './../devices/devices-list/devices-list.component';
import { DevicesService } from './../devices/devices.service';
import { LengthDirective } from './../directives/length.directive';
import { BoldMeDirective } from './../directives/bold.directive';
import { SentenceCasePipe } from './../pipes/sentence-case.pipe';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDataService } from './services/users-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EngineerComponent } from './engineer/engineer.component';

@NgModule({
  imports: [SharedModule, UserRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [
    RegisterComponent,
    LoginComponent,
    EngineerComponent,
    DevicesListComponent,
    UsersListComponent,
    AddDeviceComponent,
    SentenceCasePipe,
    BoldMeDirective,
    LengthDirective],
  providers: [UserDataService, DevicesService]
})
export class UserModule { }
