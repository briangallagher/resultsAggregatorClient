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
var results_service_1 = require('./results.service');
var ResultsDetailComponent = (function () {
    function ResultsDetailComponent(resultsService) {
        this.resultsService = resultsService;
        this.resultsAvailable = false;
        this.currentResults = {};
    }
    ResultsDetailComponent.prototype.getResults = function () {
        var that = this;
        this.resultsService.getResults().then(function (results) {
            that.results = results;
            that.switchResultsPage();
            that.resultsAvailable = true;
        });
    };
    ResultsDetailComponent.prototype.ngOnInit = function () {
        this.getResults();
    };
    ResultsDetailComponent.prototype.ngOnChanges = function (changes) {
        this.graphType = changes.graphType.currentValue;
        if (this.results) {
            this.switchResultsPage();
        }
    };
    ResultsDetailComponent.prototype.switchResultsPage = function () {
        if (this.graphType == 'cpu') {
            this.currentResults = this.results.cpuResults;
        }
        else if (this.graphType == 'memory') {
            this.currentResults = this.results.memoryResults;
        }
        else if (this.graphType == 'io') {
            this.currentResults = this.results.ioResults;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ResultsDetailComponent.prototype, "graphType", void 0);
    ResultsDetailComponent = __decorate([
        core_1.Component({
            selector: 'results-detail',
            templateUrl: './results-detail.html',
            styleUrls: ['./results-detail.css'],
        }), 
        __metadata('design:paramtypes', [results_service_1.ResultsService])
    ], ResultsDetailComponent);
    return ResultsDetailComponent;
}());
exports.ResultsDetailComponent = ResultsDetailComponent;
//# sourceMappingURL=results-detail.component.js.map