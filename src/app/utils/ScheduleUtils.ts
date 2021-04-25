import { DateUtils } from "./DateUtils";
import { ObjectUtils } from "./ObjectUtils";

export class ScheduleUtils {

  public static generateSchedule(year: number, month: number){
    let daysOfMonth = ScheduleUtils.makeDaysOfMonth(year, month);

    let scheduleMonth : any = {
      firstWeekDay : ScheduleUtils.getFirstDayWeek(year, month),
      weekOne: [],
      weekTwo: [],
      weekThree: [],
      weekFour: [],
      weekFive: [],
    }
    
    //? Criar os dias do mês anterior
    if (scheduleMonth.firstWeekDay != 0){
      let previousMonth = month;
      let previousYear  = year;

      //? Se for JANEIRO
      if (month == 0){
        previousMonth = 11;
        previousYear  = year - 1;
      } else {
        previousMonth = month - 1;
      }
      
      let daysPreviousMonth = DateUtils.getNumberDaysOfMonth(new Date(previousYear, previousMonth));

      for (let i = 0; i < scheduleMonth.firstWeekDay; i++) {
        let schedule = {
          day: daysPreviousMonth - i,
          month: previousMonth,
          year: previousYear,
          hourList: ScheduleUtils.createHourOfDayList(),
          selected: false,
          previousMonth: true,
          nextMonth: false
        }

        scheduleMonth.weekOne.push(schedule);
      }

      scheduleMonth.weekOne.sort(function(a, b){return parseFloat(a.day) - parseFloat(b.day);});
    }

    for (const day of daysOfMonth){
      let schedule = {
        day: day,
        month: month,
        year: year,
        hourList: ScheduleUtils.createHourOfDayList(),
        selected: false,
        previousMonth: false,
        nextMonth: false
      }

      if (scheduleMonth.weekOne.length < 7){
        scheduleMonth.weekOne.push(schedule);
        continue;
      }

      if (scheduleMonth.weekTwo.length < 7){
        scheduleMonth.weekTwo.push(schedule);
        continue;
      }

      if (scheduleMonth.weekThree.length < 7){
        scheduleMonth.weekThree.push(schedule);
        continue;
      }
      
      if (scheduleMonth.weekFour.length < 7){
        scheduleMonth.weekFour.push(schedule);
        continue;
      }
      
      if (scheduleMonth.weekFive.length < 7){
        scheduleMonth.weekFive.push(schedule);
      }
    }

    let nextMonth = month;
    let nextYear  = year;

    //? Se for DEZEMBRO
    if (month == 11){
      nextMonth = 0;
      nextYear  = year + 1;
    } else {
      nextMonth = month + 1;
    }
    
    for (let i = 1; i <= 7 - scheduleMonth.weekFive.length; i++) {
      let schedule = {
        day: i,
        month: nextMonth,
        year: nextYear,
        hourList: ScheduleUtils.createHourOfDayList(),
        selected: false,
        previousMonth: false,
        nextMonth: true
      }

      scheduleMonth.weekFive.push(schedule);
    }
    
    return scheduleMonth;
  }

  private static getFirstDayWeek(year, month){
    return new Date(year, month).getDay();
  }

  private static makeDaysOfMonth(year: number, month: number){
    let numberDaysOfMonth = DateUtils.getNumberDaysOfMonth(new Date(year, month));
    
    let result = [];

    for (let i = 0; i < numberDaysOfMonth; i++) {
      result.push(i + 1);
    }

    return result;
  }

  public static createHourOfDayList(){
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