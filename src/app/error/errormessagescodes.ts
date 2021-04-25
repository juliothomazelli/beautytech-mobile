export class ErrorMessagesCodes {
  private static errorCodes     : any = [];

  private static defaultMessage : string = 'Algo de errado aconteceu, tente novamente.';

  public static getErrorCodes(){

    this.errorCodes.push({error: '0001', message: this.getDefaultMessage()});
    this.errorCodes.push({error: '0002', message: this.getDefaultMessage()});
    this.errorCodes.push({error: '0005', message: this.getDefaultMessage()});

    this.errorCodes.push({error: '0003', message: 'Email e senha são requeridos para acessar o sistema.'});
    this.errorCodes.push({error: '0004', message: 'Usuário não existente ou inativo.'});
    this.errorCodes.push({error: '0006', message: 'Email ou Senha incorretos, tente novamente.'});
    this.errorCodes.push({error: '0007', message: 'Erro ao criar, altera ou excluir um serviço, tente novamente.'});

    return this.errorCodes;
  }

  public static getDefaultMessage() : string{
    return this.defaultMessage;
  }
}