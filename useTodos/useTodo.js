import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [
    //{
    //    id: new Date().getTime(),
    //    description: 'Recolectar la piedra del alma',
    //    done: false
    //},
]

const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [];
} 

export const useTodo = ( ) => {

    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );
    
    const handleNewTodo = (todo) =>{
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }

        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type:'[TODO] Toggle Todo',
            payload: id
        })
    }

    return {
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todos
    }
}
