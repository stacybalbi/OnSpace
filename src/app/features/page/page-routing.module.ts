import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'portafolio-page',
    loadChildren: () =>
      import('./Portafolio/portafolio.module').then((m) => m.PortafolioModule),
  },
  {
    path: 'team-page',
    loadChildren: () => import('./Team/team.module').then((m) => m.TeamModule),
  },
  {
    path: 'contact-page',
    loadChildren: () =>
      import('./Contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'form-page',
    loadChildren: () =>
      import('./Form/form.module').then((m) => m.FormModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
