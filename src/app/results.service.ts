import { Injectable } from '@angular/core';

import { Results } from './results';
import { RESULTS } from './mock-results';



// import { HEROES } from './mock-heroes';

@Injectable()
export class ResultsService {

  getResults(): Promise<Results> {
    return Promise.resolve(RESULTS);
  }



  // getHeroes(): Promise<Hero[]> {
  //   return Promise.resolve(HEROES);
  // }

  // // See the "Take it slow" appendix
  // getHeroesSlowly(): Promise<Hero[]> {
  //   return new Promise(resolve => {
  //     // Simulate server latency with 2 second delay
  //     setTimeout(() => resolve(this.getHeroes()), 2000);
  //   });
  // }
}
