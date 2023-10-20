import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitSearchComponent } from './unit-search.component';
import { FormComponent } from '../form/form.component';

@NgModule({
  declarations: [
    UnitSearchComponent,
    FormComponent
  ],
  imports: [
    CommonModule,

  ]
})
export class UnitSearchModule { }
