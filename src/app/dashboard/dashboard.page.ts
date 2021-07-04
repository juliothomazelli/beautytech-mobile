import { Component, OnInit, ViewChild } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';
import { ScheduleRest } from '../rest/schedule.rest';
import { DateUtils } from '../utils/DateUtils';
import { ScheduleUtils } from '../utils/ScheduleUtils';
import { ViewUtils } from '../utils/ViewUtils.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;

  public schedule         : any = this.createScheduleObject();
  public scheduleSelected : any = this.createSelectedScheduleObject();

  public showMonth = true;

  public slideOpts = {
    on: {
      beforeInit() {
        const swiper = this;
        swiper.classNames.push(`${swiper.params.containerModifierClass}flip`);
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        swiper.params = Object.assign(swiper.params, overwriteParams);
        swiper.originalParams = Object.assign(swiper.originalParams, overwriteParams);
      },
      setTranslate() {
        const swiper = this;
        const { $, slides, rtlTranslate: rtl } = swiper;
        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = slides.eq(i);
          let progress = $slideEl[0].progress;
          if (swiper.params.flipEffect.limitRotation) {
            progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
          }
          const offset$$1 = $slideEl[0].swiperSlideOffset;
          const rotate = -180 * progress;
          let rotateY = rotate;
          let rotateX = 0;
          let tx = -offset$$1;
          let ty = 0;
          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
            rotateX = -rotateY;
            rotateY = 0;
          } else if (rtl) {
            rotateY = -rotateY;
          }
  
           $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
  
           if (swiper.params.flipEffect.slideShadows) {
            // Set shadows
            let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
            if (shadowBefore.length === 0) {
              shadowBefore = swiper.$(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'left' : 'top'}"></div>`);
              $slideEl.append(shadowBefore);
            }
            if (shadowAfter.length === 0) {
              shadowAfter = swiper.$(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'right' : 'bottom'}"></div>`);
              $slideEl.append(shadowAfter);
            }
            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
          }
          $slideEl
            .transform(`translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
        }
      },
      setTransition(duration) {
        const swiper = this;
        const { slides, activeIndex, $wrapperEl } = swiper;
        slides
          .transition(duration)
          .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
          .transition(duration);
        if (swiper.params.virtualTranslate && duration !== 0) {
          let eventTriggered = false;
          // eslint-disable-next-line
          slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
            if (eventTriggered) return;
            if (!swiper || swiper.destroyed) return;
  
            eventTriggered = true;
            swiper.animating = false;
            const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
            for (let i = 0; i < triggerEvents.length; i += 1) {
              $wrapperEl.trigger(triggerEvents[i]);
            }
          });
        }
      }
    }
  };

  constructor(private scheduleRest : ScheduleRest) {}

  ngOnInit(){
    this.generateSchedule(new Date().getFullYear(), new Date().getMonth());
  }

  ionViewWillEnter(){
    
  }

  monthChange(){
    ViewUtils.getInstance().messageToast("Vamoo", "Tricolor");
  }

  generateSchedule(year, month){
    this.schedule = new ScheduleUtils().generateSchedule(year, month);

    console.log(this.schedule)
    this.selectDay(new Date(), new Date().getMonth(), 3);
  }

  selectDay(date: Date, monthSelected, weekChanged){
    this.uncheckDay();

    for (const month of this.schedule){
      if (month.month != monthSelected){
        continue;
      }

      if (weekChanged == 1){
        for (const week of month.weekOne){
          if (week.day != date.getDate()){
            continue;
          }

          week.selected = true;
          this.scheduleSelected = week;
          return;
        }
      }

      if (weekChanged == 2){
        for (const week of month.weekTwo){
          if (week.day != date.getDate()){
            continue;
          }

          week.selected = true;
          this.scheduleSelected = week;
          return;
        }
      }

      if (weekChanged == 3){
        for (const week of month.weekThree){
          if (week.day != date.getDate()){
            continue;
          }

          week.selected = true;
          this.scheduleSelected = week;
          return;
        }
      }

      if (weekChanged == 4){
        for (const week of month.weekFour){
          if (week.day != date.getDate()){
            continue;
          }

          week.selected = true;
          this.scheduleSelected = week;
          return;
        }
      }

      if (weekChanged == 5){
        for (const week of month.weekFive){
          if (week.day != date.getDate()){
            continue;
          }

          week.selected = true;
          this.scheduleSelected = week;
          return;
        }
      }

      if (weekChanged == 6){
        for (const week of month.weekSix){
          if (week.day != date.getDate()){
            continue;
          }

          week.selected = true;
          this.scheduleSelected = week;
          return;
        }
      }
    }
  }

  uncheckDay(){
    for (const month of this.schedule){
      for (const week of month.weekOne){
        week.selected = false;
      }
  
      for (const week of month.weekTwo){      
        week.selected = false;
      }
  
      for (const week of month.weekThree){
        week.selected = false;
      }
  
      for (const week of month.weekFour){
        week.selected = false;
      }
  
      for (const week of month.weekFive){
        week.selected = false;
      }
  
      for (const week of month.weekSix){
        week.selected = false;
      }
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

  createSelectedScheduleObject(){
    return {
      day: new Date().getDate(),
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      hourList: new ScheduleUtils().createHourOfDayList(),
      selected: false,
      monthName: DateUtils.getMonth(new Date().getMonth(), true)
    }
  }

  createScheduleObject(){
    return {
      weekOne: [],
      weekTwo: [],
      weekThree: [],
      weekFour: [],
      weekFive: [],
      weekSix: [],
    }
  }
}
