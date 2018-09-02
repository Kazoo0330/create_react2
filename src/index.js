import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'

const todos = [
  {id: 1, title: "title1"},
  {id: 2, title: "title2"},
  {id: 3, title: "title3"},
  {id: 4, title: "title4"}
];

const deleteTargetId = 4;

const deleteArray = todos.filter(todo => todo.id !== deleteTargetId);

console.log(deleteArray)

ReactDOM.render(<App />, document.getElementById('root'));
