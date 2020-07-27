import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../../../rest/vehicles/vehicles.service';
import { VehiclesDto } from '../../../rest/vehicles/vehicles.dto';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: [ './vehicles.component.sass' ]
})
export class VehiclesComponent implements OnInit {

  vehicles: VehiclesDto[];
  keyUpEventSubject = new Subject<KeyboardEvent>();
  private subscriptionToKeyUpEvent: Subscription;

  constructor(private vehiclesService: VehiclesService) { }

  ngOnInit() {
    this.vehiclesService.getAllVehicles().subscribe(r => {
      this.vehicles = r;
      this.sortByName();
    });
    this.initVehiclesSearch();
  }

  private initVehiclesSearch() {
    this.subscriptionToKeyUpEvent = this.keyUpEventSubject
      .pipe(
        map(event => {
          const target = event.target as HTMLInputElement;
          return target.value;
        }),
        debounceTime(400),
        distinctUntilChanged(),
        map(searchValue => {
          this.vehiclesService.getVehicles({ search: searchValue }).subscribe(r => this.vehicles = r.results);
        })
      )
      .subscribe();
  }

  sortByName() {
    this.vehicles.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }


}
