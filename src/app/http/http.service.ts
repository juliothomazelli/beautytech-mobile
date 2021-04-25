import { HttpClient, HttpHeaders } from "@angular/common/http";
import { timeout } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { ObjectUtils } from "../utils/ObjectUtils";
import { StorageUtils, StorageUtilsTypes } from "../utils/StorageUtils";

@Injectable()
export class HttpService {
  private isOnlineBuild = true;  

  private TIMEOUT       = 15000;

  public URL   = '';
  public TOKEN = '';

  constructor(private http: HttpClient){}

  private prepareHeaders(){
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/json');
    
    headers = headers.set('Cache-Control', 'no-cache');

    headers = headers.set('Content-Type', 'application/json');
  
    if (!ObjectUtils.isNullOrUndefined(StorageUtils.getData(StorageUtilsTypes.sessionToken))){
      headers = headers.set('authorization', StorageUtils.getData(StorageUtilsTypes.sessionToken));
    }

    return headers;
  }

  public getBaseUrl() : string {
    if (this.isOnlineBuild){
      return 'http://192.168.0.12:3000/';
    } else {
      return 'http://localhost:3000/';
    }
  }

  public getWssBaseUrl() : string {
    if (this.isOnlineBuild){
      return 'ws://192.168.0.12:8080/';
    } else {
      return 'ws://localhost:8080';
    }
  }

  private get(){
    let headers = this.prepareHeaders();
    return this.http.get(this.URL, {headers: headers, observe: 'response'}).pipe(timeout(this.TIMEOUT));
  }

  private post(object){
    let body = '';

    let headers = this.prepareHeaders();
    
    if (!ObjectUtils.isNullOrUndefined(object)){
      body = JSON.stringify(object);
    }

    return this.http.post(this.URL, body, {headers: headers, observe: 'response'}).pipe(timeout(this.TIMEOUT));
  }

  private put(object : any){
    let body : string = '';

    let headers = this.prepareHeaders();

    if (!ObjectUtils.isNullOrUndefined(object)){
      body = JSON.stringify(object);
    }

    return this.http.put(this.URL, body, {headers: headers, observe: 'response'}).pipe(timeout(this.TIMEOUT));
  }

  private patch(object : any){
    let body : string = '';

    let headers = this.prepareHeaders();

    if (!ObjectUtils.isNullOrUndefined(object)){
      body = JSON.stringify(object);
    }

    return this.http.patch(this.URL, body, {headers: headers, observe: 'response'}).pipe(timeout(this.TIMEOUT));
  }

  public send(httpMethod : HttpMethodsTypes, object?:any) {
    if (httpMethod == HttpMethodsTypes.GET) {
      return this.get()
    } else if(httpMethod == HttpMethodsTypes.POST) {
      return this.post(object)
    } else if(httpMethod == HttpMethodsTypes.PUT) {
      return this.put(object)
    } else if(httpMethod == HttpMethodsTypes.PATCH) {
      return this.patch(object)
    }

    throw new Error('Invalid http method!')
  }

}

export enum HttpMethodsTypes {
  GET   = 'GET',
  POST  = 'POST',
  PUT   = 'PUT',
  PATCH = 'PATCH'
}