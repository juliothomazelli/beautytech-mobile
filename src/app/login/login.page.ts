import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorHandling } from '../error/errorhandling';
import { LoginRest } from '../rest/login.rest';
import { AuthGuardService, AuthGuardServiceUtils } from '../services/auth-guard.service';
import { ObjectUtils } from '../utils/ObjectUtils';
import { StringUtils } from '../utils/StringUtils';
import { ViewUtils } from '../utils/ViewUtils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public remember = true;

  public username = 'juliothomazelli@gmail.com';
  public password = 'julio123';

  constructor(private router : Router, private restLogin : LoginRest) { }

  ngOnInit() {
    AuthGuardServiceUtils.getInstance().authentication = false;
  }

  rememberClick(){
    this.remember = !this.remember;
  }

  login(){
    

    if (StringUtils.isEmpty(this.username) || StringUtils.isEmpty(this.password)){
      ViewUtils.getInstance().messageToast('Atenção', 'Favor preencher Email e Senha');
      return;
    }

    let user = {
      Email: this.username,
      Password: this.password
    }

    this.restLogin.login(user).then(
      (response) => {
        if (ObjectUtils.isNullOrUndefined(response)){
          return;
        }

        AuthGuardServiceUtils.getInstance().authentication = true;
        this.router.navigateByUrl("/home");
    }).catch(
      (error) => {
        ErrorHandling.report(this.login.name, error).message(error);
    });
  }

}
