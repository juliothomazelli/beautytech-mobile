import { Component, OnInit, ViewChild } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';
import { ScheduleRest } from '../rest/schedule.rest';
import { DateUtils } from '../utils/DateUtils';
import { ScheduleUtils } from '../utils/ScheduleUtils';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;

  public schedule         : any = this.createScheduleObject();
  public scheduleSelected : any = this.createSelectedScheduleObject();

  public monthSelected : any = this.createMonthSelectedObject();

  public showMonth = true;

  constructor(private scheduleRest : ScheduleRest) {}

  ngOnInit(){
    this.generateSchedule();
  }

  ionViewWillEnter(){
    
  }

  generateSchedule(){
    this.schedule = ScheduleUtils.generateSchedule(new Date().getFullYear(), new Date().getMonth());

    this.selectDay(new Date().getDate(), false, false);
  }

  selectDay(date: number, nextMonth, previousMonth){
    this.uncheckDay();

    for (const week of this.schedule.weekOne){
      if ((week.day != date) || (week.day == date && nextMonth) || (week.day == date && !previousMonth && !nextMonth && date > 7)){
        continue;
      }

      week.selected = true;
      this.scheduleSelected = week;
      return;
    }

    for (const week of this.schedule.weekTwo){      
      if (week.day != date){
        continue;
      }

      week.selected = true;
      this.scheduleSelected = week;
      return;
    }

    for (const week of this.schedule.weekThree){
      if (week.day != date){
        continue;
      }

      week.selected = true;
      this.scheduleSelected = week;
      return;
    }

    for (const week of this.schedule.weekFour){
      if (week.day != date){
        continue;
      }

      week.selected = true;
      this.scheduleSelected = week;
      return;
    }

    for (const week of this.schedule.weekFive){
      if (week.day != date){
        continue;
      }

      week.selected = true;

      this.scheduleSelected = week;
      return;
    }
  }

  uncheckDay(){
    for (const week of this.schedule.weekOne){
      week.selected = false;
    }

    for (const week of this.schedule.weekTwo){      
      week.selected = false;
    }

    for (const week of this.schedule.weekThree){
      week.selected = false;
    }

    for (const week of this.schedule.weekFour){
      week.selected = false;
    }

    for (const week of this.schedule.weekFive){
      week.selected = false;
    }
  }

  showMonthTitleClick(){
    this.showMonth = !this.showMonth;
  }

  expandHours(expand){
    
  }

  doReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    ev.detail.complete();
  }

  toggleReorderGroup() {
    this.reorderGroup.disabled = !this.reorderGroup.disabled;
  }

  createMonthSelectedObject(){
    return {
      monthName: DateUtils.getMonth(new Date().getMonth(), true),
      year: new Date().getFullYear()
    }
  }

  createSelectedScheduleObject(){
    return {
      day: new Date().getDate(),
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      hourList: ScheduleUtils.createHourOfDayList(),
      selected: false,
      previousMonth: false,
      nextMonth: false
    }
  }

  createScheduleObject(){
    return {
      weekOne: [],
      weekTwo: [],
      weekThree: [],
      weekFour: [],
      weekFive: [],
    }
  }
}
