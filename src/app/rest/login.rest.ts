import { Injectable } from "@angular/core";
import { HttpService } from "../http/http.service";
import { RequestService } from "../http/request.service";

@Injectable()
export class LoginRest {
  private http: HttpService;

  constructor(http: HttpService){
    this.http = http;
  }
  
  public async login(object:any) {        
    this.http.URL = this.http.getBaseUrl() + 'login';
    return RequestService.post(this.http, object);
  }
}