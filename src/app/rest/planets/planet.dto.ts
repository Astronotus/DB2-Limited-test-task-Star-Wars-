export class PlanetDto {
  id: number;
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: number;
  population: number;
  residents: string[];
  films: string[];
  url: string;

  constructor(data?: PlanetDto) {
    if (data) {
      this.id = +data.url.match('[-]?[0-9]+(.[0-9]+)?')[ 0 ];
      this.name = data.name;
      this.rotation_period = data.rotation_period;
      this.orbital_period = data.orbital_period;
      this.diameter = data.diameter;
      this.climate = data.climate;
      this.gravity = data.gravity;
      this.terrain = data.terrain;
      this.surface_water = data.surface_water;
      this.population = data.population;
      this.residents = data.residents;
      this.films = data.films;
    }
  }
}
