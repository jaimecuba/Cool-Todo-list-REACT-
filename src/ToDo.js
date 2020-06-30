import React, { Component } from 'react'
import './ToDo.css'

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
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleCompletion = this.handleCompletion.bind(this)
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
        this.props.update(this.props.id, this.state.task)
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleCompletion(evt){
        evt.preventDefault()
        this.props.completion(this.props.id)
    }

    render() {

        let result
        if(this.state.isEditing){
            result = (
                <div className="Todo">
                    <form className="Todo-edit-form">
                        <input type="text" value={this.state.task} onChange={this.handleInput}/>
                        <button onClick={this.handleUpdate}>Save</button>
                    </form>
                </div>
            )
        } else {
            result = (
                <div className="Todo">
                    <li className={this.props.completed ? 'Todo-task completed' : 'Todo-task'} onClick={this.handleCompletion}>{this.props.task}</li>
                    <div className="Todo-buttons">
                        <button onClick={this.handleEdit}><i className="fas fa-pen"/></button>
                        <button onClick={this.handleDelete}><i className="fas fa-trash"/></button>
                    </div>
                </div>
            )
        }

        return (
            result
        )
    }
}
