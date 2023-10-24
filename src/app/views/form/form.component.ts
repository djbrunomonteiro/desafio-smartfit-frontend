import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IOptions } from 'src/app/models/options';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() formSearch = new EventEmitter();

  form = this.formBuilder.group({
    hour: ['', [Validators.required]],
    opened: [false],
    day: [new Date().getDay()]
  })

  options: IOptions[] = [
    {
      title: 'Manhã',
      hour: '06:00 às 12:00',
    },
    {
      title: 'Tarde',
      hour: '12:01 às 18:00',
    },
    {
      title: 'Noite',
      hour: '18:01 às 23:00',
    }
  ];

  total = 0;

  constructor(
    private formBuilder: FormBuilder,
    private state: StateService
    ){}

  ngOnInit(): void {
    this.state.getFilterData().subscribe(res => this.total = res.length);
  }

  search(){
    this.formSearch.emit(this.form.value)
  }

  clear(){
    this.form.patchValue({hour: '', opened: false});
    this.state.clearFilter();
  }

}
