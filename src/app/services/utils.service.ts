import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  extractHours(hour?: string){
    if(!hour){return []}
    const [start_str, end_str] = hour.split(' às ');
    const [start_int, end_int] = [parseInt(start_str.replace('h',''), 10), parseInt(end_str.replace('h',''), 10)];
    return [start_int, end_int]
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
