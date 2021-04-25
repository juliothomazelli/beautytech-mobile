import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonContent, IonInput, IonTabs, MenuController } from '@ionic/angular';
import { EventEmitterService } from '../eventemitter/eventemitter.service';
import { MessageTypes } from '../services/message.service';
import { RouterUtils } from '../utils/RouterUtils';
import { StorageUtils, StorageUtilsTypes } from '../utils/StorageUtils';
import { StringUtils } from '../utils/StringUtils';
import { WebSocketService } from '../websocket/websocket.service';

@Component({
  selector: 'app-chatmessage',
  templateUrl: './chatmessage.page.html',
  styleUrls: ['./chatmessage.page.scss'],
})
export class ChatmessagePage implements OnInit {
  @ViewChild('focus', { static: false })  inputElement: IonInput;

  @ViewChild('commentEl') comment: ElementRef;  
  public scrolltop: number = null;

  public message      : any    = this.createMessagesObject();
  public userInfo     : any;

  public messageWrite : string = '';

  public fkUser : string = '';

  constructor(private menuCtrl : MenuController, private websocket : WebSocketService) {
  }

  ionViewWillEnter(){
    this.menuCtrl.enable(false);

    this.message = RouterUtils.getInstance().getParameter();

    this.fkUser = this.message.FkUser;

    this.userInfo = StorageUtils.getDataJSON(StorageUtilsTypes.userInfo);

    EventEmitterService.get(MessageTypes.NEW_MESSAGE).subscribe(() => {      
      this.scrollToBottom();  
    });

    this.scrollToBottom();
  }

  scrollToBottom(){
    setTimeout(() => {
      this.scrolltop = this.comment.nativeElement.scrollHeight;
    }, 0);
  }

  ionViewWillLeave(){
    this.menuCtrl.enable(true);
  }

  messageSend(){
    if (StringUtils.isEmpty(this.messageWrite)){
      return;
    }

    let messageObject = {
      Type: MessageTypes.NEW_MESSAGE,
      FkUser: this.message.FkUser,
      FkUser_Contact: this.message.FkUser_Contact,
      FkCompany: this.userInfo.FkCompany,
      Message: this.messageWrite
    }

    this.websocket.send(messageObject);
    this.messageWrite = '';
  }

  ngOnInit() {
  }

  createMessagesObject(){
    return {
      Name: '',
      Messages: []
    }
  }

}
