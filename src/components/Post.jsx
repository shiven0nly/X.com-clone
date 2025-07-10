import React from 'react'
import { useState } from 'react'



const Post = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="post flex absolute w-[33.7vw] border-b border-b-[#ffffff4c] h-35 top-13">
     <span className='whatishapp flex justify-center items-start p-5 gap-4'>

<div className='flex items-center gap-4 box-border'>
      <span><img className='rounded-[50%] h-11' src="https://pbs.twimg.com/profile_images/1935755925161205760/e5aA4QLU_bigger.jpg" alt="myimg"/></span>
      <span><input type="text" className='text-lg font-[poppins] outline-none bg-transparent' placeholder='What is Happening...'
      value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
      /></span>
</div>
     </span>

<div className="icons absolute top-23 left-19 border-t border-[#ffffff46] py-5">
  <ul className='flex gap-4 w-[25vw] h-fit cursor-pointer'>
    <li>
    <span className="material-symbols-outlined transition-transform duration-200 hover:scale-105"><span className="text-blue-400">image</span></span>
        </li>
    <li>
    <span className="material-symbols-outlined transition-transform duration-200 hover:scale-105"><span className="text-blue-400 ">gif_box</span></span>
        </li>
    <li>
    <span className="material-symbols-outlined "><span className="text-blue-400 transition-transform duration-200 hover:scale-105">g_mobiledata_badge</span></span>
        </li>
    <li>
    <span className="material-symbols-outlined transition-transform duration-200 hover:scale-105"><span className="text-blue-400 ">ballot</span></span>
        </li>
    <li>
    <span className="material-symbols-outlined transition-transform duration-200 hover:scale-105"><span className="text-blue-400 ">add_reaction</span></span>
        </li>
    <li>
    <span className="material-symbols-outlined transition-transform duration-200 hover:scale-105"><span className="text-blue-400 ">calendar_clock</span></span>
        </li>
    <li>
    <span className="material-symbols-outlined transition-transform duration-200 hover:scale-105"><span className="text-blue-400 ">add_location</span></span>
        </li>
  </ul>

  <ul>
    <li><button className={`h-9 w-20 rounded-[30px] absolute top-1 right-0 text-black text-lg font-[600]
      transition-all duration-200
       ${
        inputValue.trim().length > 0
      ? "bg-white cursor-pointer hover:bg-blue-300"
      : "bg-gray-400 cursor-not-allowed"
      }`}>Post</button>
        </li>
  </ul>
</div>

    </div>
  )

}

export default Post
