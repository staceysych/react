export default class SwapiService {
  constructor() {
    this.apiBase = 'https://swapi.dev/api/';
  }

  async getResource(url) {
    const response = await fetch(`${this.apiBase}${url}`);
    const data = await response.json();
    return data;
  }

  async getAllPeople() {
    const res = await this.getResource('people/');
    return res.results.map(this.transformPerson);
  }

  async getPerson(id) {
    const people = await this.getResource(`people/${id}/`);
    return this.transformPerson(people);
  }

  async getAllPlanets() {
    const res = await this.getResource('planets/');
    return res.results.map(this.transformPlanet);
  }

  async getPlanet(id) {
    const planet = await this.getResource(`planets/${id}/`);
    return this.transformPlanet(planet);
  }

  async getAllStarShips() {
    const res = await this.getResource('starships/');
    return res.results.map(this.transformStarship);
  }

  async getStarShip(id) {
    const ships = await this.getResource(`starships/${id}/`);
    return this.transformStarship(ships);
  }

  extractId = (item) => {
    const idRegEx = /\/([0-9]*)\/$/;
    const id = item.url.match(idRegEx)[1];
    return id;
  }

  transformPlanet(planet) {
    return {
      id: this.extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  }

  transformStarship(starship) {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity,
    };
  }

  transformPerson(person) {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor,
    };
  }
}
