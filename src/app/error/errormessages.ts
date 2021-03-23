import { ObjectUtils } from "../utils/ObjectUtils";
import { StringUtils } from "../utils/StringUtils";
import { ErrorMessagesCodes } from "./errormessagescodes";

export class ErrorMessages {
  public static processErrorMessage(error){
    if (ObjectUtils.isNullOrUndefined(error) || ObjectUtils.isNullOrUndefined(error.error) || ObjectUtils.isNullOrUndefined(error.status) || error.status == 500){
      return ErrorMessagesCodes.getDefaultMessage();
    }

    for (const errorCode of ErrorMessagesCodes.getErrorCodes()){
      if (!StringUtils.equals(error.error.error, errorCode.error)){
        continue;
      }

      return errorCode.message;
    }
  }
}