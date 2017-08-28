import React, { Component } from 'react';
import { v4} from 'node-uuid';
import AddTask from './component/AddTask'
import List from './component/List';
class App extends Component {
  constructor(){
    super();
    this.state={
      tasks:[],
    }
    this._addTaskOnSubmit = this._addTaskOnSubmit.bind(this);
    this._onChangeStatus = this._onChangeStatus.bind(this);
  }
    _addTaskOnSubmit(task){
      this.setState({
        tasks:[

          ...this.state.tasks,
            {content:task,
             id: v4(),
             status:false,}

        ]
      });
    }
    _onChangeStatus(id){
      let update =this.state.tasks;
      let NewTasks = update.map(item =>{
        if(item.id === id){
          return{
            content:item.content,
            id : item.id,
            status : !item.status
          };return item
        }

      })
      this.setState({
        tasks : NewTasks
      });
    }

  render(){
    return(
      <div>
        <AddTask addTask={this._addTaskOnSubmit}/>
        <List tasks={this.state.tasks} changeStatus={this._onChangeStatus}/>
      </div>
    );
  }
}

export default App;
