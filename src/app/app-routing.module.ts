import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitSearchComponent } from './views/unit-search/unit-search.component';

const routes: Routes = [
  {
    path: '',
    component: UnitSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
