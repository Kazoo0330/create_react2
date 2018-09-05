import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App.js'

const todos = [
  { id: 1, title: "title1" },
  { id: 2, title: "title2" },
  { id: 3, title: "title3" },
  { id: 4, title: "title4" }
];

const deleteTargetId = 4;

const deletedArray = todos.filter(todo => todo.id !== deleteTargetId);

console.log(deletedArray);

const Todos = ({ todos }) => {
  const list = todos.map(todo => {
    return (
      <li>
        {todo.id} {todo.title}
      </li>
    );
  });
  return <ul>{list}</ul>;
};

ReactDOM.render(<Todos todos={todos} />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
