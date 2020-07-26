import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesComponent } from '@public/vehicles/vehicles.component';
import { VehiclesRouting } from './vehicles.routing';


@NgModule({
  declarations: [
    VehiclesComponent
  ],
  imports: [
    CommonModule,
    VehiclesRouting
  ]
})
export class VehiclesModule {}



