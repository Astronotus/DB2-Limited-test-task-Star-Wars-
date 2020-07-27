import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsComponent } from './planets.component';
import { PlanetsRouting } from './planets.routing';
import { PlanetComponent } from './planet/planet.component';
import { MaterialModule } from '../../../core/material/material.module';


@NgModule({
  declarations: [
    PlanetsComponent,
    PlanetComponent
  ],
  imports: [
    CommonModule,
    PlanetsRouting,
    MaterialModule
  ]
})
export class PlanetsModule {}

