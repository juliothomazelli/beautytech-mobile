import { NavController } from '@ionic/angular';
import { ObjectUtils } from './ObjectUtils';

export class RouterUtils {
 vpReflectClassName = 'VPRouterUtils';

  public static INSTANCE : RouterUtils = new RouterUtils();
  
  private navCtrl: NavController;
  private parameter : any = null;

  public static getInstance() : RouterUtils {
    return RouterUtils.INSTANCE;
  }

  public setNavCtrl(navCtrl: NavController){
    this.navCtrl = navCtrl;
  }

  public goTo(route: string, param: any = null, asCopy: boolean = false){
    if (ObjectUtils.isNullOrUndefined(this.navCtrl)){
      return;
    }

    this.parameter = null;
    if (!ObjectUtils.isNullOrUndefined(param)){
      if (asCopy){
        this.parameter = ObjectUtils.copy(param);
      } else {
        this.parameter = param;
      }
    }
    
    this.navCtrl.navigateForward(route);    
  }

  public getParameter(reset = true) : any {
    const param = this.parameter;
    if (reset){
      this.parameter = null;
    }    
    return param;
  }

  public setParameter(param: any): any{
    this.parameter = param;
  }



}