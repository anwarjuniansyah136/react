import React from 'react'
import SuggetionCard from './SuggetionCard'

const HomeRight = () => {
  return (
    <div>
      <div>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <div>
                <img className='h-12 w-12 rounded-full' src="https://2.bp.blogspot.com/-5dh-Z6OLRMs/UXiTPMb_AuI/AAAAAAAAAEo/PNOKoGsbkNw/s1600/Gambar-Kupu-Kupu.jpg" alt="" />
            </div>
            <div className='ml-3'>
              <p>Fullname</p>
              <p className='opacity-70'>username</p>
            </div>
          </div>
          <div>
            <p className='text-blue-700 font-semibold'>swith</p>
          </div>
        </div>
          <div className='space-y-5 mt-10'>
            {[1,1,1,1,1].map((item) => <SuggetionCard/>)}
          </div>
      </div>
    </div>
  )
}

export default HomeRight