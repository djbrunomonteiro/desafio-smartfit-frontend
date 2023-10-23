import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnitSearchComponent } from './views/unit-search/unit-search.component';
import { LayoutModule } from './layout/layout.module';
import { UnitSearchModule } from './views/unit-search/unit-search.module';
import { CardComponent } from './views/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    UnitSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
