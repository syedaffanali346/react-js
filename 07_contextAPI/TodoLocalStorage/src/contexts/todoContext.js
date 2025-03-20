import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            // id: 1,
            // todoTitle: "Todo msg",
            // isCompleted: false
        }
    ],
    addTodo: (todoTitle) => {},
    updateTodo: (id, todoTitle) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const TodoContextProvider = TodoContext.Provider

export function useTodo() {
    return useContext(TodoContext)
}