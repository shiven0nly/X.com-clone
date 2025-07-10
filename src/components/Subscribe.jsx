import React from 'react'


const Subscribe = () => {
  return (
    <div className="subscribe flex flex-col justify-start items-center font-[poppins]  w-[22vw]  h-40 p-4 border border-[#ffffff43] rounded-2xl fixed right-[11vw] top-[4vw]">

        <div className="heading text-[1.2rem] font-[poppins] font-[700] relative right-11">Subscribe to Premium</div>

        <div className="discription my-2 text-[14px]">
            Subscribe to unlock new features and if eligible, recieve a share of revenue.

            <button className='bg-[#1A8CD8] hover:bg-blue-500 transition-300 px-3 py-2 my-3 rounded-[30px] cursor-pointer'>Subscribe</button>
        </div>
    </div>
  )
}

export default Subscribe
