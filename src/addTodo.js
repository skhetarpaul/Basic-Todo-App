import React, {Component} from 'react';

  // function AddTodos ({onSubmitEvent}) {
  //   return (
  //     <div>
  //       <form onSubmit = {() => {onSubmitEvent(document.getElementById('value'))}}>
  //         <label htmlFor= "value" >Todo</label>
  //         <input type= "text" id = "value"></input>
  //         <button className = "center">Submit</button>
  //       </form>
  //     </div>
  //   )
  // }
    class AddTodo extends Component {
      state = {
        value : ''
      }
      handleChange = (e) => {
        this.setState({
          value : e.target.value
        })
      }

      handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.onSubmitEvent(this.state);
        this.setState({
          value: ''
        })
      }
      render() {
        return (
          <div>
            <form onSubmit = {this.handleSubmit}>
              <label htmlFor= "value" >Add Todo</label>
              <input type= "text" id = "value" onChange = {this.handleChange} value = {this.state.value}></input>
              <button className = "center">Submit</button></form>
          </div>
        )
      }
    }
export default AddTodo