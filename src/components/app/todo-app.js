import React, { Component } from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todoData: [
        { label: 'Drink tea', important: false, id: 1 },
        { label: 'Build Awesome Apps', important: true, id: 2 },
        { label: 'Buy milk', important: false, id: 3 },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState((state) => {
      const arrayCopy = [...state.todoData];
      const index = arrayCopy.findIndex((el) => el.id === id);
      arrayCopy.splice(index, 1);
      return {
        todoData: arrayCopy,
      };
    });
  }

  render() {
    const { todoData } = this.state;
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          toDos={todoData}
          onDeleted={this.deleteItem}
        />
      </div>
    );
  }
}
