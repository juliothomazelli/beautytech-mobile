import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!AuthGuardServiceUtils.getInstance().authentication) {
      this.router.navigate(["login"]);
      return false;
    }

    return true;
  }
}

export class AuthGuardServiceUtils {
  private static instance : AuthGuardServiceUtils;
  public authentication = false;

  public static getInstance() : AuthGuardServiceUtils {
    if (!AuthGuardServiceUtils.instance) {
      AuthGuardServiceUtils.instance = new AuthGuardServiceUtils();
    }

    return AuthGuardServiceUtils.instance;
  }
}