import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortafolioRoutingModule } from './portafolio-routing.module';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioService } from 'src/app/services/Portfolio/portfolio.service';


@NgModule({
  declarations: [PortafolioComponent],
  imports: [
    CommonModule,
    PortafolioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
    PortfolioService
  ],
})
export class PortafolioModule {}
