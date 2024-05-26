import React from 'react'
import ReelsComponents from '../../Components/ReelsComponents/ReelsComponents'

const Reels = () => {
  return (
    <div className='w-full flex flex-col items-center'>
        {[1,1,1,1,1,1].map((item)=><ReelsComponents/>)}
    </div>
  )
}

export default Reels