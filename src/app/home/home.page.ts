import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public pages       = this.createPages();

  constructor(private router : Router) { }

  ngOnInit() {
    this.router.navigateByUrl('home/dashboard');
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
