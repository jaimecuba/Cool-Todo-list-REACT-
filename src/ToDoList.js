import React, { Component } from 'react'
import ToDo from './ToDo'

export default class ToDoList extends Component {

    constructor(props){
        super(props)
        this.state = {
            todos: [{task: "Walk the cat"}, {task: "Groom the fish"}]
        }
    }



    render() {

        const todos = this.state.todos.map( todo => {
            return <ToDo task={todo.task} />
        })

        return (
            <div>
                <h1>To-Do List!</h1>
                <ul>
                    <li>{todos}</li>
                </ul>
            </div>
        )
    }
}
