import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IOptions } from 'src/app/models/options';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  @Output() formSearch = new EventEmitter();

  form = this.formBuilder.group({
    hour: ['', [Validators.required]],
    opened: [false]
  })

  options: IOptions[] = [
    {
      title: 'Manhã',
      hour: '06:00 às 12:00',
      start: '06:00',
      end: '12:00',
    },
    {
      title: 'Tarde',
      hour: '12:01 às 18:00',
      start: '12:01',
      end: '18:00',
    },
    {
      title: 'Noite',
      hour: '18:01 às 23:00',
      start: '18:01',
      end: '23:00',
    }
  ]

  constructor(private formBuilder: FormBuilder){}

  search(){
    this.formSearch.emit(this.form.value)
  }

}
