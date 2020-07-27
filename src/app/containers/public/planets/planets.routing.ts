import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsComponent } from './planets.component';
import { PlanetComponent } from './planet/planet.component';

const routes: Routes = [
  {
    path: '',
    component: PlanetsComponent
  },
  {
    path: ':id',
    component: PlanetComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PlanetsRouting {}
