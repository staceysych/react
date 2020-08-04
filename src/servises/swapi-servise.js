export default class SwapiServise {
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
    return res.results;
  }

  getPerson(id) {
    return this.getResource(`people/${id}/`);
  }

  async getAllPlanets() {
    const res = await this.getResource('planets/');
    return res.results;
  }

  getPlanet(id) {
    return this.getResource(`planets/${id}/`);
  }

  async getAllStarShips() {
    const res = await this.getResource('starships/');
    return res.results;
  }

  getStarShip(id) {
    return this.getResource(`starships/${id}/`);
  }
}
