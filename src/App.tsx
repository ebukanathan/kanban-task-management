import React, { useState } from "react";
import SideBar from "./components/SideBar";
import AddTask from "./components/AddTask";

function App() {
  const [isShowSideBar, setShowSideBar] = useState<boolean>(true);

  const toggleSideBar: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setShowSideBar(!isShowSideBar);
  };
  return (
    <div className="h-screen w-screen bg-slate-900 flex items-center justify-center">
      {isShowSideBar && <SideBar onClick={toggleSideBar} />}

      <AddTask />
    </div>
  );
}

export default App;
