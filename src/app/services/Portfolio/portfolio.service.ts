import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Portfolio } from 'src/app/core/models/portfolio.models';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService extends BaseService<Portfolio> {
  constructor(protected override http: HttpClient) {
    super(http, `Portfolio`);
  }
}
