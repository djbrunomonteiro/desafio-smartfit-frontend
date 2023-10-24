import { Component, Input, OnInit } from '@angular/core';
import { ILocation } from 'src/app/models/location';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent{
  @Input() location!: ILocation

}
