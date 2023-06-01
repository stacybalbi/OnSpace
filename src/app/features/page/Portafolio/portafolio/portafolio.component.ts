import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/app/core/models/portfolio.models';
import { PortfolioService } from 'src/app/services/Portfolio/portfolio.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss'],
})
export class PortafolioComponent implements OnInit {
  portfolio: Portfolio[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.getportfolio();
  }

  getportfolio() {
    this.portfolioService.list().subscribe((data: any) => {
      this.portfolio = data;
    });
  }

  loadById(id: any) {
    return null;
  }
}
