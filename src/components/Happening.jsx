import React from 'react'

const Happening = () => {
  return (
    
    <div className="happening border border-[#ffffff3b] rounded-[15px] font-[poppins] flex flex-col gap-5 justify-center w-[22vw] fixed right-42 top-60 p-4">
        <div className="header text-xl font-[700]">What's Happening</div>
            <div className="card1">
                <div className="genre text-[12px] text-[#ffffff6f]">News.Trending</div>
                <div className="tag font-[600]">Dan Bongino</div>
                <div className="posts text-[12px] text-[#ffffff6f]">52.8k posts</div>
            </div>

            <div className="card2">
                <div className="genre text-[12px] text-[#ffffff6f]">Trending in India</div>
                <div className="tag font-[600]">#plancecrash</div>
                <div className="posts text-[12px] text-[#ffffff6f]">4,311 posts</div>
            </div>

            <div className="card3">
                <div className="genre text-[12px] text-[#ffffff6f]">Business & finance.Trending</div>
                <div className="tag font-[600]">Viceroy Reseach
                </div>
            </div>

            <div className="card4">
                <div className="genre text-[12px] text-[#ffffff6f]">Politics.Trending</div>
                <div className="tag font-[600]">#TejashwiYadav</div>
                <div className="posts text-[12px] text-[#ffffff6f]">9,729 posts</div>
            </div>

            <div className="showmore text-[15px] text-blue-400 
            cursor-pointer hover:text-blue-500">Show More</div>
       
    </div>
  )
}

export default Happening
