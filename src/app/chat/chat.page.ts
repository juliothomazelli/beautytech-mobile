import { Component, OnInit } from '@angular/core';
import { Message } from '../services/message.service';
import { BooleanUtils } from '../utils/BooleanUtils';
import { ObjectUtils } from '../utils/ObjectUtils';
import { WebSocketService } from '../websocket/websocket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  public messages : any = [];

  constructor(private websocket : WebSocketService) { }

  ngOnInit() {
    this.messages = Message.getInstance().getMessages();

    this.setLastMessageLabel();
  }

  setLastMessageLabel(){
    for (const message of this.messages){
      ObjectUtils.verifyProperty(message, 'LastMessage', '');
      ObjectUtils.verifyProperty(message, 'MessageNotReadCount', 0);

      message.LastMessage = message.Messages[message.Messages.length - 1];

      message.MessageNotReadCount = this.getMessageNotReadCount(message.Messages);
    }
  }

  getMessageNotReadCount(messages) : number{
    let count = 0;
    for (const message of messages){
      if (BooleanUtils.intToBoolean(message.Read)){
        continue;
      }

      count += 1;
    }

    return count;
  }

}
