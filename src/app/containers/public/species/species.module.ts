import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeciesComponent } from './species.component';
import { SpeciesRouting } from './species.routing';
import { MaterialModule } from '../../../core/material/material.module';
import { SpecieComponent } from './species/specie.component';


@NgModule({
  declarations: [
    SpecieComponent,
    SpeciesComponent
  ],
  imports: [
    CommonModule,
    SpeciesRouting,
    MaterialModule
  ]
})
export class SpeciesModule {}

