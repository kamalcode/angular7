import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthService } from 'src/app/services/authtoken.service';
import { PowerBiService } from 'src/app/services/powerbi.service';
import { WindowRef } from 'src/app/services/WindowRef';
import { AuthenticationInterceptor } from 'src/app/services/authentication.interceptor';
//https://blog.angular-university.io/angular-service-worker/
@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AuthService,PowerBiService,WindowRef,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
