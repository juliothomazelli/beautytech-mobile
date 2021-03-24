import { ObjectUtils } from "../utils/ObjectUtils";
import { ToastPositionTypes, ViewUtils } from "../utils/ViewUtils.service";
import { ErrorMessages } from "./errormessages";
import { ErrorMessagesCodes } from "./errormessagescodes";

export class ErrorHandling {
  public static report(functionName : any, error : any){
    //! ENVIAR PARA MIM O ERRO QUE ACONTECEU
    return this;
  }

  public static message(error){
    let message = ErrorMessages.processErrorMessage(error);

    if (ObjectUtils.isNullOrUndefined(message)){
      ViewUtils.getInstance().messageToast('Atenção', ErrorMessagesCodes.getDefaultMessage());
      return;
    }

    ViewUtils.getInstance().messageToast('Atenção', message);
    return this;
  }
}