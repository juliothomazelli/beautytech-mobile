import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";

export enum ToastPositionTypes{
  TOP = 'top',
  MID = 'middle',
  BOT = 'bottom'
}

export enum ToastColorTypes{
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER  = 'danger'
}

export class ViewUtils {
  private static instance : ViewUtils       = new ViewUtils();

  private toastController : ToastController = new ToastController();

  constructor(){}

  public confirmMessageToast(title = 'Atenção', message : string, position = ToastPositionTypes.BOT) : Promise<any>{
    return new Promise (
      async (resolve, reject) => {
        const toast = await this.toastController.create({
          header: title,
          message: '<b>' + message + '</b>',
          position: position,
          color: 'warning',
          buttons: [
             {
              text: 'Confirmar',
              handler: () => {
                resolve(true);
              }
            },
            {
              text: 'Cancelar',
              handler: () => {
                resolve(false);
              }
            }
          ]
        });
        toast.present();
      });
  }

  public async messageToast(title : string = 'Atenção', message : string, position = ToastPositionTypes.BOT, duration = 3000, toastColorTypes : ToastColorTypes = ToastColorTypes.WARNING){
    const toast = await this.toastController.create({
      header: title,
      message: '<b>' + message + '</b>',
      duration: duration,
      position: position,
      color: toastColorTypes
    });

    toast.present();
  }

  public static getInstance() : ViewUtils {
    return ViewUtils.instance;
  }
}