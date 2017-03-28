import React, { PropTypes } from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos }) => (
    <ol className="todos-list">
        {todos.map(todo =>
            <TodoItem
                key={todo.id}
                {...todo}
            />
        )}
    </ol>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired,
}

export default TodoList