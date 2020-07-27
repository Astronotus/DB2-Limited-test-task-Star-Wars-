import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpParams } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ResponseDto } from '@core/http/response.dto';

@Injectable()
export class HttpService extends HttpClient {

  constructor(
    handler: HttpHandler,
  ) {
    super(handler);
  }

  get<T>(
    url: string,
    params?,
    DtoClass?: new (responseValue) => T
  ): Observable<T> {
    return super.get<T>(url, { params: this.parseParams(params) })
      .pipe(map(response => DtoClass ? new DtoClass(response) : response));
  }

  getAll<T>(
    url: string,
    params?,
    DtoClass?: new (responseValue) => T
  ): Observable<T[]> {
    return super.get<T[]>(url, { params: this.parseParams(params) })
      .pipe(map(response => DtoClass ? response.map(responseItem => new DtoClass(responseItem)) : response)
      );
  }

  getAllWithPagination<T>(
    url: string,
    params?,
    DtoClass?: new (responseItem) => T
  ): Observable<ResponseDto<T>> {
    return super.get<ResponseDto<T>>(url, { params: this.parseParams(params) })
      .pipe(map(response => new ResponseDto({ ...response, DtoClass }))
      );
  }

  parseParams(data = {}): HttpParams {
    let params = new HttpParams();
    Object.keys(data).forEach(key => {
      if (Array.isArray(data[ key ]) && data[ key ].length) {
        for (const item of data[ key ]) {
          params = params.append(key, String(item));
        }
      } else if (data[ key ] && !Array.isArray(data[ key ])) {
        params = params.append(key, String(data[ key ]));
      }
    });
    return params;
  }
}
