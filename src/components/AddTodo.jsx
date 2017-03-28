import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import './../App.css';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    addTodo() {
        if (this.state.text !== '') {
            this.props.addTodo(this.state.text);
            this.setState({text: ''})
        }
    }

    render() {
        return (
            <div className="form-inline todo-form">
                <div className="form-group">
                    <input
                        className="form-control"
                        value={this.state.text}
                        placeholder="I have to..."
                        onChange={event => this.setState({text: event.target.value})}
                        onKeyPress={event => {
                                if(event.key === 'Enter') {
                                    this.addTodo()
                                }
                            }}
                    />
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => this.addTodo()}
                    >
                        Add Todo
                    </button>
                </div>
            </div>
        )
    }
}

export default connect(null, {addTodo})(AddTodo);

