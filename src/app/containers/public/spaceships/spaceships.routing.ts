import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceshipsComponent } from './spaceships.component';
import { SpaceshipComponent } from './spaceship/spaceship.component';

const routes: Routes = [
  {
    path: '',
    component: SpaceshipsComponent
  },
  {
    path: ':id',
    component: SpaceshipComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SpaceshipsRouting {}
