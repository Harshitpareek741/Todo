import { createContext, useContext } from "react";


const TodoContext = createContext({
    Todo:{
        id : '1',
        msg : "na",
        onDone : false
    },
    addTodo : (todo) => {},
    updateTodo : (id,todo) => {},
    deleteTodo : (id) => {},
    markTodo : (id) => {}
});

export const UseTodo = () => useContext(TodoContext);
export const TodoProvider = TodoContext.Provider;

