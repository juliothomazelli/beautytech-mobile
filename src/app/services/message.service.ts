import { StringUtils } from "../utils/StringUtils";

export enum MessageTypes {
  LOAD_MESSAGES = 'LOAD_MESSAGES',
  NEW_MESSAGE   = 'NEW_MESSAGE'
}

export class Message{
  private static INSTANCE : Message;

  private messages : any = [];

  public static getInstance() : Message {
    if (!Message.INSTANCE) {
      Message.INSTANCE = new Message();
    }

    return Message.INSTANCE;
  }

  public getMessages(){
    return this.messages;
  }

  public setMessages(messages){
    this.messages = messages;
  }

  public setSpecificMessages(specificMessage){
    for (const message of this.messages){
      if (!StringUtils.equals(message.Key, specificMessage.FkMessage)){
        continue;
      }

      let messageItem = {
        Message: specificMessage.Message,
        DateTime_Message: specificMessage.DateTime_Message,
        Read: specificMessage.Read,
        Send_By: specificMessage.Send_By
      }

      message.Messages.push(messageItem);
    }
  }
}