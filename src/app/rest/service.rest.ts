import { Injectable } from "@angular/core";
import { HttpService } from "../http/http.service";
import { RequestService } from "../http/request.service";
import { ObjectUtils } from "../utils/ObjectUtils";
import { StorageUtils, StorageUtilsTypes } from "../utils/StorageUtils";
import { StringUtils } from "../utils/StringUtils";

@Injectable()
export class ServiceRest {
  constructor(private http: HttpService){
    
  }

  public list(){
    let userInfo = StorageUtils.getDataJSON(StorageUtilsTypes.userInfo);

    if (ObjectUtils.isNullOrUndefined(userInfo)){
      return;
    }

    let queryString = '?fkuser=' + userInfo.Key;

    this.http.URL = this.http.getBaseUrl() + 'service/user' + queryString;
    return RequestService.get(this.http);
  }

  public get(serviceKey : string){
    if (StringUtils.isEmpty(serviceKey)){
      return;
    }

    let queryString = '?key=' + serviceKey;

    this.http.URL = this.http.getBaseUrl() + 'service/key' + queryString;
    return RequestService.get(this.http);
  }

  public save(service){
    if (ObjectUtils.isNullOrUndefined(service)){
      return;
    }

    this.http.URL = this.http.getBaseUrl() + 'service';
    return RequestService.post(this.http, service);
  }

  public update(service){
    if (ObjectUtils.isNullOrUndefined(service) || ObjectUtils.isNullOrUndefined(service.Key) || StringUtils.isEmpty(service.Key)){
      return;
    }

    this.http.URL = this.http.getBaseUrl() + 'service';
    return RequestService.put(this.http, service);
  }

  public delele(serviceKey : string){
    let service = {
      Key: serviceKey
    }

    this.http.URL = this.http.getBaseUrl() + 'service';
    return RequestService.patch(this.http, service);
  }
}