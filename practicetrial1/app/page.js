"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settile] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    settile("");
    setdesc("");
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setmainTask(copyTask);
  };

  let renderTask = <h4 className="text-center">No tasks added yet</h4>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex justify-between items-center">
          <div className="flex justify-between mb-5 ">
            <div className="text-2xl">{t.title}</div>
            <div className="text-lg">{t.desc}</div>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-400 px-4 py-2 rounded text-white font-bold"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-center text-white text-bold text-5xl p-5">
        Todo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="border-zinc-800 m-5 px-4 py-2 text-2xl rounded border-2"
          placeholder="Enter the title here"
          value={title}
          onChange={(e) => {
            settile(e.target.value);
          }}
        />
        <input
          type="text"
          className="border-zinc-800 border-2 px-4 py-2 text-2xl m-5 rounded"
          placeholder="Enter the description here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="px-4 py-2 rounded bg-black text-white text-2xl font-bold">
          Add task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
