import * as redux from "redux";
import { todoReducer } from "./Reducer/todoReducer";
export const store = redux.createStore(todoReducer);
