import React from 'react';

const Todos = ({todos, deleteTodo}) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return(
        <div className = "collection-item" key = {todo.id}>
          <span className = "center" onClick = {() => {deleteTodo(todo.id)}}>
            {todo.value}
          </span>
        </div>
      )
    })
  ) : (
  <p className = "center"> No more Todos left for the day!! </p>
  )
  return (
    <div className = "todos collection">
      {todoList}
    </div>
  )
}

export default Todos