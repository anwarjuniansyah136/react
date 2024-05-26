import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'

const Tagged = () => {
  return (
    <div className='p-2'>
        <div className='post w-60 h-60'>
            <img className='cursor-pointer' src="https://4.bp.blogspot.com/-UOSsZO9CyPA/Udic_EOPdsI/AAAAAAAAAxs/A6Up0QH1HqA/s1600/Mewarnai+Gambar+Anak+Muslim.jpg" alt="" />
            <div className='overlay'>
                <div className='overlay-text flex justify-between'>
                    <div className='flex'>
                        <AiFillHeart className='mr-2 mt-1'></AiFillHeart> <span>10</span>
                    </div>
                    <div className='flex'>
                        <FaComment className='mr-2 mt-1'></FaComment>
                        <span>30</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tagged