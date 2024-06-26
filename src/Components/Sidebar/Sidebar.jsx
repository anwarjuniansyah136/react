import React, { useState } from 'react'
import {IoReorderThreeOutline} from 'react-icons/io5'
import { mainu } from './SidebarConfig'
import { useNavigate } from 'react-router-dom';
import CreatePostModal from '../Posts/CreatePostModal';
import { useDisclosure } from '@chakra-ui/react';
import SearchComponents from '../SearchComponents/SearchComponents';

const Sidebar = () => {
    const [activeTab,setActiveTab] = useState("");
    const navigate = useNavigate();
    const {isOpen,onOpen,onClose} = useDisclosure()
    const [isSearchVisible,setIsSearchVisible] = useState(false)

    const handleTabClick = (title) => {
        setActiveTab(title);
        if(title === "Profile"){
            navigate("/username")
        }else if(title === "Home"){
            navigate("/")
        }else if(title === "Create"){
            onOpen();
        }
        if(title === "Search"){
            setIsSearchVisible(true)
        }else{
            setIsSearchVisible(false)
        }
        if(title === "Message"){
            navigate("/message")
        }
        if(title === "Notification"){
            navigate("/notification")
        }
        if(title === "Reels"){
            navigate("/reels")
        }
        if(title === "Explore"){
            navigate("/explore");
        }
    }
  return (
    <div className='sticky top-0 h-[100vh] flex'>
        <div className={`flex flex-col justify-between h-full ${activeTab === "Search" || activeTab === "Message" || activeTab === "Notification" ?"px-0 mr-0":"px-2 mr-16"} `}>
            {<div>
                {activeTab !== "Search" && activeTab !== "Message"  && activeTab !== "Notification" && <div className='pt-10'>
                    <img className='w-40' src="https://i.imgur.com/zqpwkLQ.png" alt="" />
                </div>}
                <div className='mt-10'>
                {
                    mainu.map((item) => 
                    <div onClick={()=>handleTabClick(item.title)} className='flex items-center mb-5 cursor-pointer text-lg'>
                        {activeTab === item.title? item.activeIcon:item.icon}
                        {activeTab !== "Search" && activeTab !== "Message" && activeTab !== "Notification" && <p className={`${activeTab===item.title?"font-bold":"font-semibold"}`}>{item.title}</p>}
                    </div>
                )}
                </div>
            </div>}
                    <div className='flex items-center cursor-pointer pb-5'>
                        <IoReorderThreeOutline className='text-2xl'/>
                        {activeTab !== "Search" && activeTab !== "Message" &&  activeTab !== "Notification" && <p className='ml-7'>More</p>}
                    </div>
        </div>
        
      <CreatePostModal onClose={onClose} isOpen={isOpen} />
      {isSearchVisible && <SearchComponents/>}
    </div>
  )
}

export default Sidebar