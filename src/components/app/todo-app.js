import React, { Component } from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAddForm from '../item-add-form/item-add-form';

export default class App extends Component {
  constructor() {
    super();
    this.id = 100;
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

  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: this.id + 1,
    };

    this.setState(({ todoData }) => {
      const arrayCopy = [...todoData];
      arrayCopy.push(newItem);

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
        <ItemAddForm 
          addItem={this.addItem}
        />
      </div>
    );
  }
}
