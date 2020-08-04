import React, { Component } from 'react';

export default class RandomPlanet extends Component {
  render() {
    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image" src="src/assets/images/5.jpg" />
        <div>
          <h4>Planet Name</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>123124</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>43</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>100</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
