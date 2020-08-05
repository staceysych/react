import React, { Component } from 'react';

import SwapiService from '../../services/swapi-servise';
import Spinner from '../spinner/spinner';

export default class RandomPlanet extends Component {
  constructor() {
    super();
    this.state = {
      planet: {}
    };
    this.swapiService = new SwapiService();
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({planet})
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 25) + 2;

    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoaded);
  }

  render() {
    const { planet: {
      id,
      name,
      population,
      rotationPeriod,
      diameter,
      }
    } = this.state;

    return <Spinner />;
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
