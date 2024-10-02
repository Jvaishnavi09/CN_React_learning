import {
  ADD_TODO,
  TOGGLE_TODO,
  addToDo,
  toggleTodo,
} from "../Actions/todoActions";

const intialState = {
  todos: [
    { text: "Wake up at 6 am", completed: false },
    { text: "Make your bed", completed: false },
  ],
};
export function todoReducer(state = intialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { text: action.text, completed: false }],
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, i) => {
          if (i === action.index) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };

    default:
      return state;
  }
}
