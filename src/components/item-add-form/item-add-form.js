import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ItemAddForm extends Component {
  render() {
    const { addItem } = this.props;
    return (
      <div className="item-add-form">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => addItem('Hello world')}
        >
          Add
        </button>
      </div>
    );
  }
}

ItemAddForm.propTypes = {
  addItem: PropTypes.func.isRequired,
};
