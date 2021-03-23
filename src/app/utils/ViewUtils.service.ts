import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";

export enum ToastPositionTypes{
  TOP = 'top',
  MID = 'middle',
  BOT = 'bottom'
}

export class ViewUtils {
  private static instance : ViewUtils       = new ViewUtils();

  private toastController : ToastController = new ToastController();

  constructor(){}

  public async confirmMessageToast(title = 'Atenção', message : string, position = ToastPositionTypes.BOT){
    //! AQUI DEVE SER FEITO TRATAMENTO PARA OS BOTÕES OU CRIAR UM COMPONENTE DE TOAST PRÓPRIO
    const toast = await this.toastController.create({
      header: title,
      message: '<b>' + message + '</b>',
      position: position,
      color: 'warning',
      buttons: [
         {
          text: 'Confirmar',
          handler: () => {
            console.log('Confirmar');
          }
        }
      ]
    });
    toast.present();
  }

  public async messageToast(title : string = 'Atenção', message : string, position = ToastPositionTypes.BOT, duration = 3000){
    const toast = await this.toastController.create({
      header: title,
      message: '<b>' + message + '</b>',
      duration: duration,
      position: position,
      color: 'warning'
    });

    toast.present();
  }

  public static getInstance() : ViewUtils {
    return ViewUtils.instance;
  }
}