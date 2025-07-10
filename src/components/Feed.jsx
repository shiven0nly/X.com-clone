import React, { useState } from 'react'



const Feed = () => {

  const [countLike, setCountLike] = useState(45);
const [liked, setLiked] = useState(false);

const handleLike = () => {
  setLiked(prev => !prev);
  setCountLike(prev => (liked ? 45 : 46));
};


  return (
    <>
    <div>
    <div className="posts">
      <div className="card1 flex justify-start items-center relative">
        <img
          className="absolute top-[28vh] left-[0.5vw] h-11 rounded-full"
          src="https://pbs.twimg.com/profile_images/1655280202824417287/XGiBiQze_bigger.jpg"
          alt="Profile"
        />
        <span className="absolute text-white top-[28vh] left-[4vw] hover:underline cursor-pointer font-bold">
          ShitpostGateway
        </span>
        <span className="absolute text-white top-[28vh] left-[13vw]">
          @ShitpostGate · 19h
        </span>
        <img
          className="absolute h-[60vh] top-[33vh] left-[3vw] rounded-[30px]"
          src="https://pbs.twimg.com/media/GvXJ46IW0AAnJ_o?format=jpg&name=900x900"
          alt="Post"
        />
      </div>

      <div className="icons absolute top-[95vh] left-[0vw]">
        <ul className="flex gap-[5rem] mx-20">

          <li aria-label="comment" className='flex justify-center items-center gap-1 hover:text-[#0800ff54] rounded-[50%] p-2"'>
            <span className="material material-symbols-outlined"><span className='text-[#ffffff60] cursor-pointer hover:bg-[#0800ff54] rounded-[50%] p-1 '>chat_bubble</span></span> <span className='text-[15px] text-[#ffffff60]'>10</span>
          </li>

          <li className='flex justify-center items-center gap-1 hover:text-[#00ff9954] rounded-[50%] p-2"'>
            <span className="material material-symbols-outlined"><span className='text-[#ffffff60] cursor-pointer hover:bg-[#00ff9954] rounded-[50%] p-1'>autorenew</span></span><span className='text-[15px] text-[#ffffff60]'>2</span>
          </li>

          <li className='flex justify-center items-center gap-1 rounded-[50%] p-2'>
  <button
    className="flex justify-center items-center"
    onClick={handleLike}
    aria-label="like"
  >
    <span
      className={`material material-symbols-outlined cursor-pointer rounded-[50%] p-1 transition-colors duration-200 ${
        liked ? 'text-red-500' : 'text-[#ffffff60] hover:text-[#ff000054] hover:bg-[#ff000035]'
      }`}
    >
      favorite
    </span>
    <span
      className={`text-[15px] transition-colors duration-200 ${
        liked ? 'text-red-500' : 'text-[#ffffff60]'
      }`}
    >
      {countLike}
    </span>
  </button>
</li>


          <li className='flex justify-center items-center gap-1'>
            <span className="material material-symbols-outlined"><span className='text-[#ffffff60] cursor-pointer'>analytics</span></span><span className='text-[15px] text-[#ffffff60]'>3k</span>
          </li>

        </ul>
      </div>
    </div>
</div>
</>
  )
}

export default Feed
