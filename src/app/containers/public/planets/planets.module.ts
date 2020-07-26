import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsComponent } from './planets.component';
import { PlanetsRouting } from './planets.routing';


@NgModule({
  declarations: [
    PlanetsComponent
  ],
  imports: [
    CommonModule,
    PlanetsRouting
  ]
})
export class PlanetsModule {}

