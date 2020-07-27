import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films.component';
import { FilmsRouting } from './films.routing';
import { MaterialModule } from '../../../core/material/material.module';
import { FilmComponent } from './film/film.component';


@NgModule({
  declarations: [
    FilmsComponent,
    FilmComponent
  ],
  imports: [
    CommonModule,
    FilmsRouting,
    MaterialModule
  ]
})
export class FilmsModule {}

