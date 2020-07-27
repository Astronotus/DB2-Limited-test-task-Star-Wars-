import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from '@core/http/http.service';
import { SpaceshipDto } from './spaceship.dto';
import { ResponseDto } from '../../core/http/response.dto';
import { map } from 'rxjs/operators';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SpaceshipService {

  constructor(private httpService: HttpService) { }

  getSpaceship(params?: Params): Observable<ResponseDto<SpaceshipDto>> {
    return this.httpService.getAllWithPagination<SpaceshipDto>('https://swapi.dev/api/starships/', params, SpaceshipDto);
  }

  getAllSpaceships(params?: Params): Observable<SpaceshipDto[]> {
    return this.getSpaceship().pipe(map(r => r.results));
  }

  getSpaceshipById(id: number, params?: Params): Observable<SpaceshipDto> {
    return this.httpService.get<SpaceshipDto>(`https://swapi.dev/api/starships/${id}/`, params, SpaceshipDto);
  }
}

