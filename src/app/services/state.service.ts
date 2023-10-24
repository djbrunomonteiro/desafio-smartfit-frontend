import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IFormFilter } from '../models/formFilter';
import { ILocation } from '../models/location';
import { ISchedules } from '../models/schedules';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private data$: BehaviorSubject<ILocation[]> = new BehaviorSubject<ILocation[]>([]);
  private filterData$: BehaviorSubject<ILocation[]> = new BehaviorSubject<ILocation[]>([]);

  constructor() { }

  setData(data: any[]){
    this.data$.next(data)
  }
  getData(){
    return this.data$.asObservable();
  }

  setFilterData(formFilter: IFormFilter){
    const locations= this.data$.value ?? [];
    const locations_schedules = locations.filter((location) =>  location?.schedules?.length );
    const result = locations_schedules.filter(location => this.checkFilter(formFilter, location?.schedules))
    this.filterData$.next(result)
  }

  clearFilter(){
    this.filterData$.next([]);
  }

  checkFilter(formFilter: IFormFilter, schedules?: ISchedules[]){
    if(!schedules){return false;};
    const form_filter_hours = this.extractHours(formFilter.hour);
    const filter_weekdays  = schedules.filter(elem => elem.weekdays === this.transformWeekdays(formFilter?.day));
    const filter_hours = filter_weekdays.filter(elem =>{
      if(elem.hour === 'Fechada'){
        return formFilter.opened
      }else{
        const hours_wekday = this.extractHours(elem.hour);
        return (form_filter_hours[0] >= hours_wekday[0] && form_filter_hours[1] <= hours_wekday[1]) ?? false
      }
    })
    return filter_hours.length? true : false;
  }

  extractHours(hour?: string){
    if(!hour){return []}
    const [start_str, end_str] = hour.split(' às ');
    const [start_int, end_int] = [parseInt(start_str.replace('h',''), 10), parseInt(end_str.replace('h',''), 10)];
    return [start_int, end_int]
  }



  getFilterData(){
    return this.filterData$.asObservable();
  }

  transformWeekdays(day?: number){
    switch(day){
      case 0:
        return 'Dom.';
      case 6:
        return 'Sáb.'
      default:
        return 'Seg. à Sex.'
    }


  }

}
