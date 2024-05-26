import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';
import "./PostCard.css"
import CommentModal from '../Comment/CommentModal';
import { useDisclosure } from '@chakra-ui/react';

const PostsCard = () => {
    const [showDropDown,setShowDropDown] = useState(false);
    const [isPostLiked,setIsPostLiked] = useState(false);
    const [isSaved,setIsSaved] = useState(false)
    const {isOpen,onOpen,onClose} = useDisclosure()

    const handleSavePost = ()=>{
        setIsSaved(!isSaved);
    }
    const handlePostLike = ()=>{
        setIsPostLiked(!isPostLiked);
    }
    const handleClick = () => {
        setShowDropDown(!showDropDown);
    }
    const handleOpenCommentModal = ()=>{
        onOpen()
    }
  return (
    <div>
        <div className='border rounded-md w-full'>
            <div className='flex justify-between items-center w-full py-4 px-5'>
                <div className='flex items-center'>
                    <img className='h-12 w-12 rounded-full' src="https://2.bp.blogspot.com/-5dh-Z6OLRMs/UXiTPMb_AuI/AAAAAAAAAEo/PNOKoGsbkNw/s1600/Gambar-Kupu-Kupu.jpg" alt="" />
                    <div className='pl-2'>
                        <p className='font-semibold text-sm'>Username</p>
                        <p className='font-thin text-sm'>Locatioin</p>
                    </div>
                </div>
                <div className='dropdown'>
                    <BsThreeDots className='dots cursor-pointer' onClick={handleClick}/>
                    <div className='dropdown-content'>
                        {showDropDown && <p className='bg-black text-white py-1 px-4 rounded-md cursor-pointer'>Delete</p>}
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <img className='w-full' src="https://2.bp.blogspot.com/-5dh-Z6OLRMs/UXiTPMb_AuI/AAAAAAAAAEo/PNOKoGsbkNw/s1600/Gambar-Kupu-Kupu.jpg" alt="" />
            </div>
            <div className='flex justify-between items-center w-full px-5 py-4'>
                <div className='flex items-center space-x-2'>
                    {isPostLiked?<AiFillHeart className='text-2xl hover:opacity-50 cursor-pointer text-red-600' onClick={handlePostLike}/>:<AiOutlineHeart className='text-2xl hover:opacity-50 cursor-pointer' onClick={handlePostLike}/>}
                    <FaRegComment onClick={handleOpenCommentModal} className='text-xl hover:opacity-50 cursor-pointer'/>
                    <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer'/>
                </div>
                <div className='cursor-pointer'>
                    {isSaved?<BsBookmarkFill onClick={handleSavePost} className='text-xl hover:opacity-50 cursor-pointer'/>:<BsBookmark onClick={handleSavePost} className='text-xl hover:opacity-50 cursor-pointer'/>}
                </div>
            </div>
            <div className='w-full py-2 px-5'>
                <p>10 likes</p>
                <p className='opacity-50 py-2 cursor-pointer'>view all 10 comments</p>
            </div>
            <div className='border border-t w-full'>
                <div className='flex w-full items-center px-5'>
                    <BsEmojiSmile/>
                    <input className='w-full commentInput' type="text" placeholder='Add a comment...'/>
                </div>
            </div>
        </div>
        <CommentModal 
        onClose={onClose} 
        isOpen={isOpen} 
        isSaved={isSaved}
        isPostLiked={isPostLiked} 
        handlePostLike={handlePostLike} 
        handleSavePost={handleSavePost} 
        />
    </div>
  )
}

export default PostsCard