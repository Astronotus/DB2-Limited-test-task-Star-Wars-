import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpaceshipService } from '../../../../rest/spaceships/spaceship.service';
import { SpaceshipDto } from '../../../../rest/spaceships/spaceship.dto';
import { SpeciesDto } from '../../../../rest/species/species.dto';
import { SpeciesService } from '../../../../rest/species/species.service';

@Component({
  selector: 'app-planet',
  templateUrl: './specie.component.html',
  styleUrls: [ './specie.component.sass' ]
})
export class SpecieComponent implements OnInit {

  species: SpeciesDto;

  constructor(private activatedRoute: ActivatedRoute, private speciesService: SpeciesService) { }

  ngOnInit(): void {
    this.speciesService.getSpecieById(Number(this.activatedRoute.snapshot.params.id)).subscribe(r => this.species = r);
  }
}
