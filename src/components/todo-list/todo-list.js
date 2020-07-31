import React from 'react';
import PropTypes from 'prop-types';

import TodoListItem from '../todo-list-item/todo-list-item';

const TodoList = ({
  toDos,
  onDeleted,
  onToggleDone,
  onToggleImportant,
}) => {
  const elements = toDos.map((item) => {
    const { id, ...itemsProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemsProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
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
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onToggleImportant: PropTypes.func.isRequired,
};

export default TodoList;
