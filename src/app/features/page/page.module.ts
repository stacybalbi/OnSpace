import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { HomeComponent } from './Home/home/home.component';
import { FormularioComponent } from './Formulario/formulario/formulario.component';
import { FormComponent } from './Form/form/form.component';

@NgModule({
  declarations: [HomeComponent, FormularioComponent, FormComponent],
  imports: [CommonModule, PageRoutingModule],
})
export class PageModule {}
