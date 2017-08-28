import React,{Component} from 'react';


class AddTask extends Component{
  constructor(){
    super();
    this.state={
      value:'',
    }
  }
  render(){
    return(
      <form
        onSubmit={(e)=>{
          e.preventDefault();
          if(this.state.value.trim()){
            this.props.addTask(this.state.value);
          }
          this.setState({value:''})
        }
      }>
        <label htmlFor='add'>addTask</label>
        <input
            onChange={(e) =>{
              this.setState({value : e.target.value})
            }}
            value={this.state.value}
            name='add'
            id='add'
        />
        <button type='submit'>addTask</button>


      </form>
    )
  }
}

export default AddTask;
