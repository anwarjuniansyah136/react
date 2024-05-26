import React from 'react'

const MessageUser = () => {
  return (
    <div className='flex justify-between flex-col w-[100%]'>
        <div className='h-[10vh] border m-0 flex justify-between'>
            <div>
                <img src="" alt="" />
                <p>anwar</p>
            </div>
            <div className='flex justify-end'>
                <p>T</p>
                <p>P</p>
                <p>I</p>
            </div>
        </div>
        <div className='h-[70vh] border m-0 flex flex-col'>
            <div className='flex justify-between w-[100%]'>
                <p className=''>aaaa</p>
                <p className='right-0 mt-7 bg-blue-50 p-2 border border-red-50'>bbbbb</p>
            </div>
            <div className='flex justify-between w-[100%]'>
                <p className=''>aaaa</p>
                <p className='right-0 mt-7 bg-blue-50 p-2 border border-red-50'>bbbbb</p>
            </div>
            <div className='flex justify-between w-[100%]'>
                <p className=''>aaaa</p>
                <p className='right-0 mt-7 bg-blue-50 p-2 border border-red-50'>bbbbb</p>
            </div>
        </div>
        <div className='pb-0 h-[20vh] border m-0'>
            <input type="text" placeholder='enter...'/>
        </div>
    </div>
  )
}

export default MessageUser