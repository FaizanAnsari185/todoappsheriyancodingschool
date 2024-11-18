"use client";
import React, { useEffect, useState } from "react";

const page = () => {
  const localStorageKey = "mainTask";

  const [title, setTitle] = useState("");
  const [mainTask, setMainTask] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey) || []);
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(mainTask));
  });

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!title > 0) {
      alert("Please Enter Some Task");
      return;
    }
    setMainTask([...mainTask, { title }]);
    setTitle("");
  }

  function deleteHandler(index) {
    setMainTask(mainTask.filter((_, i) => i !== index));
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
          onChange={handleChange}
          className="border-zinc-800 text-2xl  border-2 p-2 m-5"
        />
        <button className="bg-[#353535] hover:bg-black hover:border hover:border-black border border-black text-white text-xl p-3 font-bold rounded m-5">
          Add Task
        </button>
      </form>
      <div className="p-8 bg-slate-200">
        {mainTask.length === 0 ? (
          <h2 className="text-center text-2xl">No Task Available!</h2>
        ) : (
          <div className="flex flex-col gap-4">
            {mainTask.map((items, index) => (
              <ol key={index} className="flex justify-between px-20">
                <li className="text-2xl">{items.title}</li>
                <button
                  onClick={() => {
                    deleteHandler(index);
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-semibold"
                >
                  Delete
                </button>
              </ol>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default page;
