import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Files } from 'src/app/core/models/files.models';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class FilesService extends BaseService<Files> {
  constructor(protected override http: HttpClient) {
    super(http, `Files`);
  }
}
