import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from '@rest/films/films.service';
import { FilmDto } from '@rest/films/film.dto';

@Component({
  selector: 'app-person',
  templateUrl: './film.component.html',
  styleUrls: [ './film.component.sass' ]
})
export class FilmComponent implements OnInit {

  film: FilmDto;

  constructor(private activatedRoute: ActivatedRoute, private filmService: FilmsService) { }

  ngOnInit(): void {
    this.filmService.getFilmById(Number(this.activatedRoute.snapshot.params.id)).subscribe(r => this.film = r);
  }
}
