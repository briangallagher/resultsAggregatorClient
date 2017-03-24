import { Injectable } from '@angular/core';

import { Results } from './results';
import { MockResultsService } from './mock-results.service';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ResultsService {

  private resultsUrl = 'http://127.0.0.1:8006/results';  // URL to web api

  constructor(private http: Http) {}

  getResults(): Promise<Results> {
    return this.http.get(this.resultsUrl)
             .toPromise()
             .then(response => response.json() as Results)
             // .then(function (response) {
             //   console.log('response here:::: ');
             //   console.log(JSON.stringify(response.json()));
             //   response.json() as Results
             // })
             .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred gettthing results over http', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  // constructor(private mockResultsService: MockResultsService) {
  // }

  // getResults(): Promise<Results> {
  //   return Promise.resolve(this.mockResultsService.getResults());
  // }

}



  // private heroesUrl = 'api/heroes';  // URL to web api

  // constructor(private http: Http) { }

  // getHeroes(): Promise<Hero[]> {
  //   return this.http.get(this.heroesUrl)
  //              .toPromise()
  //              .then(response => response.json().data as Hero[])
  //              .catch(this.handleError);
  // }

  // private handleError(error: any): Promise<any> {
  //   console.error('An error occurred', error); // for demo purposes only
  //   return Promise.reject(error.message || error);
  // }