import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginRest } from './rest/login.rest';
import { HttpService } from './http/http.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WebSocketService } from './websocket/websocket.service';
import { ServiceRest } from './rest/service.rest';
import { ScheduleRest } from './rest/schedule.rest';

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [

  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,
    IonicModule.forRoot()
  ],
  providers: [
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy
    },
    HttpService,
    LoginRest,
    WebSocketService,
    ServiceRest,
    ScheduleRest
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
