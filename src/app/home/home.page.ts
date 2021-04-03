import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObjectUtils } from '../utils/ObjectUtils';
import { StorageUtils, StorageUtilsTypes } from '../utils/StorageUtils';
import { WebSocketService } from '../websocket/websocket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public pages       = this.createPages();

  constructor(private router : Router, private websocket: WebSocketService) { }

  ngOnInit() {
    this.router.navigateByUrl('home/dashboard');

    const userInfo = StorageUtils.getDataJSON(StorageUtilsTypes.userInfo);
    
    if (ObjectUtils.isNullOrUndefined(userInfo)){
      return;
    }

    this.websocket.connect(userInfo.Key, userInfo.FkCompany);
  }

  createPages(){
    return [
      {
        title: "Agenda",
        route : "dashboard",
        icon : "home"
      },
      {
        title: "Notificações",
        route : "notification",
        icon : "notifications"
      },
      {
        title: "Chat",
        route : "chat",
        icon : "chatbubble-ellipses"
      }
    ]
  }

}
