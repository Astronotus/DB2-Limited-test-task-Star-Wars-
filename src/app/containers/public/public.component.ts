import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: [ './public.component.sass' ]
})
export class PublicComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    this.route.navigate([ '/films' ]);
  }
}
