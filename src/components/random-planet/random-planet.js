import React, { Component } from 'react';

import SwapiService from '../../services/swapi-servise';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../errors/error-indicator';

export default class RandomPlanet extends Component {
  constructor() {
    super();
    this.state = {
      planet: {},
      loading: true,
      error: false,
    };
    this.swapiService = new SwapiService();
    this.updatePlanet();
    setInterval(() => {
      this.updatePlanet()
    }, 3500);
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
    })
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    })
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 3;

    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
    const { planet, loading, error } = this.state;
    const hasData = !(loading || error);
    const spinner = loading ? <Spinner /> : null;
    const content = hasData? <PlanetView planet={planet} /> : null;
    const errorIndicator = error ? <ErrorIndicator /> : null;
    const centre = (loading || error) ? 'center-spinner' : '';
  
    return (
      <div className={`random-planet jumbotron rounded ${centre}`}>
        {spinner}
        {content}
        {errorIndicator}
      </div>
    );
  }
}

const PlanetView = ({planet}) => {
  const {
      id,
      name,
      population,
      rotationPeriod,
      diameter,
  } = planet;

  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}
