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
        this.createTodoItem('Drink tea'),
        this.createTodoItem('Build Awesome Apps'),
        this.createTodoItem('Buy milk'),
      ],
    };
  }

  createTodoItem = (label) => ({
    label,
    important: false,
    done: false,
    id: this.id++,
  })

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
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const arrayCopy = [...todoData];
      arrayCopy.push(newItem);

      return {
        todoData: arrayCopy,
      };
    });
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      const arrayCopy = [...todoData];
      const index = arrayCopy.findIndex((el) => el.id === id);
      const currentObj = arrayCopy[index];
      currentObj.important = !currentObj.important;

      return {
        important: currentObj.important,
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const arrayCopy = [...todoData];
      const index = arrayCopy.findIndex((el) => el.id === id);
      const currentObj = arrayCopy[index];
      currentObj.done = !currentObj.done;

      return {
        done: currentObj.done,
      };
    });
  };

  render() {
    const { todoData } = this.state;
    const doneCount = todoData
      .filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          toDos={todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm
          addItem={this.addItem}
        />
      </div>
    );
  }
}
