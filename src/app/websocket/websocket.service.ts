import { Injectable } from "@angular/core";
import { HttpService } from "../http/http.service";
import { ObjectUtils } from "../utils/ObjectUtils";
import { StorageUtils, StorageUtilsTypes } from "../utils/StorageUtils";
import { Message, MessageTypes } from '../services/message.service';

export enum WebSocketMessageTypes{
  CHAT         = 'CHAT',
  NOTIFICATION = 'NOTIFICATION'
}

@Injectable()
export class WebSocketService {

  constructor(private http: HttpService){}

  public webSocket: WebSocket = null;

  public connect(userKey: string, fkcompany: string){
    this.webSocket = new WebSocket(this.http.getWssBaseUrl() + '?key=' + userKey + '&fkcompany=' + fkcompany);

    this.webSocket.onopen    = (evt: Event) => { this.onOpen(evt); };
    this.webSocket.onclose   = (evt: Event) => { this.onClose(evt); };
    this.webSocket.onmessage = (evt: Event) => { this.onMessage(evt); };
    this.webSocket.onerror   = (evt: Event) => { this.onError(evt); };
  }

  close() {
    if (this.webSocket) {      
      this.webSocket.close();
    }
    this.webSocket = null;
  }

  send(message: any) {
    this.webSocket.send(JSON.stringify(message));
  }

  private onOpen(evt) {
    
  }

  private onClose(evt) {
    console.log(evt);
  }

  private onMessage(message) {
    if (ObjectUtils.isNullOrUndefined(message) || ObjectUtils.isNullOrUndefined(message.data)){
      return;
    }

    let messageObject = JSON.parse(message.data);
    
    if (messageObject.Type == MessageTypes.LOAD_MESSAGES){
      Message.getInstance().setMessages(messageObject.Messages);
    }
  }

  private onError(evt) {
    this.webSocket.close();
  }
}