import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchPanel extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    };
  }

  onSearchChange = ({ target }) => {
    const { value } = target;
    this.setState({
      inputValue: value,
    });
    this.props.onSearchChange(value);
  }

  render() {
    const searchText = 'Type here to search';

    return (
      <input
        type="text"
        placeholder={searchText}
        className="form-control search-input"
        value={this.state.inputValue}
        onChange={this.onSearchChange}
      />
    );
  }
}

SearchPanel.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};
