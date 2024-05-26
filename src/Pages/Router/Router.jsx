import React from "react"
import Sidebar from '../../Components/Sidebar/Sidebar'
import {Route,Routes, useLocation} from 'react-router-dom'
import HomePage from "../HomePages/HomePage"
import Profile from "../Profile/Profile"
import Story from "../Story/Story"
import Message from "../Message/Message"
import Notification from "../../Components/Notification/Notification"
import Reels from "../Reels/Reels"
import Explore from "../Explore/Explore"

const Router = () => {
    const location = useLocation()
    const getWidthDiv = ()=>{
        console.log(location.pathname);
        if(location.pathname.startsWith("/message") || location.pathname.startsWith("/notification")){
            return "w-[7%]"
        }else{
            return "w-[20%]"
        }
    }
    return(
        <div>
            <div className="flex">
                <div className={`border border-l-slate-500 pl-10 ${getWidthDiv}`}>
                    <Sidebar/>
                </div>
                <div className="w-full">
                    <Routes>
                        <Route path="/" element={<HomePage />}></Route>
                        <Route path="/username" element={<Profile />}></Route>
                        <Route path="/story" element={<Story/>}></Route>
                        <Route path="/message" element={<Message/>}></Route>
                        <Route path="/notification" element={<Notification/>}></Route>
                        <Route path="/reels" element={<Reels></Reels>}></Route>
                        <Route path="/explore" element={[1,1,1,1,1].map(()=><Explore/>)}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
}
export default Router