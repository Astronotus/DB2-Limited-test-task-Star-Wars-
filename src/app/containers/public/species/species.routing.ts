import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeciesComponent } from './species.component';
import { SpecieComponent } from './species/specie.component';

const routes: Routes = [
  {
    path: '',
    component: SpeciesComponent
  },
  {
    path: ':id',
    component: SpecieComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SpeciesRouting {}
