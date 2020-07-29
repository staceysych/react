import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => (
  <ul>
    <li>Learn React</li>
    <li>Create awesome app</li>
  </ul>
);

const AppHeader = () => <h1>Mt Todo list</h1>;

const SearchPanel = () => <input placeholder="Search" />;

const App = () => (
  <div>
    <AppHeader />
    <SearchPanel />
    <TodoList />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
