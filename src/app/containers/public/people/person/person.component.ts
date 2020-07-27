import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeoplesService } from '../../../../rest/people/peoples.service';
import { PeopleDto } from '../../../../rest/people/people.dto';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: [ './person.component.sass' ]
})
export class PersonComponent implements OnInit {

  person: PeopleDto;

  constructor(private activatedRoute: ActivatedRoute, private peoplesService: PeoplesService) { }

  ngOnInit(): void {
    this.peoplesService.getPersonById(Number(this.activatedRoute.snapshot.params.id)).subscribe(r => {
      this.person = r;
      console.log(this.person);
    });
  }
}
