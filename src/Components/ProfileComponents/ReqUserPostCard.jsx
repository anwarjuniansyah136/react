import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import "./ReqUserPostCard.css"

const ReqUserPostCard = () => {
  return (
    <div className='p-2'>
        <div className='post w-60 h-60'>
            <img className='cursor-pointer' src="https://tse4.mm.bing.net/th?id=OIP.1Dw-qeOltFvnz6VOu-2-wgHaFN&pid=Api&P=0&h=180" alt="" />
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

export default ReqUserPostCard