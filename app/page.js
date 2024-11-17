"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [mainTask, setMainTask] = useState([]);

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setMainTask([...mainTask, { title }]);
    setTitle("");
  }

  function deleteHandler(i) {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-center px-4 py-6 bg-teal-700 text-gray-200">
        Faizan's Todo List
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center"
      >
        <input
          type="text"
          placeholder="Enter Task Here"
          value={title}
          onChange={handleTitle}
          className="text-2xl border-zinc-800 border-2 p-2 m-5"
        />
        <button className="bg-[#353535] hover:bg-black hover:border hover:border-black border border-black text-white text-xl p-3 font-bold rounded m-5">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        {mainTask.length === 0 ? (
          <h2 className="text-center">No Task Available</h2>
        ) : (
          <ul className="flex flex-col gap-4">
            {mainTask.map((v, i) => (
              <li key={i} className="flex justify-between">
                <div className="text-3xl font-bold">{v.title}</div>

                <button
                  onClick={() => {
                    deleteHandler(i);
                  }}
                  className="bg-red-500 text-white px-4 py-2 rounded font-semibold"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default page;
