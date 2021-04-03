import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ObjectUtils } from './utils/ObjectUtils';
import { WebSocketService } from './websocket/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public showColorRange = false;

  constructor(private router : Router, private websocket : WebSocketService) {}

  scheduleClick(){
    this.router.navigateByUrl('home/dashboard');
  }

  notificationClick(){
    this.router.navigateByUrl('home/notification');
  }

  chatClick(){
    this.router.navigateByUrl('home/chat');
  }

  serviceClick(){
    this.router.navigateByUrl('home/service');
  }

  configurationClick(){
    this.router.navigateByUrl('home/configuration');
  }

  colorRangeVisibility(){
    this.showColorRange = !this.showColorRange;
  }

  logoutClick(){
    this.websocket.close();
    this.router.navigateByUrl('');
  }
}
