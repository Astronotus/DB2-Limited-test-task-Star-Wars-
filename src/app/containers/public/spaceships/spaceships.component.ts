import { Component, OnInit } from '@angular/core';
import { SpaceshipDto } from '../../../rest/spaceships/spaceship.dto';
import { SpaceshipService } from '../../../rest/spaceships/spaceship.service';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-starships',
  templateUrl: './spaceships.component.html',
  styleUrls: [ './spaceships.component.sass' ]
})
export class SpaceshipsComponent implements OnInit {

  spaceships: SpaceshipDto[];
  keyUpEventSubject = new Subject<KeyboardEvent>();
  private subscriptionToKeyUpEvent: Subscription;

  constructor(private spaceshipsService: SpaceshipService) { }

  ngOnInit() {
    this.spaceshipsService.getAllSpaceships().subscribe(r => {
      this.spaceships = r;
      this.sortByName();
    });
    this.initSpaceshipSearch();
  }

  private initSpaceshipSearch() {
    this.subscriptionToKeyUpEvent = this.keyUpEventSubject
      .pipe(
        map(event => {
          const target = event.target as HTMLInputElement;
          return target.value;
        }),
        debounceTime(400),
        distinctUntilChanged(),
        map(searchValue => {
          this.spaceshipsService.getSpaceship({ search: searchValue }).subscribe(r => this.spaceships = r.results);
        })
      )
      .subscribe();
  }

  sortByName() {
    this.spaceships.sort((a, b) => {
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
