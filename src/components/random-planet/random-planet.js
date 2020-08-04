import React, { Component } from 'react';

import SwapiService from '../../services/swapi-servise';

export default class RandomPlanet extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      name: null,
      population: null,
      rotationPeriod: null,
      diameter: null,
    };
    this.swapiService = new SwapiService();
    this.updatePlanet();
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 25) + 2;

    this.swapiService.getPlanet(id)
      .then((data) => {
        this.setState({
          id,
          name: data.name,
          population: data.population,
          rotationPeriod: data.rotation_period,
          diameter: data.diameter,
        });
      });
  }

  render() {
    const {
      id,
      name,
      population,
      rotationPeriod,
      diameter,
    } = this.state;
    return (
      <div className="random-planet jumbotron rounded">
        <img alt="Planet" className="planet-image" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        <div>
          <h4>{name}</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
