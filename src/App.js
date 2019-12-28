import React, { Component } from 'react';

class ToDoList extends Component {
  state = {
    tasks: this.props.tasks,
    draft: ''
  }

  updateDraft = event => {
    this.setState({draft: event.target.value})
  }

  addTask = () => {
    const {tasks, draft} = this.state;
    const list = tasks;
    list.push(draft);
    this.setState({tasks: list, draft: ''})
  }

  render() {
    const {title} = this.props;
    const {tasks, draft} = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <ol>
        {tasks.map( tasks => <li>{tasks}</li> )}
        </ol>
        <input type='text' onChange={this.updateDraft} value={draft} />
        <button onClick={this.addTask}>Add task</button>
      </div>
    );
  }
}

class App extends Component {
  myTasks = [
    'umyć się ',
    'siedzieć na yt 10h',
    'grać w lola'
  ]
  render(){
    return(
      <div>
        <ToDoList title="Zadania Bartka na dziś " tasks = {this.myTasks} />
      </div>
    );
  }
}



export default App;
