const NoteHeader = ({ notes, sortBy, onSort }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly mb-12 border-b border-b-gray-400 py-2">
      <h1 className="text-2xl mb-4 md:text-4xl font-bold text-slate-900 py-1">
        My Notes ({notes.length})
      </h1>
      <select
        className="form-select mb-4 rounded-2xl"
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
