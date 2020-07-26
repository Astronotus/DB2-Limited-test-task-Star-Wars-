import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeciesComponent } from './species.component';
import { SpeciesRouting } from './species.routing';


@NgModule({
  declarations: [
    SpeciesComponent
  ],
  imports: [
    CommonModule,
    SpeciesRouting
  ]
})
export class SpeciesModule { }

