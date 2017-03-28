import React, { PropTypes, Component } from 'react';
import {Glyphicon} from 'react-bootstrap';
import { deleteTodo, toggleTodo } from '../actions';
import { connect } from 'react-redux';

class TodoItem extends Component {

    render() {
        return (<li className="item">
                <div className="all-todo">
                <span className={this.props.completed ? 'item-text completed' : 'item-text'}
                      dangerouslySetInnerHTML={{__html: this.props.text}}/>
                    <div className="todo-buttons">
                        <button
                            className="btn btn-sm btn-success"
                            onClick={() => this.props.toggleTodo(this.props.id)}>
                            { !this.props.completed
                                ? <Glyphicon glyph="ok"/>
                                : <Glyphicon glyph="remove"/>
                            }
                        </button>
                        <button
                            className="btn btn-sm btn-danger"
                            onClick={() => this.props.deleteTodo(this.props.id)}>
                            <Glyphicon glyph="trash"/>
                        </button>
                    </div>
                </div>
            </li>
        )
    }
}

TodoItem.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
}

export default connect(null, {deleteTodo, toggleTodo})(TodoItem);
