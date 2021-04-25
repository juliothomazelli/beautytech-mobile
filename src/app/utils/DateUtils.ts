import { ObjectUtils } from "./ObjectUtils";

export class DateUtils {
  public static formatDateTime(date : Date){
    if (ObjectUtils.isNullOrUndefined(date)){
      return '';
    }

    let result = '';
    
    result = date.getFullYear() + '-' + DateUtils.getMonth(date.getMonth()) + '-' + date.getDate() + ' ';

    result += DateUtils.formatZeronumber(date.getHours().toString()) + ':' + DateUtils.formatZeronumber(date.getMinutes().toString()) + ':' + DateUtils.formatZeronumber(date.getSeconds().toString());

    return result;
  }

  private static formatZeronumber(hourMinuteSecond : string){
    if (hourMinuteSecond.length != 1){
      return hourMinuteSecond;
    }

    return '0' + hourMinuteSecond;
  }

  public static getMonth(month : number, name: boolean = false){
    if (month == 0){
      if (!name){
        return '01';
      }

      return 'Janeiro';
    }

    if (month == 1){
      if (!name){
        return '02';
      }
      
      return 'Fevereiro';
    }

    if (month == 2){
      if (!name){
        return '03';
      }

      return 'Março';
    }

    if (month == 3){
      if (!name){
        return '04';
      }

      return 'Abril';
    }

    if (month == 4){
      if (!name){
        return '05';
      }

      return 'Maio';
    }

    if (month == 5){
      if (!name){
        return '05';
      }

      return 'Junho';
    }

    if (month == 6){
      if (!name){
        return '07';
      }

      return 'Julho';
    }

    if (month == 7){
      if (!name){
        return '08';
      }

      return 'Agosto';
    }

    if (month == 8){
      if (!name){
        return '09';
      }

      return 'Setembro';
    }

    if (month == 9){
      if (!name){
        return '10';
      }

      return 'Outubro';
    }

    if (month == 10){
      if (!name){
        return '11';
      }

      return 'Novembro';
    }

    if (month == 11){
      if (!name){
        return '12';
      }

      return 'Dezembro';
    }
  }

  public static getNumberDaysOfMonth(date : Date){
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }
}