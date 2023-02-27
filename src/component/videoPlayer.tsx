import React from 'react'

function VideoPlayer() {
  return (
    <div className='container  w-[100%]'>
       <video className='my-10 w-[100%] h-[70vh]' controls>
        <source src='/1146033844.mp4'/>
       </video>
        <button className='absolute w-[30%] sm:h-[3rem] sm:w-[8rem] text-xs sm:text-base  bg-red-500 text-white rounded-md p-2 -translate-y-52 sm:-translate-y-60 translate-x-5'>BUY THEME</button>
    </div>

  )
}

export default VideoPlayer