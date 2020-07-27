import { Component, OnInit } from '@angular/core';
import { PeoplesService } from '../../../rest/people/peoples.service';
import { PeopleDto } from '../../../rest/people/people.dto';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: [ './people.component.sass' ]
})
export class PeopleComponent implements OnInit {

  people: PeopleDto[];
  keyUpEventSubject = new Subject<KeyboardEvent>();
  private subscriptionToKeyUpEvent: Subscription;

  constructor(private peopleService: PeoplesService) { }

  ngOnInit() {
    this.peopleService.getAllPeople().subscribe(r => {
      this.people = r;
      this.sortByName()
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
          this.peopleService.getPeople({ search: searchValue }).subscribe(r => this.people = r.results);
        })
      )
      .subscribe();
  }

  sortByName() {
    this.people.sort((a, b) => {
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
