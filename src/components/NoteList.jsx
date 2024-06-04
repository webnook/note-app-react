import { TrashIcon } from "@heroicons/react/24/solid";
import { useNotes, useNotesDispatch } from "../context/NoteContext";

const NoteList = ({ sortBy }) => {
  const notes = useNotes();
  let sortedNotes = notes;
  if (sortBy === "earliest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  if (sortBy === "latest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  if (sortBy === "completed")
    sortedNotes = [...notes].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );
  return (
    <div>
      {sortedNotes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;

const NoteItem = ({ note }) => {
  const dispatch = useNotesDispatch();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="bg-white p-4 rounded-xl mb-6">
      <div
        className={`flex items-center justify-between border-b border-b-gray-200 pb-1 mb-3 ${
          note.completed ? "opacity-80" : ""
        }`}>
        <div className="flex flex-col">
          <p
            className={`font-bold text-lg md:text-xl text-slate-800 mb-2 ${
              note.completed ? "line-through" : ""
            }`}>
            {note.title}
          </p>
          <p className=" text-sm md:text-lg text-gray-400 mb-2">
            {note.description}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => dispatch({ type: "delete", payload: note.id })}
            className="text-sm">
            <TrashIcon className="text-red-500 w-4 h-4 md:w-5 md:h-5" />
          </button>
          <input
            onChange={(e) => {
              const noteId = Number(e.target.value);
              dispatch({ type: "complete", payload: noteId });
            }}
            value={note.id}
            className="form-checkbox rounded-sm w-4 h-4"
            type="checkbox"
            name={note.id}
            id={note.id}
          />
        </div>
      </div>
      <div className="text-gray-500 md:text-left">
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
      </div>
    </div>
  );
};
