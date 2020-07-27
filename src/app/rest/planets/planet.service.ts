import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../core/http/http.service';
import { PlanetDto } from './planet.dto';
import { ResponseDto } from '../../core/http/response.dto';
import { map } from 'rxjs/operators';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private httpService: HttpService) { }

  getPlanets(params?: Params): Observable<ResponseDto<PlanetDto>> {
    return this.httpService.getAllWithPagination<PlanetDto>('https://swapi.dev/api/planets/', params, PlanetDto);
  }

  getAllPlanets(params?: Params): Observable<PlanetDto[]> {
    return this.getPlanets().pipe(map(r => r.results));
  }

  getPlanetById(id: number, params?: Params): Observable<PlanetDto> {
    return this.httpService.get<PlanetDto>(`https://swapi.dev/api/planets/${id}/`, params, PlanetDto);
  }
}



