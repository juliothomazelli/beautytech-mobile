import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService, AuthGuardServiceUtils } from '../services/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public remember = true;

  constructor(private router : Router) { }

  ngOnInit() {
    AuthGuardServiceUtils.getInstance().authentication = false;
  }

  rememberClick(){
    this.remember = !this.remember;
  }

  login(){
    AuthGuardServiceUtils.getInstance().authentication = true;
    this.router.navigateByUrl("/dashboard");
  }

}
