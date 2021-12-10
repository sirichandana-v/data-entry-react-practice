import React, { Component } from 'react'

export class Form extends Component {

    initialState={
            name:"",
            job:""  
    }

    state=this.initialState
    

    handleChange=(event)=>{
        const {name, value} = event.target
        this.setState({
            [name]:value,
        })

    }
    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState({
            name:"",
            job:""  
    });
      }

    render() {
        return (
            <form >
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange}/>
                <label htmlFor="job">Job</label>
                <input type="text" id="job" name="job" value={this.state.job} onChange={this.handleChange} />
                <input type="button" value="submit" onClick={this.submitForm}/>
            </form>
        )
    }
}

export default Form
