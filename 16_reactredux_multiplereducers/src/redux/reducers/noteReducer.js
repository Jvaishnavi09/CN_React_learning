import {
  ADD_NOTE,
  DELETE_NOTE,
  addNote,
  deleteNote,
} from "../actions/noteActions";
const initialState = {
  notes: [
    { text: "HTML is an HyperText Markup Language", createdOn: "14/3/2023" },
    { text: "CSS is an cascarding style sheet", createdOn: "24/3/2023" },
  ],
};
export default function noteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            text: action.text,
            createdOn: new Date().toLocaleDateString(),
          },
        ],
      };
    case DELETE_NOTE:
      notes: state.notes.splice(action.index, 1);
      return { ...state, notes: [...state.notes] };
    default:
      return state;
  }
}
