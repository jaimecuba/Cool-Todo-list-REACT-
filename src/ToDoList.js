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
        this.update = this.update.bind(this)
        this.toggleCompletion = this.toggleCompletion.bind(this)        
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

    update(id, updatedTask){
        const updatedTodos = this.state.todos.map( todo => {
            if(todo.id === id){
                return {...todo, task: updatedTask}
            }
            return todo
        })
        this.setState({
            todos: updatedTodos
        })
    }

    toggleCompletion(id){
        const updatedTodos = this.state.todos.map( todo => {
            if(todo.id === id){
                return {...todo, completed: !todo.completed}
            }
            return todo
        })
        this.setState({
            todos: updatedTodos
        })
    }

    render() {

        const todos = this.state.todos.map( todo => {
            return (
                <div>
                    <ToDo 
                    task={todo.task} 
                    delete={this.delete} 
                    key={todo.id} 
                    id={todo.id}
                    completed={todo.completed}
                    completion={this.toggleCompletion}
                    update={this.update}
                    />
                </div>
            )
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
