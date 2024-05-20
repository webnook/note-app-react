import AddNewNote from "./components/AddNewNote";

const App = () => {
  return (
    <div>
      <div className="flex items-center justify-evenly mb-12 border-b border-b-gray-400 py-2">
        header
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <AddNewNote />
        <div className="w-full md:w-2/3">note container</div>
      </div>
    </div>
  );
};

export default App;
