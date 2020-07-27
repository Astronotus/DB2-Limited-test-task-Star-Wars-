import { Component, OnInit } from '@angular/core';
import { MenuInfo, NAVIGATION_MENU } from '@components/navigation/header/menu-list';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.sass' ]
})
export class HeaderComponent {

  constructor() { }

  menu: MenuInfo[] = NAVIGATION_MENU;

}
