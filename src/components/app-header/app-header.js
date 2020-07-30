import React from 'react';
import PropTypes from 'prop-types';

const AppHeader = ({ toDo, done }) => (
  <div className="app-header d-flex">
    <h1>Todo List</h1>
    <h2>
      {toDo}
      {' '}
      more to do,
      {' '}
      {done}
      {' '}
      done
    </h2>
  </div>
);

AppHeader.propTypes = {
  toDo: PropTypes.number,
  done: PropTypes.number,
};

AppHeader.defaultProps = {
  toDo: 0,
  done: 0,
};

export default AppHeader;
