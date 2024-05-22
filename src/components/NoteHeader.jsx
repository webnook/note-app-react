const NoteHeader = ({ notes, sortBy, onSort }) => {
  return (
    <div className="flex items-center justify-evenly mb-12 border-b border-b-gray-400 py-2">
      <h1 className="text-4xl font-bold text-slate-900 py-1">
        My Notes ({notes.length})
      </h1>
      <select
        className="form-select rounded-2xl"
        value={sortBy}
        onChange={onSort}>
        <option value="latest">sort base on latest notes</option>
        <option value="earliest">sort base on earliest notes</option>
        <option value="completed">sort base on completed notes</option>
      </select>
    </div>
  );
};

export default NoteHeader;
