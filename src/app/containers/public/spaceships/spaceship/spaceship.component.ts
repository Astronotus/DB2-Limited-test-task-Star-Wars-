import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpaceshipService } from '../../../../rest/spaceships/spaceship.service';
import { SpaceshipDto } from '../../../../rest/spaceships/spaceship.dto';

@Component({
  selector: 'app-planet',
  templateUrl: './spaceship.component.html',
  styleUrls: [ './spaceship.component.sass' ]
})
export class SpaceshipComponent implements OnInit {

  spaceship: SpaceshipDto;

  constructor(private activatedRoute: ActivatedRoute, private spaceshipsService: SpaceshipService) { }

  ngOnInit(): void {
    this.spaceshipsService.getSpaceshipById(Number(this.activatedRoute.snapshot.params.id)).subscribe(r => this.spaceship = r);
  }
}
