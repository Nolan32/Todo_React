import React,{Component} from 'react';

class List extends Component{

  render(){
    console.log(this.props.tasks)
    const rows = this.props.tasks.map(item =>(
       <li onClick={()=>{
            this.props.changeStatus(item.id);
           }}
           key ={item.id}
          className={item.status ?'done' :'todo'}>{item.content}
      </li>

    ));
    return(
      <ul>
        {rows}
      </ul>
    )
  }
}
export default List;
