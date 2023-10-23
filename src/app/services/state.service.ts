import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private data$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private filterData$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor() { }

  setData(data: any[]){
    this.data$.next(data)
  }
  getData(){
    return this.data$.asObservable();
  }

  setFilterData(formFilter: any){
    
    const all = this.data$.value as any[] ?? [];
    const res = all.filter(elem => {
      // console.log();
      
      let schs = elem?.schedules as any[] ?? [];
      if(!schs.length){return false}
      schs = schs.map(e => e.hour);


      console.log(schs);
      


      

      const fSchs = schs.filter(e => String(e?.hour).includes(formFilter?.hour))

      
      return fSchs.length ? true : false;
    });

    console.log(res);
    
    
    this.filterData$.next(this.data$.value)
  }
  getFilterData(){
    return this.filterData$.asObservable();
  }

}
