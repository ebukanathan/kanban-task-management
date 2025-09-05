import React from "react";

function AddTask() {
  return (
    <div className="absolute inset-0 bg-black  opacity-80 z-10 flex justify-center items-center">
      <form className="w-[380px] h-[475px] bg-white px-4 flex flex-col z-20">
        <div className="flex flex-col mt-5">
          <label htmlFor="">Title</label>
          <input
            type="text"
            name=""
            value=""
            className="px-3 py-4 rounded-lg h-[20px] w-full border-2 border-slate-300 "
            placeholder="e.g Take coffee break"
          />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="">Description</label>
          <textarea
            name=""
            value=""
            className="px-3  rounded-lg  w-full border-2 border-slate-300"
            placeholder="e.g Take coffee break"
            rows={3}
          />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="">Subtask</label>
          <input
            type="text"
            name=""
            value=""
            className="px-3 py-4 rounded-lg h-[20px] w-full border-2 border-slate-300"
            placeholder="e.g Take coffee break"
          />
          <input
            type="text"
            name=""
            value=""
            className="px-3 py-4 rounded-lg h-[20px] mt-2 w-full border-2 border-slate-300"
            placeholder="e.g Take coffee break"
          />
        </div>
        <button className="w-full rounded-lg shadow-lg py-1 mt-2">
          + add new Task
        </button>
      </form>
    </div>
  );
}

export default AddTask;
