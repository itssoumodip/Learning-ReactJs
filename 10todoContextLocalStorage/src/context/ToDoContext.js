import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg", //proparties
            completed: false,
        }
    ]
})

export const useTodo = () => {
    return useContext(ToDoContext)
}

export const Todoprovider = ToDoContext.Provider