import { ObjectUtils } from "../utils/ObjectUtils";
import { StorageUtils, StorageUtilsTypes } from "../utils/StorageUtils";
import { StringUtils } from "../utils/StringUtils";
import { HttpMethodsTypes, HttpService } from "./http.service";

export class RequestService {
  public static async makeRequest(http: HttpService, httpMethod : HttpMethodsTypes, body?:any) {
    try {
      let response : any = await http.send(httpMethod, body).toPromise();

      if (ObjectUtils.isNullOrUndefined(response)){
        //! AQUI DEVE FAZER ALGUMA COISA
      }

      if (this.updateToken(response, http)){
        return response.body;
      }
      
      return JSON.parse(response.body);
    } catch (error) {
      throw (error);
    }
  }

  private static updateToken(response, http) {
    if (StringUtils.isEmpty(response.url) || !StringUtils.equals(response.url, http.getBaseUrl() + 'login')){
      return false;
    }

    if (ObjectUtils.isNullOrUndefined(response.body) || !response.body.hasOwnProperty('token') || StringUtils.isEmpty(response.body.token)){
      return false;
    }    

    StorageUtils.storeData(StorageUtilsTypes.sessionToken, response.body.token);

    return true;
  }

  public static get(http: HttpService) {
    return this.makeRequest(http, HttpMethodsTypes.GET)
  }
  
  public static post(http: HttpService, object) {
    return this.makeRequest(http, HttpMethodsTypes.POST, object)
  }
  
  public static put(http: HttpService, object) {
    return this.makeRequest(http, HttpMethodsTypes.PUT, object)
  }
  
  public static patch(http: HttpService, object) {
    return this.makeRequest(http, HttpMethodsTypes.PATCH, object)
  }
}