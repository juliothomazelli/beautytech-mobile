import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput, MenuController } from '@ionic/angular';
import { ErrorHandling } from '../error/errorhandling';
import { ServiceRest } from '../rest/service.rest';
import { BooleanUtils } from '../utils/BooleanUtils';
import { ObjectUtils } from '../utils/ObjectUtils';
import { RouterUtils } from '../utils/RouterUtils';
import { StorageUtils, StorageUtilsTypes } from '../utils/StorageUtils';
import { StringUtils } from '../utils/StringUtils';
import { ToastColorTypes, ToastPositionTypes, ViewUtils } from '../utils/ViewUtils.service';

@Component({
  selector: 'app-newservice',
  templateUrl: './newservice.page.html',
  styleUrls: ['./newservice.page.scss'],
})
export class NewservicePage implements OnInit {
  @ViewChild('focus', { static: false })  inputElement: IonInput;

  public service : any = this.createServiceObject();

  constructor(private serviceRest : ServiceRest, private menuCtrl : MenuController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.inputElement.setFocus();
    this.menuCtrl.enable(false);

    this.service = this.createServiceObject();

    let serviceKey = RouterUtils.getInstance().getParameter();

    if (ObjectUtils.isNullOrUndefined(serviceKey) || StringUtils.isEmpty(serviceKey)){
      return;
    }

    this.loadService(serviceKey);
  }

  ionViewWillLeave(){
    this.menuCtrl.enable(true);
  }

  loadService(serviceKey : string){
    this.serviceRest.get(serviceKey).then((response) => {
      if (ObjectUtils.isNullOrUndefined(response)){
        return;
      }
      
      this.loadServiceSuccess(response)
    }).catch((error) => {
      ErrorHandling.report(this.loadService.name, error).message(error);
    });
  }

  loadServiceSuccess(response){
    this.service = response;

    this.service.Enabled = BooleanUtils.intToBoolean(this.service.Enabled);
  }

  saveService(){
    let userInfo = StorageUtils.getDataJSON(StorageUtilsTypes.userInfo);

    if (ObjectUtils.isNullOrUndefined(userInfo)){
      return;
    }

    let service = {
      Key: this.service.Key,
      FkCompany: userInfo.FkCompany,
      Name: this.service.Name,
      Note: this.service.Note,
      Price: this.service.Price,
      Icon_Name: this.service.Icon_Name,
      Enabled: BooleanUtils.booleanToInt(this.service.Enabled)
    }

    // ? POST
    if (StringUtils.isEmpty(service.Key)){
      this.serviceRest.save(service).then((response) => {
        if (ObjectUtils.isNullOrUndefined(response)){
          return;
        }

        ViewUtils.getInstance().messageToast('Sucesso', 'Serviço criado!', ToastPositionTypes.BOT, 3000, ToastColorTypes.SUCCESS);
        RouterUtils.getInstance().goTo('home/service');
      }).catch((error) => {
        ErrorHandling.report(this.saveService.name, error).message(error);
      });
    }

    // ? PUT
    if (!StringUtils.isEmpty(service.Key)){
      this.serviceRest.update(service).then((response) => {
        if (ObjectUtils.isNullOrUndefined(response)){
          return;
        }

        ViewUtils.getInstance().messageToast('Sucesso', 'Serviço atualizado!', ToastPositionTypes.BOT, 3000, ToastColorTypes.SUCCESS);
        RouterUtils.getInstance().goTo('home/service');
      }).catch((error) => {
        ErrorHandling.report(this.saveService.name, error).message(error);
      });
    }
  }

  createServiceObject(){
    return {
      Key: '',
      Name: '',
      Note: '',
      Enabled: 2,
      FkCompany: '',
      Price: 0,
      Icon_Name: ''
    }
  }
}
