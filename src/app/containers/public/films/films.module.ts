import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films.component';
import { FilmsRouting } from './films.routing';


@NgModule({
  declarations: [
    FilmsComponent,
  ],
  imports: [
    CommonModule,
    FilmsRouting
  ]
})
export class FilmsModule {}

