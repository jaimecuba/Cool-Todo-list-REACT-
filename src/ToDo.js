import React, { Component } from 'react'

export default class ToDo extends Component {

    constructor(props){
        super(props)
        this.state = {
            isEditing: false,
            task: this.props.task
        }

        this.handleDelete = this.handleDelete.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }

    handleDelete(evt){
        evt.preventDefault()
        this.props.delete(this.props.id)
    }

    handleEdit(evt){
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleInput(evt){
        this.setState({
            task: evt.target.value
        })
    }

    handleUpdate(evt){
        evt.preventDefault()
    }

    render() {

        let result
        if(this.state.isEditing){
            result = (
                <form>
                    <input type="text" value={this.state.task} onChange={this.handleInput}/>
                    <button onClick={this.handleUpdate}>Save</button>
                </form>
            )
        } else {
            result = (
                <div>
                    <button onClick={this.handleEdit}>Edit</button>
                    <button onClick={this.handleDelete}>Delete</button>
                    {this.props.task}
                    <hr/>
                </div>
            )
        }

        return (
            result
        )
    }
}
