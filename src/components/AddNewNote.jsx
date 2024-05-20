import { useState } from "react";

const AddNewNote = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const newNote = {
      title,
      description,
      id: new Date().getTime(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTitle("");
    setDescription("");
    console.log(newNote);
  };

  return (
    <>
      <div className="w-full md:w-1/3">
        <h2 className="font-bold text-2xl mb-6">Add New Note</h2>
        <form onSubmit={submitHandler}>
          <input
            className="w-full p-4 rounded-lg text-slate-700 text-lg mb-6"
            type="text"
            placeholder="Title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="w-full p-4 rounded-lg text-slate-700 text-lg mb-6"
            type="text"
            placeholder="Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            type="submit"
            className="rounded-lg p-4 bg-blue-500 text-white w-full font-bold text-xl">
            Add New Note
          </button>
        </form>
      </div>
    </>
  );
};

export default AddNewNote;
