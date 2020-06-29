import React, { Component } from 'react'

export default class ToDo extends Component {
    render() {
        return (
            <div>
                {this.props.task}
            </div>
        )
    }
}
