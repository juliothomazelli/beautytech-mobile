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
}