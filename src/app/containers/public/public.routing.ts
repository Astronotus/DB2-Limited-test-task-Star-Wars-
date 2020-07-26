import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./films/films.module').then(m => m.FilmsModule)
  },
  {
    path: 'peoples',
    loadChildren: () => import('./people/people.module').then(m => m.PeopleModule)
  },
  {
    path: 'planets',
    loadChildren: () => import('./planets/planets.module').then(m => m.PlanetsModule)
  },
  {
    path: 'species',
    loadChildren: () => import('./species/species.module').then(m => m.SpeciesModule)
  },
  {
    path: 'starships',
    loadChildren: () => import('./starships/starships.module').then(m => m.StarshipsModule)
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PublicRouting {}
