import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ItemAddForm extends Component {
  constructor() {
    super();
    this.state = {
      inputText: '',
    };
  }

  onLabelChange = ({ target }) => {
    this.setState({
      inputText: target.value,
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { addItem } = this.props;
    const { inputText } = this.state;
    addItem(inputText);
    this.setState({
      inputText: '',
    });
  }

  render() {
    return (
      <form
        className="item-add-form d-flex"
        onSubmit={this.onSubmit}
      >
        <input
          type="text"
          placeholder="add things to do"
          className="form-control"
          onChange={this.onLabelChange}
          value={this.state.inputText}
        />
        <button
          type="submit"
          className="btn btn-outline-secondary"
        >
          Add
        </button>
      </form>
    );
  }
}

ItemAddForm.propTypes = {
  addItem: PropTypes.func.isRequired,
};
