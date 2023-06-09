// import { Inject, Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
// import { BaseEntity } from '../core/models/BaseEntity.models';
// import { HttpClient } from '@angular/common/http';
// import { tap } from 'rxjs';

// export class BaseService<T extends BaseEntity> {
//   constructor(
//     protected http: HttpClient,
//     @Inject('controller') private controller: string
//   ) {}

//   list() {
//     return this.http
//       .get<T[]>(`${environment.API}${this.controller}`)
//       .pipe(tap(console.log));
//   }

//   loadById(id: any) {
//     return this.http.get<T>(`${environment.API}${this.controller}/${id}`);
//   }

//   create(record: Partial<T>) {
//     return this.http.post(`${environment.API}${this.controller}`, record);
//   }

//   update(record: Partial<T>) {
//     return this.http.put(`${environment.API}${this.controller}`, record);
//   }

//   remove(id: number) {
//     return this.http.delete(`${environment.API}${this.controller}/${id}`);
//   }
// }
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseEntity } from '../core/models/BaseEntity.models';
import { Response } from '../core/type/response.type';

export class BaseService<T extends BaseEntity> {
  constructor(
    protected http: HttpClient,
    @Inject('controller') private controller: string
  ) {}

  list() {
    return this.http.get<T[]>(`${environment.API}${this.controller}`);
  }

  get() {
    return this.http.get<Response<T[]>>(`${environment.API}${this.controller}`);
  }

  loadById(id: any) {
    return this.http.get<T>(`${environment.API}${this.controller}/${id}`);
  }

  create(record: Partial<T>) {
    return this.http.post(`${environment.API}${this.controller}`, record);
  }

  // update(record: Partial<T>) {
  //   return this.http.put<T>(`${this.API_URL}/${record.id}}`, record).pipe(first());
  // }

  update(record: Partial<T>, id: any) {
    return this.http.put(`${environment.API}${this.controller}/${id}`, record);
  }

  remove(id: string) {
    return this.http.delete(`${environment.API}${this.controller}/${id}`);
  }
}
