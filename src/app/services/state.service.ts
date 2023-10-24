import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IFormFilter } from '../models/formFilter';
import { ILocation } from '../models/location';
import { ISchedules } from '../models/schedules';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private data$: BehaviorSubject<ILocation[]> = new BehaviorSubject<ILocation[]>([]);
  private filterData$: BehaviorSubject<ILocation[]> = new BehaviorSubject<ILocation[]>([]);

  constructor(private utils: UtilsService) { }

  setData(data: any[]){
    this.data$.next(data)
  }
  getData(){
    return this.data$.asObservable();
  }

  getFilterData(){
    return this.filterData$.asObservable();
  }

  setFilterData(formFilter: IFormFilter){
    if(!formFilter.hour){return;}
      const locations= this.data$.value ?? [];
      const locations_schedules = locations.filter((location) =>  location?.schedules?.length );
      const result = locations_schedules.filter(location => this.filterSchedules(formFilter, location?.schedules))
      this.filterData$.next(result)
  }

  clearFilter(){
    this.filterData$.next([]);
  }

  filterSchedules(formFilter: IFormFilter, schedules?: ISchedules[]){
    if(!schedules){return false;};
    const form_filter_hours = this.utils.extractHours(formFilter.hour);
    const filter_weekdays  = schedules.filter(elem => elem.weekdays === this.utils.transformWeekdays(formFilter?.day));
    const filter_hours = filter_weekdays.filter(elem =>{
      if(elem.hour === 'Fechada'){
        return formFilter.opened
      }else{
        const hours_wekday = this.utils.extractHours(elem.hour);
        return (form_filter_hours[0] >= hours_wekday[0] && form_filter_hours[1] <= hours_wekday[1]) ?? false
      }
    })
    return filter_hours.length? true : false;
  }



}
