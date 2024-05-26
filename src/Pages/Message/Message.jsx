import React from 'react'
import MessageComponent from '../../Components/MessageComponents/MessageComponent'
import MessageUser from '../../Components/MessageComponents/MessageUser'

const Message = () => {
  return (
    <div className='w-[100%] flex'>
        <div className='flex w-[33%] border flex-col'>
            <div className='sticky top-0 bg-white'>
                <div className='flex justify-between p-7'>
                    <p>username</p>
                    <p>aaa</p>
                </div>
                <div className='flex justify-between pl-7 pr-7 pb-2'>
                    <p>Message</p>
                    <p>Request</p>
                </div>
            </div>
            <div className='pl-7'>
                {[1,1,1,1,1,1,1,1,1,1].map((item)=><MessageComponent/>)}
            </div>
        </div>
        <div className='w-[67%] h-[100vh]'>
            <MessageUser/>
        </div>
    </div>
  )
}

export default Message