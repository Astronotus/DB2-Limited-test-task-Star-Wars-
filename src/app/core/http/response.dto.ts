export class ResponseDto<T> {
  results: T[];
  count: number;
  DtoClass?: new (contentItem) => T;

  constructor(data?: ResponseDto<T>) {
    if (data) {
      const { DtoClass } = data;
      this.results = DtoClass ? data.results?.map(contentItem => new DtoClass(contentItem)) : data.results;
      this.count = data.count;
    }
  }
}
