import React from "react";
import Logo from "./logo";

const Sidebar = () => {
  return (
    <div className="sidebar font-[poppins] flex flex-col justify-start">
      <ul className="flex flex-col gap-[4px] text-[1.3rem] font-[300]">
        <li className="font-[700] flex justify-start items-center gap-3 w-fit px-4 py-2 border-0 rounded-[30px] hover:bg-[#fffafa17] transition-colors duration-300">
          <span className="material-symbols-outlined "><span className="font-[600] ">home</span></span>
          <a href="">Home</a>
        </li>

        <li className="flex justify-start items-center gap-3 w-fit px-4 py-2 border-0 rounded-[30px] hover:bg-[#fffafa17] transition-colors duration-300">
          <span className="material-symbols-outlined">search</span>
          <a href="">Explore</a>
        </li>

        <li className="flex justify-start items-center gap-3 w-fit px-4 py-2 border-0 rounded-[30px] hover:bg-[#fffafa17] transition-colors duration-300">
          <span className="material-symbols-outlined">notifications</span>
          <a href="">Notification</a>
        </li>

        <li className="flex justify-start items-center gap-3 w-fit px-4 py-2 border-0 rounded-[30px] hover:bg-[#fffafa17] transition-colors duration-300">
          <span className="material-symbols-outlined">mail</span>
          <a href="">Messages</a>
        </li>

        <li className="flex justify-start items-center gap-3 w-fit px-4 py-2 border-0 rounded-[30px] hover:bg-[#fffafa17] transition-colors duration-300">
          <span className="material-symbols-outlined">neurology</span>
          <a href="">Grok</a>
        </li>

        <li className="flex justify-start items-center gap-3 w-fit px-4 py-2 border-0 rounded-[30px] hover:bg-[#fffafa17] transition-colors duration-300">
          <span className="material-symbols-outlined">group</span>
          <a href="">Communities</a>
        </li>

        <li className="flex justify-start items-center gap-3 w-fit px-4 py-2 border-0 rounded-[30px] hover:bg-[#fffafa17] transition-colors duration-300">
          <span>
            <svg viewBox="0 0 24 24" aria-hidden="true" class="w-6 invert r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
          </span>
          <a href="">Premium</a>
        </li>

        <li className="flex justify-start items-center gap-3 w-fit px-4 py-2 border-0 rounded-[30px] hover:bg-[#fffafa17] transition-colors duration-300">
          <span className="material-symbols-outlined">bolt</span>
          <a href="">Verified Orgs</a>
        </li>

        <li className="flex justify-start items-center gap-3 w-fit px-4 py-2 border-0 rounded-[30px] hover:bg-[#fffafa17] transition-colors duration-300">
          <span className="material-symbols-outlined">account_circle</span>
          <a href="">Profile</a>
        </li>

        <li className="flex justify-start items-center gap-3 w-fit px-4 py-2 border-0 rounded-[30px] hover:bg-[#fffafa17] transition-colors duration-300">
          <span className="material-symbols-outlined">pending</span>
          <a href="">More</a>
        </li>

        <li><button className="bg-white text-black px-20 p-1.5 rounded-[30px] hover:bg-[#cecdcd] cursor-pointer">Post</button></li>
      </ul>

      <button className="bg-transparent justify-start font-poppins text-black py-2 px-10 rounded-[30px] cursor-pointer relative top-5 hover:bg-[#ffffff0f]">
        
        <div className="font-poppins text-white text-[18px] font-[600]"><a href="https://x.com/notshivenn">Shiven</a></div>
        <div className="font-poppins text-gray-600"><a href="https://x.com/notshivenn">@notshiven</a></div>
        </button>
    </div>
  );
};

export default Sidebar;
