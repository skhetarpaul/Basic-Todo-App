import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './addTodo';

class App extends Component {
  state = {
    todos: [
      {id: 1, value: 'Go for a Walk'},
      {id: 2, value: 'Learn React.Js'}
    ]
  }

  onSubmitEvent = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos: todos
    })
  }
  deleteTodo = (id) => {
    console.log(id);
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className = "center blue-text">Todos</h1>
        <Todos todos = {this.state.todos} deleteTodo = {this.deleteTodo}/>
        <AddTodo onSubmitEvent = {this.onSubmitEvent} />
      </div>
    );
  }
}

export default App;
