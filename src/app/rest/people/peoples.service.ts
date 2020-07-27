import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Params } from '@angular/router';
import { ResponseDto } from '../../core/http/response.dto';
import { map } from 'rxjs/operators';
import { HttpService } from '../../core/http/http.service';
import { PeopleDto } from './people.dto';

@Injectable({
  providedIn: 'root'
})
export class PeoplesService {

  constructor(private httpService: HttpService) { }

  getPeople(params?: Params): Observable<ResponseDto<PeopleDto>> {
    return this.httpService.getAllWithPagination<PeopleDto>('https://swapi.dev/api/people/', params, PeopleDto);
  }

  getAllPeople(params?: Params): Observable<PeopleDto[]> {
    return this.getPeople().pipe(map(r => r.results));
  }

  getPersonById(id: number, params?: Params): Observable<PeopleDto> {
    return this.httpService.get<PeopleDto>(`https://swapi.dev/api/people/${id}/`, params, PeopleDto);
  }
}
