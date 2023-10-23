import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitSearchComponent } from './unit-search.component';
import { FormComponent } from '../form/form.component';
import { LegendComponent } from '../legend/legend.component';
import { CardComponent } from '../card/card.component';

@NgModule({
  declarations: [
    UnitSearchComponent,
    FormComponent,
    LegendComponent,
    CardComponent
  ],
  imports: [
    CommonModule,

  ]
})
export class UnitSearchModule { }
