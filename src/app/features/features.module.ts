import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomeModule } from './page/Home/home.module';
import { PortafolioModule } from './page/Portafolio/portafolio.module';
import { TeamModule } from './page/Team/team.module';
import { ContactModule } from './page/Contact/contact.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, FeaturesRoutingModule, HomeModule, PortafolioModule, TeamModule,ContactModule, HttpClientModule],
})
export class FeaturesModule {}
