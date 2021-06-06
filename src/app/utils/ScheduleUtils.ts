import { DateUtils } from "./DateUtils";
import { ObjectUtils } from "./ObjectUtils";

export class ScheduleUtils {

  private  getYear(monthSec, year, month){
    if (monthSec == 1){
      if (month == 0 || month == 1){
        return year - 1;
      }

      return year;
    }

    if (monthSec == 2){
      if (month == 0){
        return year - 1;
      }

      return year;
    }

    if (monthSec == 4){
      if (month == 11){
        return year + 1;
      }

      return year;
    }

    if (monthSec == 5){
      if (month == 10 || month == 11){
        return year + 1;
      }

      return year;
    }
  }

  private getMonthList(year: number, month: number){
    let result : any = {};

    result.one = {
      year: this.getYear(1, year, month),
      month: undefined,
      firstWeekDay: undefined
    }

    result.two = {
      year: this.getYear(2, year, month),
      month: undefined,
      firstWeekDay: undefined
    }

    result.three = {
      year: year,
      month: month,
      firstWeekDay: this.getFirstDayWeek(year, month)
    }

    result.four = {
      year: this.getYear(4, year, month),
      month: undefined,
      firstWeekDay: undefined
    }

    result.five = {
      year: this.getYear(5, year, month),
      month: undefined,
      firstWeekDay: undefined
    }
  }

  public generateSchedule(year: number, month: number){
    let monthList = this.getMonthList(year, month);
    
    // let daysOfMonth = ScheduleUtils.makeDaysOfMonth(year, month);

    // let scheduleMonth : any = {
    //   firstWeekDay : ScheduleUtils.getFirstDayWeek(year, month),
    //   weekOne: [],
    //   weekTwo: [],
    //   weekThree: [],
    //   weekFour: [],
    //   weekFive: [],
    //   weekSix: []
    // }
    
    // //? Criar os dias do mês anterior
    // if (scheduleMonth.firstWeekDay != 0){
    //   let previousMonth = month;
    //   let previousYear  = year;

    //   //? Se for JANEIRO
    //   if (month == 0){
    //     previousMonth = 11;
    //     previousYear  = year - 1;
    //   } else {
    //     previousMonth = month - 1;
    //   }
      
    //   let daysPreviousMonth = DateUtils.getNumberDaysOfMonth(new Date(previousYear, previousMonth));

    //   for (let i = 0; i < scheduleMonth.firstWeekDay; i++) {
    //     let schedule = {
    //       day: daysPreviousMonth - i,
    //       month: previousMonth,
    //       year: previousYear,
    //       hourList: ScheduleUtils.createHourOfDayList(),
    //       selected: false,
    //       previousMonth: true,
    //       nextMonth: false,
    //       monthName: DateUtils.getMonth(previousMonth, true)
    //     }

    //     scheduleMonth.weekOne.push(schedule);
    //   }

    //   scheduleMonth.weekOne.sort(function(a, b){return parseFloat(a.day) - parseFloat(b.day);});
    // }

    // for (const day of daysOfMonth){
    //   let schedule = {
    //     day: day,
    //     month: month,
    //     year: year,
    //     hourList: ScheduleUtils.createHourOfDayList(),
    //     selected: false,
    //     previousMonth: false,
    //     nextMonth: false,
    //     monthName: DateUtils.getMonth(month, true)
    //   }

    //   if (scheduleMonth.weekOne.length < 7){
    //     scheduleMonth.weekOne.push(schedule);
    //     continue;
    //   }

    //   if (scheduleMonth.weekTwo.length < 7){
    //     scheduleMonth.weekTwo.push(schedule);
    //     continue;
    //   }

    //   if (scheduleMonth.weekThree.length < 7){
    //     scheduleMonth.weekThree.push(schedule);
    //     continue;
    //   }
      
    //   if (scheduleMonth.weekFour.length < 7){
    //     scheduleMonth.weekFour.push(schedule);
    //     continue;
    //   }
      
    //   if (scheduleMonth.weekFive.length < 7){
    //     scheduleMonth.weekFive.push(schedule);
    //     continue;
    //   }

    //   if (scheduleMonth.weekSix.length < 7){
    //     scheduleMonth.weekSix.push(schedule);
    //   }
    // }

    // let nextMonth = month;
    // let nextYear  = year;

    // //? Se for DEZEMBRO
    // if (month == 11){
    //   nextMonth = 0;
    //   nextYear  = year + 1;
    // } else {
    //   nextMonth = month + 1;
    // }
    
    // let count = 0;
    
    // let fireLength = scheduleMonth.weekFive.length;
    // for (let i = 1; i <= 7 - fireLength; i++){
    //   count = count + 1;

    //   let schedule = {
    //     day: count,
    //     month: nextMonth,
    //     year: nextYear,
    //     hourList: ScheduleUtils.createHourOfDayList(),
    //     selected: false,
    //     previousMonth: false,
    //     nextMonth: true,
    //     monthName: DateUtils.getMonth(nextMonth, true)
    //   }

    //   scheduleMonth.weekFive.push(schedule);
    // }

    // let sixLength = scheduleMonth.weekSix.length;
    // for (let i = 1; i <= 7 - sixLength; i++) {
    //   count = count + 1;
      
    //   let schedule = {
    //     day: count,
    //     month: nextMonth,
    //     year: nextYear,
    //     hourList: ScheduleUtils.createHourOfDayList(),
    //     selected: false,
    //     previousMonth: false,
    //     nextMonth: true,
    //     monthName: DateUtils.getMonth(nextMonth, true)
    //   }

    //   scheduleMonth.weekSix.push(schedule);
    // }
    
    // return scheduleMonth;
  }

