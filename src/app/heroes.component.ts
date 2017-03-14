import { Component , OnInit} from '@angular/core';
import { Hero } from './hero';

import { HeroService } from './hero.service';


@Component({
  selector: 'my-heroes',
  template:`
  		  
		<h2>My Heroes</h2>
		<ul class="heroes">
		  <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
		  	<span class="badge">{{hero.id}}</span> {{hero.name}}
		  </li>
		</ul>
		<my-hero-detail [hero]="selectedHero"></my-hero-detail>

  `,
  providers: [HeroService]
		  	
  })
export class HeroesComponent  implements OnInit { 
	
	heroes :any;
	
	selectedHero : Hero;

	constructor(private heroService: HeroService) { }

	ngOnInit(): void {
	    this.getHeroes();
	}

	onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }

    getHeroes(): void {
	    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
	 }


}
