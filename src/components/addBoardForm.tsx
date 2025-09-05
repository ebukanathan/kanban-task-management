import React from "react";
import Modal from "./Modal";

function addBoardForm() {
  return (
    <Modal>
      <form className="w-[380px] h-auto bg-white px-4 flex flex-col z-20">
        <div className="font-bold mt-5">Add New Board</div>
        <div className="flex flex-col mt-4">
          <label htmlFor="">Boardname</label>
          <input
            type="text"
            name=""
            value=""
            className="px-3 py-4 rounded-lg h-[20px] w-full border-2 border-slate-300 "
            placeholder="web design"
          />
        </div>

        <div className="flex flex-col mt-3">
          <label htmlFor="">Board Column</label>
          <div className="flex gap-2">
            <input
              type="text"
              name=""
              value=""
              className="px-3 py-4 rounded-lg h-[20px] w-full border-2 border-slate-300"
              placeholder="Todo"
            />
            <button>
              <img src="icon-cross.svg" alt="" />
            </button>
          </div>
          <div className="flex gap-2 mt-2">
            <input
              type="text"
              name=""
              value=""
              className="px-3 py-4 rounded-lg h-[20px] w-full border-2 border-slate-300"
              placeholder="Doing"
            />
            <button>
              <img src="icon-cross.svg" alt="" />
            </button>
          </div>
        </div>
        <button className="w-full rounded-lg shadow-lg py-1 my-4">
          + Add new Column
        </button>

        <button className="w-full my-5  text-white bg-[#635fc7] rounded-lg shadow-lg py-1 mt-2">
          Create New Board
        </button>
      </form>
    </Modal>
  );
}

export default addBoardForm;
