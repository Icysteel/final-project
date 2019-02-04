import { MapsService } from './maps/maps.service';

import { SpinnerInterceptor } from './interceptors/spinner-interceptor.service';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CoreModule } from './core/core.module';
import { AuthInterceptor } from './interceptors/auth-interceptor.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ServerErrorComponent } from './components/server-error/server-errror.component';
import { ServerErrorInterceptor } from './interceptors/server-error-interceptor.service';
import { ToastrModule } from 'ngx-toastr';
import { AgmCoreModule } from '@agm/core';
import { MapsComponent } from './maps/maps/maps.component';
import { AgmDirectionModule } from 'agm-direction';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    ServerErrorComponent,
    MapsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    SharedModule,
    AppRoutingModule,
    CoreModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: environment.API_KEY
    }),
    AgmDirectionModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorInterceptor,
      multi: true
    },
    MapsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
