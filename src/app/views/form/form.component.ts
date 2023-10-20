import { Component } from '@angular/core';
import { IOptions } from 'src/app/models/options';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  options: IOptions[] = [
    {
      title: 'Manhã',
      hours: '06:00 às 12:00'
    },
    {
      title: 'Tarde',
      hours: '12:01 às 18:00'
    },
    {
      title: 'Noite',
      hours: '18:01 às 23:00'
    }
  ]

}
