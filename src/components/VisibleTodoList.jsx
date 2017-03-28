import React, {Component} from 'react';
import { connect } from 'react-redux'
import {clearTodos} from '../actions';
import TodoList from '../components/TodoList'
import SearchTodos from '../components/SearchTodos'

class VisibleTodoList extends Component {

    clearTodos() {
        if (confirm('Remove all todos?')) {
            this.props.clearTodos();
        }
    }

    render() {
        return (
            <div className="filter">
                <SearchTodos results={this.props.todos.length}/>
                <TodoList todos={this.props.todos}/>
                <button className="btn btn-danger remove-all" onClick={() => this.clearTodos()}>Remove all</button>
            </div>
        )
    }
}

const getVisibleTodos = (todos, filter) => {

    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        default:
            let newTodos = todos.filter(t => t.text.includes(filter))
            newTodos.forEach(function (st, index, todos) {
                let newString = '<span class="color">' + filter + '</span>';
                todos[index] = {
                    id: st.id,
                    text: st.text.replace(new RegExp(filter, 'g'), newString),
                    completed: st.completed
                };
            });
            return newTodos
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

export default connect(mapStateToProps, {clearTodos})(VisibleTodoList)

