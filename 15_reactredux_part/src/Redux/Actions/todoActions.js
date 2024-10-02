//Action Types
export const ADD_TODO = "Add TODO";
export const TOGGLE_TODO = "Toggle TODO";

//ACtion Creators
export const addToDo = (text) => ({ type: ADD_TODO, text });
export const toggleTodo = (index) => ({ type: TOGGLE_TODO, index });
