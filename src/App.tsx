import React, { useState } from "react";
import SideBar from "./components/SideBar";

function App() {
  const [isShowSideBar, setShowSideBar] = useState<boolean>(false);

  const toggleSideBar: React.MouseEventHandler<HTMLButtonElement> = () => {
    setShowSideBar(!isShowSideBar);
  };
  return (
    <div className="h-screen w-screen bg-slate-900 flex items-center justify-center">
      <SideBar onClick={toggleSideBar} />
    </div>
  );
}

export default App;
