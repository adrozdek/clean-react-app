import { ADD_TODO, DELETE_TODO, CLEAR_TODOS, TOGGLE_TODO  } from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies'

const todo = (state = [], action) => {

    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case 'TOGGLE_TODO':
            if (action.id !== state.id) {
                return state
            }

            return {...state,
                completed: !state.completed
            }
        default:
            return state
    }
}

const removeById = (state = [], id) => {
    const todos = state.filter(todo => todo.id !== id);
    return todos;
}


const todos = (state = [], action) => {
    let todos = null
    state = read_cookie('todos');
    switch (action.type) {
        case ADD_TODO:
            todos = [...state, todo(undefined, action)];
            bake_cookie('todos', todos)
            return todos;
        case DELETE_TODO:
            todos = removeById(state, action.id);
            bake_cookie('todos', todos)
            return todos;
        case CLEAR_TODOS:
            todos = [];
            bake_cookie('todos', [])
            return todos;
        case TOGGLE_TODO:
            todos = state.map(t =>
                todo(t, action)
            )
            bake_cookie('todos', todos)
            return todos;
        default:
            return state;
    }
}

export default todos;