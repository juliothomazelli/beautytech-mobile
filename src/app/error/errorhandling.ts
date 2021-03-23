import { ToastPositionTypes, ViewUtils } from "../utils/ViewUtils.service";
import { ErrorMessages } from "./errormessages";

export class ErrorHandling {
  public static report(functionName : any, error : any){
    //! ENVIAR PARA MIM O ERRO QUE ACONTECEU
    return this;
  }

  public static message(error){
    let message = ErrorMessages.processErrorMessage(error);

    ViewUtils.getInstance().messageToast('Atenção', message);
    return this;
  }
}