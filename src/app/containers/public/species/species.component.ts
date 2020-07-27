import { Component, OnInit } from '@angular/core';
import { SpeciesService } from '@rest/species/species.service';
import { SpeciesDto } from '@rest/species/species.dto';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: [ './species.component.sass' ]
})
export class SpeciesComponent implements OnInit {

  species: SpeciesDto[];
  keyUpEventSubject = new Subject<KeyboardEvent>();
  private subscriptionToKeyUpEvent: Subscription;

  constructor(private speciesService: SpeciesService) { }

  ngOnInit() {
    this.speciesService.getAllSpecies().subscribe(r => {
      this.species = r;
      this.sortByName();
    });
    this.initSpeciesSearch();
  }

  private initSpeciesSearch() {
    this.subscriptionToKeyUpEvent = this.keyUpEventSubject
      .pipe(
        map(event => {
          const target = event.target as HTMLInputElement;
          return target.value;
        }),
        debounceTime(400),
        distinctUntilChanged(),
        map(searchValue => {
          this.speciesService.getSpecie({ search: searchValue }).subscribe(r => this.species = r.results);
        })
      )
      .subscribe();
  }

  sortByName() {
    this.species.sort((a, b) => {
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
