import { Injectable } from '@angular/core';

import { Results } from './results';
import { MockResultsService } from './mock-results.service';


@Injectable()
export class ResultsService {

  constructor(private mockResultsService: MockResultsService) {
  }

  getResults(): Promise<Results> {
    return Promise.resolve(this.mockResultsService.getResults());
  }

}
