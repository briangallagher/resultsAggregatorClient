import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';


    // <h1>{{title}}</h1>
    // <h2>My Heroes</h2>
    // <ul class="heroes">
    //   <li *ngFor="let hero of heroes"
    //     [class.selected]="hero === selectedHero"
    //     (click)="onSelect(hero)">
    //     <span class="badge">{{hero.id}}</span> {{hero.name}}
    //   </li>
    // </ul>

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  selectedGraph: String = 'cpu';
  // selectedGraph 'cpu';

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  showCPUResults(): void {
    console.log(' CPU results ');
    this.selectedGraph = 'cpu';
  }

  showMemoryResults(): void {
    console.log(' Memory results ');
    this.selectedGraph = 'memory';
  }

  showIOResults(): void {
    console.log(' IO results ');
    this.selectedGraph = 'io';
  }

}