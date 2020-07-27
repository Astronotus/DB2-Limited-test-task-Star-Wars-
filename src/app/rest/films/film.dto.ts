export class FilmDto {
  id: number;
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  url: string;

  constructor(data?: FilmDto) {
    if (data) {
      this.id = +data.url.match('[-]?[0-9]+(.[0-9]+)?')[ 0 ];
      this.title = data.title;
      this.episode_id = data.episode_id;
      this.opening_crawl = data.opening_crawl;
      this.director = data.director;
      this.producer = data.producer;
      this.release_date = data.release_date;
      this.characters = data.characters;
      this.planets = data.planets;
      this.starships = data.starships;
      this.vehicles = data.vehicles;
      this.species = data.species;
    }
  }
}

function makeCounter() {
  var currentCount = 1;

  return function() {
    return currentCount++;
  };
}

var counter = makeCounter();
