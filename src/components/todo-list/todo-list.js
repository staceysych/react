import React from 'react';
import PropTypes from 'prop-types';

import TodoListItem from '../todo-list-item/todo-list-item';

const TodoList = ({ toDos }) => {
  const elements = toDos.map((item) => {
    const { id, ...itemsProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...itemsProps} />
      </li>
    );
  });
  return (
    <ul className="list-group todo-list">
      {elements}
    </ul>
  );
};

TodoList.propTypes = {
  toDos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
