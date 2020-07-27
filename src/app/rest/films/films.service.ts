import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '@core/http/http.service';
import { FilmDto } from './film.dto';
import { ResponseDto } from '../../core/http/response.dto';
import { map } from 'rxjs/operators';
import { Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private httpService: HttpService, private http: HttpClient) { }

  getFilms(params?: Params): Observable<ResponseDto<FilmDto>> {
    return this.httpService.getAllWithPagination<FilmDto>('https://swapi.dev/api/films/', params, FilmDto);
  }

  getAllFilms(params?: Params): Observable<FilmDto[]> {
    return this.getFilms().pipe(map(r => r.results));
  }

  getFilmById(id: number, params?: Params): Observable<FilmDto> {
    return this.httpService.get<FilmDto>(`https://swapi.dev/api/films/${id}/`, params, FilmDto);
  }
}
