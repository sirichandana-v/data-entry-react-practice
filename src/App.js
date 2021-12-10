import React, {Component} from 'react'
import Table from './components/Table'
import Form from './components/Form'


class App extends Component {
  
  state={
    details:[
     
    ]
  }
  removeDetail=(index)=>{
    this.setState({
      details:this.state.details.filter((element,i)=>i!==index)
    })
  }

  handleSubmit=(detail)=>{
    this.setState({
      details:[...this.state.details,detail]
    })
  }

  render(){
    const details=this.state.details
    return (
      <div className='container'>
        <Table details={details} removeDetail={this.removeDetail}/>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
      
    );
  }
}

export default App