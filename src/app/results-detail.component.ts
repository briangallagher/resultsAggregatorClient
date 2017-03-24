import { Component, Input, OnInit, OnChanges} from '@angular/core';
import { ResultsService } from './results.service';
import { Results } from './results';

import {GoogleChartComponent} from './google-chart.component';

@Component({
  selector: 'results-detail',
  templateUrl: './results-detail.html',
  styleUrls: ['./results-detail.css'],
})

export class ResultsDetailComponent implements OnChanges, OnInit {

  @Input() graphType: String;
  results: Results;
  resultsAvailable:boolean = false;
  currentResults:any = {};

  constructor(private resultsService: ResultsService) {
  }

  getResults(): void {

    var that = this;
    this.resultsService.getResults().then(function (results) {

      console.log('got results::: ');
      console.log(JSON.stringify(results));

      that.results = results;
      that.switchResultsPage()
      that.resultsAvailable = true;
    });
  }

  ngOnInit(): void {
    this.getResults();
  }

  ngOnChanges(changes: any) {
    this.graphType = changes.graphType.currentValue;

    if (this.results) {
      this.switchResultsPage()
    }
  }

  switchResultsPage() {
    if (this.graphType == 'cpu') {
      this.currentResults = this.results.cpuResults;
    }
    else if (this.graphType == 'memory') {
      this.currentResults = this.results.memoryResults;
    }
    else if (this.graphType == 'io') {
      this.currentResults = this.results.ioResults;
    }
  }

}

