import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { StateService } from 'src/app/services/state.service';


@Component({
  selector: 'app-unit-search',
  templateUrl: './unit-search.component.html',
  styleUrls: ['./unit-search.component.scss']
})
export class UnitSearchComponent implements OnInit {

  units: any[] = [];

  constructor(
    private core: CoreService,
    public state: StateService
  ){}

  ngOnInit(): void {
    this.getUnits(); 
    this.state.getFilterData()  
  }

  getUnits(){
    this.core.getAll().subscribe(res =>{
      if(res?.status === 200){this.state.setData(res?.locations)}
    })
  }

}
