import React, { Component } from 'react';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import FilterFooter from './FilterFooter';
import './../App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <div className="title">
                    To Do App
                </div>
                <VisibleTodoList />
                <AddTodo />
                <FilterFooter />
            </div>
        )
    }
}

export default App