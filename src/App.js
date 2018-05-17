import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AddNew from './components/add_new';
import TaskLists from './components/task_lists';
import FilterTask from './components/filter_task';
import Action from './components/action';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      filter: false,
      tasks: [ {title: 'todo task'} ],
      filterTasks: [],
      clear: false,
      newList: []
    }
  }

  handleInput = (task) => {
    if (this.state.clear) {
      let tempTasks = this.state.newList;
      tempTasks.push({ title: task });
      this.setState({newList: tempTasks});
      return;
    }

    let tempTasks = this.state.tasks;
    tempTasks.push({ title: task });
    this.setState({tasks: tempTasks});
  }

  removeTask = (task) => {
    let tasks = this.state.tasks;
    tasks.splice(tasks.indexOf(task), 1);
    this.setState({ tasks } )
    if(this.state.filter) {
      let filterTasks = this.state.filterTasks;
      filterTasks.splice(filterTasks.indexOf(task), 1);
      this.setState({ filterTasks } );
    }
  }

  handleFilter = (tasks) => {
    this.setState({ filterTasks: tasks, filter: true });
  }

  removeFilter = () => {
    this.setState({filter: false});
  }

  resetList = () => {
    this.setState({ clear: false})
  }

  clearList = () => {
    this.setState({clear: true, newList: []})
  }

  render() {
    let tasks = this.state.filter ? this.state.filterTasks : this.state.tasks;
    tasks = this.state.clear ? this.state.newList : tasks
    return (
      <div className="App">
        <div className='header'>
          <div className='heading-main'>
            <h1> React TODO APP </h1>
          </div>
          <div className='sub-heading'>
            <h3> Enhance Your Productivity</h3>
          </div>
        </div>
        <div className='content'>
          <AddNew handleInput={ this.handleInput } />
          <FilterTask tasks={ this.state.tasks } handleFilter={ this.handleFilter } removeFilter = { this.removeFilter }/>
          <TaskLists tasks= { tasks } removeTask= {this.removeTask} />
          <Action resetList={ this.resetList } clearList={ this.clearList } />
        </div>
      </div>
    );
  }
}

export default App;