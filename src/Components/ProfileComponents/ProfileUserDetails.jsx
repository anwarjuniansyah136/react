import React from 'react'
import { TbCircleDashed } from 'react-icons/tb'

const ProfileUserDetails = () => {
  return (
    <div className='py-10 w-full'>
        <div className='flex items-center'>
            <div className='w-[20%]'>
                <img className='w-32 h-32 rounded-full' src="https://2.bp.blogspot.com/-5dh-Z6OLRMs/UXiTPMb_AuI/AAAAAAAAAEo/PNOKoGsbkNw/s1600/Gambar-Kupu-Kupu.jpg" alt="" />
            </div>
            <div className='space-y-5'>
                <div className='flex space-x-10 items-center'>
                    <p>Username</p>
                    <button>Edit Profile</button>
                    <TbCircleDashed></TbCircleDashed>
                </div>
                <div className='flex space-x-10'>
                    <div>
                        <span className='font-semibold mr-2'>10</span>
                        <span>Posts</span>
                    </div>
                    <div>
                        <span className='font-semibold mr-2'>5</span>
                        <span>Followers</span>
                    </div>
                    <div>
                        <span className='font-semibold mr-2'>7</span>
                        <span>Following</span>
                    </div>
                </div>
                <div>
                    <p className='font-semibold'>Full Name</p>
                    <p className='font-thin text-sm'>lorem</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ProfileUserDetails