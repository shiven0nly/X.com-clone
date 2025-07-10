import React from 'react'

const searchbar = () => {
  return (
    <div className="search flex justify-start items-center gap-1.5 fixed right-[11vw] top-1.5 border-1 border-[#eeeeff49] w-[22vw] p-2 rounded-[30px]">
      <span className='material-symbols-outlined'><span className='text-[#ffffff89]'>search</span></span><span className='text-[#fffafae0] font-[poppins] border-none outline-none bg-transparent'><input type="text" placeholder='Search' className='border-none outline-none bg-transparent'/></span>
    </div>
  )
}

export default searchbar
