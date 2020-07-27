import { Component, OnInit } from '@angular/core';
import { FilmsService } from '@rest/films/films.service';
import { FilmDto } from '@rest/films/film.dto';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: [ './films.component.sass' ]
})
export class FilmsComponent implements OnInit {

  films: FilmDto[];
  keyUpEventSubject = new Subject<KeyboardEvent>();
  private subscriptionToKeyUpEvent: Subscription;

  constructor(private filmService: FilmsService) { }

  ngOnInit() {
    this.filmService.getAllFilms()
      .subscribe(r => {
        this.films = r;
        this.sortByName();
      });
    this.initFilmSearch();
  }

  private initFilmSearch() {
    this.subscriptionToKeyUpEvent = this.keyUpEventSubject
      .pipe(
        map(event => {
          const target = event.target as HTMLInputElement;
          return target.value;
        }),
        debounceTime(400),
        distinctUntilChanged(),
        map(searchValue => {
          this.filmService.getFilms({ search: searchValue }).subscribe(r => this.films = r.results);
        })
      )
      .subscribe();
  }

  sortByName() {
    this.films.sort((a, b) => {
      const nameA = a.title.toLowerCase();
      const nameB = b.title.toLowerCase();
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
