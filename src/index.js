import React from 'react';
import ReactDOM from 'react-dom';

const todoItems = ['Learn React', 'Build awesome app'];

const TodoList = () => (
  <ul>
    <li>{todoItems[0]}</li>
    <li>{todoItems[1]}</li>
  </ul>
);

const AppHeader = () => <h1>Mt Todo list</h1>;
const searchStyle = {
  fontSize: '25px',
};
const searchText = 'Type here to search';
const SearchPanel = () => (
  <input
    placeholder={searchText}
    style={searchStyle}
    className="app__input"
  />
);

const loginBox = <span>Please, log in</span>;
const welcomeBox = <span>Welcome Back</span>;
const isLoggedIn = true;

const App = () => (
  <div>
    <span>{(new Date()).toString()}</span>
    <br />
    {isLoggedIn ? welcomeBox : loginBox}
    <AppHeader />
    <SearchPanel />
    <TodoList />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
