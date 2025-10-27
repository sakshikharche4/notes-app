import { X } from "lucide-react";
import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim() || !detail.trim()) return;
    setTask([...task, { title, detail }]);
    setTitle("");
    setDetail("");
  };

  const deleteNote = (index) => {
    const copy = [...task];
    copy.splice(index, 1);
    setTask(copy);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row  from-gray-900 via-black to-gray-800 text-white p-10">
      {/* Left side form */}
      <form
        onSubmit={submitHandler}
        className="flex flex-col justify-center p-10 lg:w-1/2 gap-6 bg-gray-900/40 backdrop-blur-md rounded-2xl border border-gray-700 shadow-xl transition-transform duration-300 hover:scale-[1.01]"
      >
        <h1 className="text-4xl font-bold mb-2">📝 Add Note</h1>

        <input
          type="text"
          placeholder="Enter note title"
          className="px-5 py-3 w-full font-medium outline-none border border-gray-700 bg-black/50 rounded-xl focus:border-blue-500 transition-all duration-300 focus:scale-[1.02]"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Write details..."
          className="px-5 py-3 w-full h-28 font-medium outline-none border border-gray-700 bg-black/50 rounded-xl focus:border-blue-500 transition-all duration-300 resize-none focus:scale-[1.02]"
          required
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        />

        <button className=" from-blue-500 to-purple-600 w-full text-white px-5 py-3 rounded-xl font-semibold tracking-wide shadow-lg hover:shadow-blue-500/30 active:scale-95 transition-transform duration-300">
          Add Note
        </button>
      </form>

      {/* Right side - Notes */}
      <div className="lg:w-1/2 p-10 border-t-2 lg:border-t-0 lg:border-l-2 border-gray-700 overflow-y-auto">
        <h1 className="text-4xl font-bold mb-5">📒 Your Notes</h1>

        <div className="flex flex-row flex-wrap gap-5 justify-start items-start">
          {task.map((elem, index) => (
            <div
              key={index}
              className="relative text-black rounded-2xl p-5 w-52 h-64 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              style={{
                backgroundImage: `url('https://www.transparenttextures.com/patterns/bright-squares.png')`,
                backgroundColor: [
                  "#FFE082",
                  "#A5D6A7",
                  "#90CAF9",
                  "#F48FB1",
                  "#FFCC80",
                ][index % 5],
                backgroundSize: "cover",
              }}
            >
              <button
                onClick={() => deleteNote(index)}
                className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 transition-all duration-200 active:scale-90"
              >
                <X size={16} />
              </button>

              <h3 className="text-xl font-bold">{elem.title}</h3>
              <p className="mt-3 text-gray-800 font-medium leading-snug">
                {elem.detail}
              </p>
            </div>
          ))}

          {task.length === 0 && (
            <p className="text-gray-400 italic">No notes yet. Add one above!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
