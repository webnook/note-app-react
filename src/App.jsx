import { useReducer, useState } from "react";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";

function noteReducer(notes, { type, payload }) {
  switch (type) {
    case "add": {
      return [...notes, payload];
    }
    case "delete": {
      return notes.filter((note) => note.id !== payload);
    }
    case "complete": {
      return notes.map((note) =>
        note.id === payload ? { ...note, completed: !note.completed } : note
      );
    }
    default:
      throw new Error("unknown Error" + type);
  }
}

const App = () => {
  // const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");
  const [notes, dispatch] = useReducer(noteReducer, []);

  const addNoteHandler = (newNote) => {
    // setNotes((prevNotes) => [...prevNotes, newNote]);
    dispatch({ type: "add", payload: newNote });
  };
  const deleteNoteHandler = (id) => {
    // const filteredNotes = notes.filter((note) => note.id !== id);
    // setNotes(filteredNotes);
    // setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
    dispatch({ type: "delete", payload: id });
  };
  const completeNoteHandler = (e) => {
    const noteId = Number(e.target.value);
    // const newNotes = notes.map((note) =>
    //   note.id === noteId ? { ...note, completed: !note.completed } : note
    // );
    // setNotes((prevNotes) =>
    //   prevNotes.map((note) =>
    //     note.id === noteId ? { ...note, completed: !note.completed } : note
    //   )
    // );
    dispatch({ type: "complete", payload: noteId });
  };

  return (
    <div>
      <NoteHeader
        notes={notes}
        sortBy={sortBy}
        onSort={(e) => setSortBy(e.target.value)}
      />
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <AddNewNote onAddNote={addNoteHandler} />
        <div className="w-full md:w-2/3">
          <NoteStatus notes={notes} />
          <NoteList
            notes={notes}
            sortBy={sortBy}
            onDelete={deleteNoteHandler}
            oncomplete={completeNoteHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
