import React, { type MouseEventHandler } from "react";
import ToggleButton from "./ToggleButton";

type ButtonProps = {
  onClick: (event: MouseEventHandler<HTMLButtonElement>) => void;
};

const SideBar: React.FC<ButtonProps> = ({ onClick }) => {
  const sidebarItems = ["platform launch", "marketing plan", "roadmap"];
  return (
    <>
      <div className="absolute left-0 h-screen w-[300px] pt-10 bg-black text-white flex flex-col justify-between">
        <div className="flex flex-col ">
          <div className="w-2/3 mx-auto h-auto">
            <img src="logo-light.svg" alt="" className="w-4/5" />
          </div>
          <div className="mt-10 flex flex-col">
            <div className="text-md w-2/3 mx-auto uppercase font-bold mt-10  flex   px-2 justify-start items-center">
              all boards
            </div>
            <div className="flex flex-col gap-7 w-full mt-4 px-4 py-2 justify-center items-center">
              {sidebarItems.map((item) => (
                <div className="w-full">
                  <div className="w-2/3 mx-auto flex gap-4 items-center text-md  font-bold text-slate-300 capitalize">
                    <img
                      src="icon-board.svg"
                      className="w-[20px] h-[20px]"
                      alt="icon"
                    />
                    <span>{item}</span>
                  </div>
                </div>
              ))}
              <div className="w-3/4 pl-3 not-last:mx-auto flex gap-4 items-center text-md  font-bold text-slate-300 capitalize">
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
