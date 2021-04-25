import { Component, OnInit } from '@angular/core';
import { ErrorHandling } from '../error/errorhandling';
import { ServiceRest } from '../rest/service.rest';
import { ObjectUtils } from '../utils/ObjectUtils';
import { RouterUtils } from '../utils/RouterUtils';
import { StringUtils } from '../utils/StringUtils';
import { ToastPositionTypes, ViewUtils } from '../utils/ViewUtils.service';


@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})
export class ServicePage implements OnInit {
  public serviceList : any = []; 

  constructor(private serviceRest : ServiceRest) { }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.loadServices();
  }

  async loadServices(){
    this.serviceList = [];
    
    await this.serviceRest.list().then(
      (response) => {
        if (ObjectUtils.isNullOrUndefined(response)){
          return;
        }

        this.serviceList = response;
    }).catch((error) => {
        ErrorHandling.report(this.loadServices.name, error).message(error);
    });
  }

  deleteService(service){
    if (ObjectUtils.isNullOrUndefined(service) || ObjectUtils.isNullOrUndefined(service.Key) || StringUtils.isEmpty(service.Key)){
      ViewUtils.getInstance().messageToast('Atenção', 'Algo de errado aconteceu, tente novamente.');
      return;
    }

    ViewUtils.getInstance().confirmMessageToast('Atenção', 'Deseja realmente excluir?', ToastPositionTypes.MID).then((confirm: any) => {
      if (!confirm){
        return;
      }

      this.serviceRest.delele(service.Key).then((response) => {
        if (ObjectUtils.isNullOrUndefined(response)){
          return;
        }

        this.loadServices();
      }).catch((error) => {
        ErrorHandling.report(this.loadServices.name, error).message(error);
      });
    }).catch((error) => {
      ErrorHandling.report(this.deleteService.name, error).message(error);
    });
  }

  openService(serviceKey: string = ''){
    RouterUtils.getInstance().goTo('home/newservice', serviceKey);
  }

  doRefresh(event){
    this.loadServices().then(() => {
      event.target.complete();
    })
  }
}
