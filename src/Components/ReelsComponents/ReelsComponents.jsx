import React from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BsBookmarkFill, BsThreeDots } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa'
import { RiSendPlaneLine } from 'react-icons/ri'
import ReactPlayer from 'react-player'

const ReelsComponents = () => {
  return (
    <div className='h-[95vh] flex w-[80vh] justify-between py-5'>
        <div className='flex justify-between w-[100%] h-[100%]'>
            <div className='w-[85%] h-full items-center justify-center flex'>
                <div className='w-full h-full'>
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=m53SO9JNJC0&list=RDm53SO9JNJC0&start_radio=1" 
                        width='100%' 
                        height='100%' 
                        controls={true}
                    />
                </div>
            </div>
            <div className='flex items-end w-[15%]'>
                <div className='flex flex-col items-center h-[70%] justify-between w-full p-2'>
                    <AiOutlineHeart className='cursor-pointer w-9 h-7'/>
                    <FaRegComment className='cursor-pointer w-9 h-6'/>
                    <RiSendPlaneLine className='cursor-pointer w-9 h-7'/>
                    <BsBookmarkFill className='cursor-pointer w-9 h-7'/>
                    <BsThreeDots className='cursor-pointer w-9 h-5'/>
                    <img className='cursor-pointer w-9 h-9' src="https://2.bp.blogspot.com/-5dh-Z6OLRMs/UXiTPMb_AuI/AAAAAAAAAEo/PNOKoGsbkNw/s1600/Gambar-Kupu-Kupu.jpg" alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReelsComponents