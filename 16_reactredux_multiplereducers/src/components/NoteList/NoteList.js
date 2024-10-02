import "./NoteList.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../../redux/actions/noteActions";

function NoteList() {
  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <p>{note.createdOn}</p>
            <p className="note-content">{note.text}</p>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(deleteNote(index))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
