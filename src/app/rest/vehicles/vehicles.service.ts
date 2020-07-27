import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from '@core/http/http.service';
import { VehiclesDto } from './vehicles.dto';
import { ResponseDto } from '../../core/http/response.dto';
import { map } from 'rxjs/operators';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private httpService: HttpService) { }

  getVehicles(params?: Params): Observable<ResponseDto<VehiclesDto>> {
    return this.httpService.getAllWithPagination<VehiclesDto>('https://swapi.dev/api/vehicles/', params, VehiclesDto);
  }

  getAllVehicles(params?: Params): Observable<VehiclesDto[]> {
    return this.getVehicles().pipe(map(r => r.results));
  }

  getVehicleById(id: number, params?: Params): Observable<VehiclesDto> {
    return this.httpService.get<VehiclesDto>(`https://swapi.dev/api/vehicles/${id}/`, params, VehiclesDto);
  }
}

