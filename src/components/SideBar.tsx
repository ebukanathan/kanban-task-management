import React from "react";

function SideBar() {
  const sidebarItems: [] = ["platform launch", "marketing plan", "roadmap"];
  return (
    <>
      <div className="h-screen w-[300px]  bg-black text-white flex flex-col">
        <div className="">
          <img src="logo-light.svg" alt="" />
        </div>
        <div className="flex flex-col gap-3">
          {sidebarItems.map((item) => (
            <div className="w-[200px] bg-amber-600 text-white p-4 rounded-xl text-xl font-medium hover:bg-amber-700 hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer    ">
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SideBar;
