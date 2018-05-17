import React, { Component } from 'react';


export default class AddNew extends Component {

  constructor(props) {
    super(props);
    this.state = { task: '' }
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.handleInput(this.state.task);
    this.setState({task: ''});
  }

  onInputChange = (event) => {
    this.setState({ task: event.target.value })
  }

  render() {
    return (
      <form className='add-new' onSubmit={ this.onFormSubmit }>
        <div className='form-group'>
          <input placeholder='Add New task' onChange={ this.onInputChange } value= {this.state.task} className='form-control'/>
        </div>

        <button type='Submit' className='btn btn-default'>Submit </button>
      </form>
      )
  }
}