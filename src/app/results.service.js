"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var ResultsService = (function () {
    function ResultsService(http) {
        this.http = http;
        this.resultsUrl = 'http://127.0.0.1:8006/results'; // URL to web api
    }
    ResultsService.prototype.getResults = function () {
        return this.http.get(this.resultsUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ResultsService.prototype.handleError = function (error) {
        console.error('An error occurred gettthing results over http', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ResultsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ResultsService);
    return ResultsService;
}());
exports.ResultsService = ResultsService;
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
//# sourceMappingURL=results.service.js.map