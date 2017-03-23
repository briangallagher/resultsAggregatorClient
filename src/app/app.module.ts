import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { ResultsDetailComponent } from './results-detail.component';
import { GoogleChartComponent } from './google-chart.component';
import { ResultsService } from './results.service';
import { MockResultsService } from './mock-results.service';

import { MaterialModule } from '@angular/material';
import 'hammerjs';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    ResultsDetailComponent,
    GoogleChartComponent
  ],
  providers: [ ResultsService, MockResultsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
