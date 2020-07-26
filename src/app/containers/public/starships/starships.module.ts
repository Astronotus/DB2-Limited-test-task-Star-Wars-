import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsComponent } from './starships.component';
import { StarshipsRouting } from './starships.routing';


@NgModule({
  declarations: [
    StarshipsComponent
  ],
  imports: [
    CommonModule,
    StarshipsRouting
  ]
})
export class StarshipsModule { }

