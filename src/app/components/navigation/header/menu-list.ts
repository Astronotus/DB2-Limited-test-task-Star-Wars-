export interface MenuInfo {
  title: string;
  route: string;
}

export const NAVIGATION_MENU: MenuInfo[] = [
  {
    title: 'Films',
    route: '/films',
  },
  {
    title: 'People',
    route: '/peoples',
  },
  {
    title: 'Planets',
    route: '/planets',
  },
  {
    title: 'Species',
    route: '/species',
  },
  {
    title: 'Starships',
    route: '/starships',
  },
  {
    title: 'Vehicles',
    route: '/vehicles',
  }
];
