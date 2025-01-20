import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar";
import useSelectedButton from "../hooks/useSelectedButton";

const Layout = () => {
  const { selectedTab, buttonImages, handleButtonClick } = useSelectedButton();

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar
        selectedTab={selectedTab}
        buttonImages={buttonImages}
        handleButtonClick={handleButtonClick}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar selectedTab={selectedTab} />

        {/* Content */}
        <main className="flex-1 py-6 px-24 bg-gray-100 h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
