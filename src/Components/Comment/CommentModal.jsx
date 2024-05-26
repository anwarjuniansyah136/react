import { Modal, ModalContent, ModalOverlay, ModalBody } from '@chakra-ui/react'
import React from 'react'
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from 'react-icons/bs'
import CommentCard from './CommentCard'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { RiSendPlaneLine } from 'react-icons/ri'
import './CommentModal.css'

const CommentModal = ({onClose,isOpen,isSaved,isPostLiked,handlePostLike,handleSavePost}) => {
  return (
    <div>
        <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay/>
            <ModalContent>
                <ModalBody>
                  <div className='flex h-[85vh] relative'>
                    <div className='w-[45%] flex flex-col justify-center'>
                      <img className='max-h-full w-full' src="https://2.bp.blogspot.com/-5dh-Z6OLRMs/UXiTPMb_AuI/AAAAAAAAAEo/PNOKoGsbkNw/s1600/Gambar-Kupu-Kupu.jpg" alt="" />
                    </div>
                    <div className='w-[55%] pl-10'>
                      <div className='flex justify-between items-center py-5'>
                        <div className='flex items-center'>
                          <div>
                            <img className='w-9 h-9 rounded-full' src="https://2.bp.blogspot.com/-5dh-Z6OLRMs/UXiTPMb_AuI/AAAAAAAAAEo/PNOKoGsbkNw/s1600/Gambar-Kupu-Kupu.jpg" alt="" />
                          </div>
                          <div className='ml-2'>
                            <p>Username</p>
                          </div>
                        </div>
                        <BsThreeDots/>
                      </div>
                      <hr />
                      <div className='comment'>
                        {[1,1,1,1].map(()=><CommentCard/>)}
                      </div>
                      <div className='absolute bottom-0 w-[50%]'>
                          <div className='flex justify-between items-center w-full py-4'>
                              <div className='flex items-center space-x-2'>
                                  {isPostLiked?<AiFillHeart className='text-2xl hover:opacity-50 cursor-pointer text-red-600' onClick={handlePostLike}/>:<AiOutlineHeart className='text-2xl hover:opacity-50 cursor-pointer' onClick={handlePostLike}/>}
                                  <FaRegComment className='text-xl hover:opacity-50 cursor-pointer'/>
                                  <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer'/>
                              </div>
                              <div className='cursor-pointer'>
                                  {isSaved?<BsBookmarkFill onClick={handleSavePost} className='text-xl hover:opacity-50 cursor-pointer'/>:<BsBookmark onClick={handleSavePost} className='text-xl hover:opacity-50 cursor-pointer'/>}
                              </div>
                          </div>
                          <div className='w-full py-2'>
                              <p>10 likes</p>
                              <p className='opacity-50 text-sm'>1 day ago</p>
                          </div>
                            <div className='flex w-full items-center'>
                                <BsEmojiSmile/>
                                <input className='commentInputs' type="text" placeholder='Add a comment...'/>
                            </div>
                      </div>
                    </div>
                  </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    </div>
  )
}

export default CommentModal