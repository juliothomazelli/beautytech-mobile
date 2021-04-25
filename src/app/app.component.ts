import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { ObjectUtils } from './utils/ObjectUtils';
import { RouterUtils } from './utils/RouterUtils';
import { WebSocketService } from './websocket/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public showColorRange = false;

  constructor(private router : Router, private websocket : WebSocketService, private navCtrl : NavController) {
    RouterUtils.getInstance().setNavCtrl(this.navCtrl);
  }

  scheduleClick(){
    RouterUtils.getInstance().goTo('home/dashboard');
  }

  notificationClick(){
    RouterUtils.getInstance().goTo('home/notification');
  }

  chatClick(){
    RouterUtils.getInstance().goTo('home/chat');
  }

  serviceClick(){
    RouterUtils.getInstance().goTo('home/service');
  }

  configurationClick(){
    RouterUtils.getInstance().goTo('home/configuration');
  }

  colorRangeVisibility(){
    this.showColorRange = !this.showColorRange;
  }

  logoutClick(){
    this.websocket.close();
    RouterUtils.getInstance().goTo('');
  }
}
