import React from 'react'

import { useState } from "react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("foryou");

  return (
    <div className="flex justify-center items-center fixed w-[33.7vw] border-b overflow-hidden border-b-[#ffffff4c] bg-[#0000005a] z-10 backdrop-blur-[10px] my-0">
      <div className="relative flex w-full h-13">

        {/* For You Tab */}
        <span
          onClick={() => setActiveTab("foryou")}
          className={`flex-1 flex justify-center items-center text-lg cursor-pointer transition-all duration-200 hover:bg-[#ffffff1e] ${
            activeTab === "foryou" ? "font-semibold text-white" : "text-gray-400"
          }`}
        >
          For you
        </span>

        {/* Following Tab */}
        <span
          onClick={() => setActiveTab("following")}
          className={`flex-1 flex justify-center items-center text-lg cursor-pointer transition-all duration-200 hover:bg-[#ffffff1e] ${
            activeTab === "following" ? "font-semibold text-white" : "text-gray-400"
          }`}
        >
          Following
        </span>

        {/* Underline Bar */}
        <span
          className="absolute bottom-0 h-[3px] w-1/2 rounded-[15px] bg-[#1d9bf0] transition-transform duration-300"
          style={{
            transform: activeTab === "foryou" ? "translateX(0%)" : "translateX(100%)",
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
