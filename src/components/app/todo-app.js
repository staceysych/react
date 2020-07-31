import React from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';

const App = () => {
  const todoData = [
    { label: 'Drink tea', important: false, id: 1 },
    { label: 'Build Awesome Apps', important: true, id: 2 },
    { label: 'Buy milk', important: false, id: 3 },
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList toDos={todoData} />
    </div>
  );
};

export default App;
