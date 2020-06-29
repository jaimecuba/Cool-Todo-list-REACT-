import React, { Component } from 'react'
import ToDo from './ToDo'
import NewToDoForm from './NewToDoForm'

export default class ToDoList extends Component {

    constructor(props){
        super(props)
        this.state = {
            todos: []
        }

        this.create = this.create.bind(this)
        this.delete = this.delete.bind(this)
    }

    create(newTodo){
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    delete(id){
        this.setState({
            todos: this.state.todos.filter( todo => {
                return todo.id !== id
            })
        })
    }

    render() {

        const todos = this.state.todos.map( todo => {
            return <li><ToDo task={todo.task} delete={this.delete} key={todo.id} id={todo.id}/></li>
        })

        return (
            <div>
                <h1>To-Do List!</h1>
                <NewToDoForm create={this.create} />
                <ol>
                    {todos}
                </ol>
            </div>
        )
    }
}
