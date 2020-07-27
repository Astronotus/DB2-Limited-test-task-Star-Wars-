import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceshipsComponent } from './spaceships.component';
import { SpaceshipsRouting } from './spaceships.routing';
import { MaterialModule } from '../../../core/material/material.module';
import { SpaceshipComponent } from './spaceship/spaceship.component';


@NgModule({
  declarations: [
    SpaceshipComponent,
    SpaceshipsComponent
  ],
  imports: [
    CommonModule,
    SpaceshipsRouting,
    MaterialModule
  ]
})
export class SpaceshipsModule {}

