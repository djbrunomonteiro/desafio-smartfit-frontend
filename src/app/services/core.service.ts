import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  url = 'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

 

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<any> {
    return this.http.get(this.url).pipe(
      map((res: any) => ({...res, status: 200})),
      catchError((err) => of(err) )
    )
  }
}
