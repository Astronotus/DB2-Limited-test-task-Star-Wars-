import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanetDto } from '../../../../rest/planets/planet.dto';
import { PlanetService } from '../../../../rest/planets/planet.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: [ './planet.component.sass' ]
})
export class PlanetComponent implements OnInit {

  planet: PlanetDto;

  constructor(private activatedRoute: ActivatedRoute, private planetService: PlanetService) { }

  ngOnInit(): void {
    this.planetService.getPlanetById(Number(this.activatedRoute.snapshot.params.id)).subscribe(r => this.planet = r);
  }
}
