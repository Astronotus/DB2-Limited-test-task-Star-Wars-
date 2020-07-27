import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from '@core/http/http.service';
import { SpeciesDto } from './species.dto';
import { ResponseDto } from '../../core/http/response.dto';
import { map } from 'rxjs/operators';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private httpService: HttpService) { }

  getSpecie(params?: Params): Observable<ResponseDto<SpeciesDto>> {
    return this.httpService.getAllWithPagination<SpeciesDto>('https://swapi.dev/api/species/', params, SpeciesDto);
  }

  getAllSpecies(params?: Params): Observable<SpeciesDto[]> {
    return this.getSpecie().pipe(map(r => r.results));
  }

  getSpecieById(id: number, params?: Params): Observable<SpeciesDto> {
    return this.httpService.get<SpeciesDto>(`https://swapi.dev/api/species/${id}/`, params, SpeciesDto);
  }
}

