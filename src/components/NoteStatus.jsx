const NoteStatus = ({ notes }) => {
  const allNotes = notes.length;
  const completedNotes = notes.filter((n) => n.completed).length;

  if (!allNotes)
    return (
      <h2 className="text-sm md:text-xl text-slate-800 font-bold">
        No Notes has already been added
      </h2>
    );
  return (
    <ul className="flex  items-center justify-between gap-x-3 mb-6 text-gray-400 px-4">
      <li className="text-sm md:text-lg">
        All
        <span className="bg-gray-400 inline-block rounded-3xl text-white ml-1 mt-2 p-1">
          {allNotes}
        </span>
      </li>
      <li className="text-sm md:text-lg">
        Completed
        <span className="bg-gray-400 inline-block rounded-3xl text-white ml-1 mt-2 p-1">
          {completedNotes}
        </span>
      </li>
      <li className="text-sm md:text-lg">
        Uncompleted
        <span className="bg-gray-400 inline-block rounded-3xl text-white ml-1 mt-2 p-1">
          {allNotes - completedNotes}
        </span>
      </li>
    </ul>
  );
};

export default NoteStatus;
