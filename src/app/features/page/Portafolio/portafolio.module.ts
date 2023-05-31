import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortafolioRoutingModule } from './portafolio-routing.module';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PortafolioComponent],
  imports: [
    CommonModule,
    PortafolioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PortafolioModule {}
