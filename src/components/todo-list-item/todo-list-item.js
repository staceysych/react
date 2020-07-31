import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoListItem extends Component {
  constructor() {
    super();
    this.state = {
      done: false,
      important: false,
    };
  }

  onLabelClick = () => {
    this.setState((state) => ({
      done: !state.done,
    }));
  }

  onMarkImportantClick = () => {
    this.setState((state) => ({
      important: !state.important,
    }));
  }

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

    let listClassName = 'todo-list-item';

    if (done) {
      listClassName += ' done';
    }

    if (important) {
      listClassName += ' important';
    }

    return (
      <span className={listClassName}>
        <span
          className="todo-list-item-label"
          onClick={this.onLabelClick}
        >
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onMarkImportantClick}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}

TodoListItem.propTypes = {
  label: PropTypes.string.isRequired,
  onDeleted: PropTypes.func.isRequired,
};
