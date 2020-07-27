import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiclesDto } from '@rest/vehicles/vehicles.dto';
import { VehiclesService } from '@rest/vehicles/vehicles.service';

@Component({
  selector: 'app-planet',
  templateUrl: './vehicle.component.html',
  styleUrls: [ './vehicle.component.sass' ]
})
export class VehicleComponent implements OnInit {

  vehicle: VehiclesDto;

  constructor(private activatedRoute: ActivatedRoute, private vehiclesService: VehiclesService) { }

  ngOnInit(): void {
    this.vehiclesService.getVehicleById(Number(this.activatedRoute.snapshot.params.id)).subscribe(r => this.vehicle = r);
  }
}
