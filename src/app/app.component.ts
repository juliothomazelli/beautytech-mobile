import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router : Router) {}

  scheduleClick(){
    this.router.navigateByUrl('home/dashboard');
  }
  notificationClick(){
    this.router.navigateByUrl('home/notification');
  }
  chatClick(){
    this.router.navigateByUrl('home/chat');
  }
  logoutClick(){
    this.router.navigateByUrl('');
  }
}
