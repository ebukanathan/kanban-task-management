import React, { useState } from "react";
import SideBar from "./components/SideBar";
// import AddTask from "./components/AddTask";
import AddBoardForm from "./components/addBoardForm";
// import data from "./data.json";

// const data = data.boards;
function App() {
  const [isShowSideBar, setShowSideBar] = useState<boolean>(true);
  // const [boards, setBoards] = useState(data);

  const toggleSideBar: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setShowSideBar(!isShowSideBar);
  };
  return (
    <div className="h-screen w-screen bg-slate-900 flex items-center justify-center">
      {isShowSideBar && <SideBar onClick={toggleSideBar} />}

      {/* <AddTask /> */}
      <AddBoardForm />
    </div>
  );
}

export default App;
