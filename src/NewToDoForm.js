import React, { Component } from 'react'
import uuid from 'uuid/dist/v4'
import './NewToDoForm.css'

export default class NewToDoForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            task: ""
        }

        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt){
        evt.preventDefault()
        this.props.create({...this.state, id: uuid(), completed: false})
        this.setState({
            task: ""
        })
    }

    render() {
        return (
            <div>
                <form className="Newtodoform" onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    name="task" 
                    placeholder="New Task"
                    value={this.state.task}
                    onChange={this.handleInput}
                    />
                    <button>New task</button>
                </form>
            </div>
        )
    }
}
