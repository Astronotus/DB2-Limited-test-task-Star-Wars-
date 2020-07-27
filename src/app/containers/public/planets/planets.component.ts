import { Component, OnInit } from '@angular/core';
import { PlanetDto } from '../../../rest/planets/planet.dto';
import { PlanetService } from '../../../rest/planets/planet.service';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: [ './planets.component.sass' ]
})
export class PlanetsComponent implements OnInit {

  planets: PlanetDto[];
  keyUpEventSubject = new Subject<KeyboardEvent>();
  private subscriptionToKeyUpEvent: Subscription;

  constructor(private planetService: PlanetService) { }

  ngOnInit() {
    this.planetService.getAllPlanets().subscribe(r => {
      this.planets = r;
      this.sortByName();
    });
    this.initPlanetSearch();
  }

  private initPlanetSearch() {
    this.subscriptionToKeyUpEvent = this.keyUpEventSubject
      .pipe(
        map(event => {
          const target = event.target as HTMLInputElement;
          return target.value;
        }),
        debounceTime(400),
        distinctUntilChanged(),
        map(searchValue => {
          this.planetService.getPlanets({ search: searchValue }).subscribe(r => this.planets = r.results);
        })
      )
      .subscribe();
  }

  sortByName() {
    this.planets.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }
}