  private getFirstDayWeek(year, month){
    return new Date(year, month).getDay();
  }

  private makeDaysOfMonth(year: number, month: number){
    let numberDaysOfMonth = DateUtils.getNumberDaysOfMonth(new Date(year, month));
    
    let result = [];

    for (let i = 0; i < numberDaysOfMonth; i++) {
      result.push(i + 1);
    }

    return result;
  }

  public createHourOfDayList(){
    return [
      {
        hour: '00:00',
        serviceList: []
      },
      {
        hour: '00:15',
        serviceList: []
      },
      {
        hour: '00:30',
        serviceList: []
      },
      {
        hour: '00:45',
        serviceList: []
      },
      {
        hour: '01:00',
        serviceList: []
      },
      {
        hour: '01:15',
        serviceList: []
      },
      {
        hour: '01:30',
        serviceList: []
      },
      {
        hour: '01:45',
        serviceList: []
      },
      {
        hour: '02:00',
        serviceList: []
      },
      {
        hour: '02:15',
        serviceList: []
      },
      {
        hour: '02:30',
        serviceList: []
      },
      {
        hour: '02:45',
        serviceList: []
      },
      {
        hour: '03:00',
        serviceList: []
      },
      {
        hour: '03:15',
        serviceList: []
      },
      {
        hour: '03:30',
        serviceList: []
      },
      {
        hour: '03:45',
        serviceList: []
      },      
      {
        hour: '04:00',
        serviceList: []
      },
      {
        hour: '04:15',
        serviceList: []
      },
      {
        hour: '04:30',
        serviceList: []
      },
      {
        hour: '04:45',
        serviceList: []
      },      
      {
        hour: '05:00',
        serviceList: []
      },
      {
        hour: '05:15',
        serviceList: []
      },
      {
        hour: '05:30',
        serviceList: []
      },
      {
        hour: '05:45',
        serviceList: []
      },      
      {
        hour: '06:00',
        serviceList: []
      },
      {
        hour: '06:15',
        serviceList: []
      },
      {
        hour: '06:30',
        serviceList: []
      },
      {
        hour: '06:45',
        serviceList: []
      },      
      {
        hour: '07:00',
        serviceList: []
      },
      {
        hour: '07:15',
        serviceList: []
      },
      {
        hour: '07:30',
        serviceList: []
      },
      {
        hour: '07:45',
        serviceList: []
      },      
      {
        hour: '08:00',
        serviceList: []
      },
      {
        hour: '08:15',
        serviceList: []
      },
      {
        hour: '08:30',
        serviceList: []
      },
      {
        hour: '08:45',
        serviceList: []
      },      
      {
        hour: '09:00',
        serviceList: []
      },
      {
        hour: '09:15',
        serviceList: []
      },
      {
        hour: '09:30',
        serviceList: []
      },
      {
        hour: '09:45',
        serviceList: []
      },      
      {
        hour: '10:00',
        serviceList: []
      },
      {
        hour: '10:15',
        serviceList: []
      },
      {
        hour: '10:30',
        serviceList: []
      },
      {
        hour: '10:45',
        serviceList: []
      },      
      {
        hour: '11:00',
        serviceList: []
      },
      {
        hour: '11:15',
        serviceList: []
      },
      {
        hour: '11:30',
        serviceList: []
      },
      {
        hour: '11:45',
        serviceList: []
      },      
      {
        hour: '12:00',
        serviceList: []
      },
      {
        hour: '12:15',
        serviceList: []
      },
      {
        hour: '12:30',
        serviceList: []
      },
      {
        hour: '12:45',
        serviceList: []
      },      
      {
        hour: '13:00',
        serviceList: []
      },
      {
        hour: '13:15',
        serviceList: []
      },
      {
        hour: '13:30',
        serviceList: []
      },
      {
        hour: '13:45',
        serviceList: []
      },      
      {
        hour: '14:00',
        serviceList: []
      },
      {
        hour: '14:15',
        serviceList: []
      },
      {
        hour: '14:30',
        serviceList: []
      },
      {
        hour: '14:45',
        serviceList: []
      },      
      {
        hour: '15:00',
        serviceList: []
      },
      {
        hour: '15:15',
        serviceList: []
      },
      {
        hour: '15:30',
        serviceList: []
      },
      {
        hour: '15:45',
        serviceList: []
      },
            
      {
        hour: '16:00',
        serviceList: []
      },
      {
        hour: '16:15',
        serviceList: []
      },
      {
        hour: '16:30',
        serviceList: []
      },
      {
        hour: '16:45',
        serviceList: []
      },      
      {
        hour: '17:00',
        serviceList: []
      },
      {
        hour: '17:15',
        serviceList: []
      },
      {
        hour: '17:30',
        serviceList: []
      },
      {
        hour: '17:45',
        serviceList: []
      },      
      {
        hour: '18:00',
        serviceList: []
      },
      {
        hour: '18:15',
        serviceList: []
      },
      {
        hour: '18:30',
        serviceList: []
      },
      {
        hour: '18:45',
        serviceList: []
      },      
      {
        hour: '19:00',
        serviceList: []
      },
      {
        hour: '19:15',
        serviceList: []
      },
      {
        hour: '19:30',
        serviceList: []
      },
      {
        hour: '19:45',
        serviceList: []
      },      
      {
        hour: '20:00',
        serviceList: []
      },
      {
        hour: '20:15',
        serviceList: []
      },
      {
        hour: '20:30',
        serviceList: []
      },
      {
        hour: '20:45',
        serviceList: []
      },      
      {
        hour: '21:00',
        serviceList: []
      },
      {
        hour: '21:15',
        serviceList: []
      },
      {
        hour: '21:30',
        serviceList: []
      },
      {
        hour: '21:45',
        serviceList: []
      },      
      {
        hour: '22:00',
        serviceList: []
      },
      {
        hour: '22:15',
        serviceList: []
      },
      {
        hour: '22:30',
        serviceList: []
      },
      {
        hour: '22:45',
        serviceList: []
      },      
      {
        hour: '23:00',
        serviceList: []
      },
      {
        hour: '23:15',
        serviceList: []
      },
      {
        hour: '23:30',
        serviceList: []
      },
      {
        hour: '23:45',
        serviceList: []
      },
    ]
  }
}