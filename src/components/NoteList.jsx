const NoteList = ({ notes }) => {
  return (
    <div>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;

const NoteItem = ({ note }) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className="bg-white p-4 rounded-xl mb-6">
      <div className="flex items-center justify-between border-b border-b-gray-200 pb-1 mb-3">
        <div className="flex flex-col">
          <p className="font-bold text-xl text-slate-800 mb-2">{note.title}</p>
          <p className="text-lg text-gray-400 mb-2">{note.description}</p>
        </div>
        <div className="flex items-center gap-4">
          <button>❌</button>
          <input type="checkbox" name="" id="" />
        </div>
      </div>
      <div className="text-gray-500">
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
      </div>
    </div>
  );
};
