import { AnonymousRouteActivatorService } from './route-guards/anonymous-route-activator.service';
import { AuthRouteActivatorService } from './route-guards/auth-route-activator.service';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RequesterService } from './requester.service';
import { StorageService } from './storage.service';
import { NotificatorService } from './notificator.service';
import { AuthService } from './auth.service';

@NgModule({
  providers: [
    RequesterService,
    StorageService,
    NotificatorService,
    AuthService,
    AuthRouteActivatorService,
    AnonymousRouteActivatorService
  ]
})
export class CoreModule {
  public constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('Core module is already provided!');
    }
  }
}
