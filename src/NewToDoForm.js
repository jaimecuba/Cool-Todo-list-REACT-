import React, { Component } from 'react'
import uuid from 'uuid/dist/v4'

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
        this.props.create({...this.state, id: uuid()})
        this.setState({
            task: ""
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    name="task" 
                    placeholder="New Task"
                    value={this.state.task}
                    onChange={this.handleInput}
                    />
                    <button>Create new task</button>
                </form>
            </div>
        )
    }
}
