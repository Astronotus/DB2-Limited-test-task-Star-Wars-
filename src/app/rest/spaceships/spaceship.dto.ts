export class SpaceshipDto {
  id: number;
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: number;
  length: number;
  max_atmosphering_speed: string;
  crew: number;
  passengers: number;
  cargo_capacity: number;
  consumables: string;
  hyperdrive_rating: number;
  MGLT: number;
  starship_class: string;
  pilots: string[];
  films: string[];
  url: string;


  constructor(data?: SpaceshipDto) {
    if (data) {
      this.id = +data.url.match('[-]?[0-9]+(.[0-9]+)?')[ 0 ];
      this.name = data.name;
      this.model = data.model;
      this.manufacturer = data.manufacturer;
      this.cost_in_credits = data.cost_in_credits;
      this.length = data.length;
      this.max_atmosphering_speed = data.max_atmosphering_speed;
      this.crew = data.crew;
      this.passengers = data.passengers;
      this.cargo_capacity = data.cargo_capacity;
      this.consumables = data.consumables;
      this.MGLT = data.MGLT;
      this.starship_class = data.starship_class;
      this.pilots = data.pilots;
      this.films = data.films;
    }
  }
}
