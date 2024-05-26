import React from 'react'

const MessageComponent = () => {
  return (
    <div className='flex w-[100%]'>
        <div className='flex items-center justify-between py-2'>
            <div className='flex items-center'>
                <div>
                    <img className='w-14 h-14 rounded-full' src="https://2.bp.blogspot.com/-5dh-Z6OLRMs/UXiTPMb_AuI/AAAAAAAAAEo/PNOKoGsbkNw/s1600/Gambar-Kupu-Kupu.jpg" alt="" />
                </div>
                <div className='ml-3'>
                    <p>
                        <span className='font-semibold'>username</span>
                        <span className='ml-2'>nice posts</span>
                    </p>
                    <div className='flex items-center space-x-3 text-xs pt-2'>
                        <span>1 min ago</span>
                        <span>23 likes</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MessageComponent