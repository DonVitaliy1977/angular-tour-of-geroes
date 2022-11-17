import { Component, OnInit } from '@angular/core';
import { HeroInterface } from '../hero.interface';
import { HEROES } from '../mosk-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero?: HeroInterface;

  constructor() {}

  ngOnInit(): void {}
  onSelect(hero: HeroInterface): void {
    this.selectedHero = hero;
  }
}
