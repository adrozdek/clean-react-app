import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, CLEAR_TODOS, SET_VISIBILITY_FILTER } from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies'

let nextTodoId = read_cookie('nextTodoId');
export const addTodo = (text) => {
    const action = {
        type: ADD_TODO,
        text,
        id: nextTodoId++
    }
    bake_cookie('nextTodoId', nextTodoId)

    return action;
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id
    }
}

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id
    }
}

export const clearTodos = () => {
    return {
        type: CLEAR_TODOS
    }
}

export const setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}