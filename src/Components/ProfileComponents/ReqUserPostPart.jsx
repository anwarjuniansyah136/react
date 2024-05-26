import React, { useState } from 'react'
import { AiOutlineTable, AiOutlineUser } from 'react-icons/ai'
import { BiBookmark } from 'react-icons/bi'
import { RiVideoAddLine } from 'react-icons/ri'
import ReqUserPostCard from './ReqUserPostCard'
import Reels from './Reels'
import Saved from './Saved'
import Tagged from './Tagged'

const ReqUserPostPart = () => {
    const [activeTab,setActiveTab] = useState('Post')
    
    const tabs = [
        {
            tab : "Post",
            icon : <AiOutlineTable></AiOutlineTable>,
            activeTab : ""
        },
        {
            tab : "Reels",
            icon : <RiVideoAddLine></RiVideoAddLine>,
        },
        {
            tab : "Saved",
            icon : <BiBookmark />
        },
        {
            tab : "Tagged",
            icon : <AiOutlineUser></AiOutlineUser>
        }
    ]
  return (
    <div>
        <div className='flex space-x-14 border-t relative'>
            {tabs.map((item) => 
            <div onClick={()=>setActiveTab(item.tab)} className={`${activeTab===item.tab?"border-t":"opacity-60"} flex items-center cursor-pointer py-2 text-sm`}>
                <p>{item.icon}</p>
                <p className='ml-1'>{item.tab}</p>
            </div>
            )}
        </div>
        <div>
            {activeTab === "Post" && <div className='flex flex-wrap'>
                {[1,1,1,1,1,1].map((item)=><ReqUserPostCard />)}
            </div>}
            {activeTab === "Reels" && <div className='flex flex-wrap'>
                {[1,1,1,1,1,1].map((item)=><Reels/>)}
            </div>}
            {activeTab === "Saved" && <div className='flex flex-wrap'>
                {[1,1,1,1,1,1].map((item)=><Saved/>)}
            </div>}
            {activeTab === "Tagged" && <div className='flex flex-wrap'>
                {[1,1,1,1,1,1].map((iten)=><Tagged/>)}
            </div>}
        </div>
    </div>
  )
}

export default ReqUserPostPart