import { useState } from "react";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
import { NotesProvider } from "./context/NoteContext";

const App = () => {
  const [sortBy, setSortBy] = useState("latest");
  return (
    <NotesProvider>
      <div>
        <NoteHeader sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)} />
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <AddNewNote />
          <div className="w-full md:w-2/3">
            <NoteStatus />
            <NoteList sortBy={sortBy} />
          </div>
        </div>
      </div>
    </NotesProvider>
  );
};

export default App;
