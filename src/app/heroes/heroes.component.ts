import { Component, OnInit } from '@angular/core';
import { HeroInterface } from '../hero.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  hero: HeroInterface = {
    id: 1,
    name: 'Windstorm',
  };
  constructor() {}

  ngOnInit(): void {}
}
