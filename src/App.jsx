import React from "react";
import "./index.css";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import Subscribe from "./components/Subscribe";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Happening from "./components/Happening";
import Feed from "./components/Feed";
import Feed2 from "./components/Feed2";
import Logo from "./components/Logo";

const App = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div className="flex">
          {/* Left Sidebar */}
          <div className="first flex-1 px-[2.2rem] left-41 fixed border-r border-[#ffffff60] min-h-screen ">
            <Logo />
            <Sidebar />
          </div>

          {/* Middle Content */}
          <div className="flex-2">
            <div className="second flex-2 relative left-[12rem] mx-15 mr-[-1.5vw] border-r border-[#ffffff60] min-h-screen overflow-y-scroll scrollbar-hide">
              <Navbar />
              <Post />

              <Feed />

              <Feed2 />
            </div>
          </div>
          {/* Right Sidebar */}
          <div className="third flex-2 px-5 right-0">
            <Searchbar />
            <Subscribe />
            <Happening />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
