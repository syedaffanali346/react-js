import { createSlice, nanoid } from "@reduxjs/toolkit";

const loadTodos = () => {
    const storedTodos = localStorage.getItem("todosReduxToolkit");
    return storedTodos ? JSON.parse(storedTodos) : [];
}

const initialState = {
    todos: loadTodos()
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
            localStorage.setItem("todosReduxToolkit", JSON.stringify(state.todos))
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => action.payload !== todo.id)
            localStorage.setItem("todosReduxToolkit", JSON.stringify(state.todos))
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer