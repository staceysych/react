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
      searchedText: '',
      filter: 'all',
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

  search = (arr, text) => {
    if (text.length === 0) {
      return arr;
    }

    return arr
      .filter((obj) => obj.label.toLowerCase().indexOf(text.toLowerCase()) > -1);
  }

  onSearchChange = (searchedText) => {
    this.setState({ searchedText });
  }

  filter = (arr, filter) => {
    switch (filter) {
      case 'all':
        return arr;
      case 'active':
        return arr.filter((obj) => !obj.done);
      case 'done':
        return arr.filter((obj) => obj.done);
      default:
        return arr;
    }
  }

  onFilterChange = (filter) => {
    this.setState({ filter });
  }

  render() {
    const { todoData, searchedText, filter } = this.state;
    const visibleItems = this.filter(this.search(todoData, searchedText), filter);
    const doneCount = todoData
      .filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>

        <TodoList
          toDos={visibleItems}
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
