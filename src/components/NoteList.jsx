const NoteList = ({ notes, onDelete, oncomplete }) => {
  return (
    <div>
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={onDelete}
          oncomplete={oncomplete}
        />
      ))}
    </div>
  );
};

export default NoteList;

const NoteItem = ({ note, onDelete, oncomplete }) => {
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
            className={`font-bold text-xl text-slate-800 mb-2 ${
              note.completed ? "line-through" : ""
            }`}>
            {note.title}
          </p>
          <p className="text-lg text-gray-400 mb-2">{note.description}</p>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => onDelete(note.id)} className="text-sm">
            ❌
          </button>
          <input
            onChange={oncomplete}
            value={note.id}
            className="form-checkbox rounded-sm"
            type="checkbox"
            name={note.id}
            id={note.id}
          />
        </div>
      </div>
      <div className="text-gray-500 text-left">
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
      </div>
    </div>
  );
};
