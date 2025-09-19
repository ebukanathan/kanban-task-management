import React, { type MouseEventHandler } from "react";
import ToggleButton from "./ToggleButton";
import { useKanban } from "../context/kanbanContext";

type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const SideBar: React.FC<ButtonProps> = ({ onClick }) => {
  const { state } = useKanban();

  const sidebarItems = ["platform launch", "marketing plan", "roadmap"];
  return (
    <>
      <div className="absolute left-0 h-screen w-[300px] pt-8 bg-black text-white flex flex-col justify-between">
        <div className="flex flex-col  ">
          <div className="w-2/3 mx-auto h-auto">
            <img src="logo-light.svg" alt="" className="w-4/5" />
          </div>
          <div className="flex flex-col  mt-8 ">
            <div className="text-[15px] w-2/3 mx-auto uppercase font-semibold flex   px-2 justify-start items-center">
              all boards
            </div>
            <div className="flex flex-col  w-full mt-1 px-4 py-2 justify-center items-center">
              {sidebarItems.map((item) => (
                <div className="w-full py-2 hover:bg-[#635fc7] rounded-r-full">
                  <div className="w-2/3 mx-auto flex gap-4 items-center text-[15px]  font-semibold text-slate-300 capitalize">
                    <img
                      src="icon-board.svg"
                      className="w-[20px] h-[20px]"
                      alt="icon"
                    />
                    <span>{item}</span>
                  </div>
                </div>
              ))}
              <div className="w-full hover:bg-[#635fc7] rounded-r-full">
                <div className="w-3/4 mx-auto pl-3 py-2 not-last:mx-auto flex flex-nowrap gap-4 items-center text-md  font-semibold text-slate-300 capitalize ">
                  <img
                    src="icon-board.svg"
                    className="w-[20px] h-[20px]"
                    alt="icon"
                  />
                  <span className="">+ Create New Board</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-3/4 mx-auto">
          <div className="w-full  bg-[#20212c] flex  gap-2 justify-center items-center   py-2 mb-5">
            <div className="w-[20px] h-[20px]">
              <img src="icon-light-theme.svg" alt="" className="" />
            </div>
            <ToggleButton />
            <div className="">
              <img src="icon-dark-theme.svg" alt="" />
            </div>
          </div>
          <button
            className="flex gap-2 items-center justify-start mb-5 text-slate-300"
            onClick={onClick}
          >
            <img src="icon-hide-sidebar.svg" alt="" />
            <h3 className="capitalize text-sm font-semibold">hide sidebar</h3>
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
