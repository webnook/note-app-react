import { useState } from "react";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";

const App = () => {
  const [notes, setNotes] = useState([]);
  const addNoteHandler = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  const deleteNoteHandler = (id) => {
    // const filteredNotes = notes.filter((note) => note.id !== id);
    // setNotes(filteredNotes);
    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  };
  const completeNoteHandler = (e) => {
    const noteId = Number(e.target.value);
    // const newNotes = notes.map((note) =>
    //   note.id === noteId ? { ...note, completed: !note.completed } : note
    // );
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === noteId ? { ...note, completed: !note.completed } : note
      )
    );
  };
  return (
    <div>
      <div className="flex items-center justify-evenly mb-12 border-b border-b-gray-400 py-2">
        header
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <AddNewNote onAddNote={addNoteHandler} />
        <div className="w-full md:w-2/3">
          <NoteList
            notes={notes}
            onDelete={deleteNoteHandler}
            oncomplete={completeNoteHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
