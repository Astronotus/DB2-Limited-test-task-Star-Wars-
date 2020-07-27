export class SpeciesDto {
  id: number;
  name: string;
  classification: number;
  designation: string;
  average_height: number;
  skin_colors: string[];
  hair_colors: string[];
  eye_colors: string[];
  average_lifespan: number;
  homeworld: string[];
  language: string;
  people: string[];
  films: string[];
  url: string;


  constructor(data?: SpeciesDto) {
    if (data) {
      this.id = +data.url.match('[-]?[0-9]+(.[0-9]+)?')[ 0 ];
      this.name = data.name;
      this.classification = data.classification;
      this.designation = data.designation;
      this.average_height = data.average_height;
      this.skin_colors = data.skin_colors;
      this.hair_colors = data.hair_colors;
      this.eye_colors = data.eye_colors;
      this.average_lifespan = data.average_lifespan;
      this.homeworld = data.homeworld;
      this.language = data.language;
      this.people = data.people;
      this.films = data.films;
    }
  }
}
