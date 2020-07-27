import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { PeopleRouting } from './people.routing';
import { PersonComponent } from './person/person.component';
import { MaterialModule } from '../../../core/material/material.module';


@NgModule({
  declarations: [
    PeopleComponent,
    PersonComponent,
  ],
  imports: [
    CommonModule,
    PeopleRouting,
    MaterialModule
  ]
})
export class PeopleModule { }

