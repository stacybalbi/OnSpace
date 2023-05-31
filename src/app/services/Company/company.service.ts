import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from 'src/app/core/models/company.models';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class CompanyService extends BaseService<Company> {
  constructor(protected override http: HttpClient) {
    super(http, `Company`);
  }
}
