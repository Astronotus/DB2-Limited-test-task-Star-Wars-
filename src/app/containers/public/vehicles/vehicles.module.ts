import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesComponent } from '@public/vehicles/vehicles.component';
import { VehiclesRouting } from './vehicles.routing';
import { MaterialModule } from '@core/material/material.module';
import { VehicleComponent } from './vehicle/vehicle.component';


@NgModule({
  declarations: [
    VehicleComponent,
    VehiclesComponent
  ],
  imports: [
    CommonModule,
    VehiclesRouting,
    MaterialModule
  ]
})
export class VehiclesModule {}



