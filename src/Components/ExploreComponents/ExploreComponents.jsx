import React from 'react'
import ReactPlayer from 'react-player'

const ExploreComponents = () => {
  return (
    <div className='w-full h-full flex'>
        <div className='w-[65%]'>
            <div className='w-full'>
                <div className='w-full flex p-2 justify-between' >
                    <img className='w-[49%] cursor-pointer' src="https://2.bp.blogspot.com/-5dh-Z6OLRMs/UXiTPMb_AuI/AAAAAAAAAEo/PNOKoGsbkNw/s1600/Gambar-Kupu-Kupu.jpg" alt="" />
                    <img className='w-[49%] cursor-pointer'  src="https://2.bp.blogspot.com/-5dh-Z6OLRMs/UXiTPMb_AuI/AAAAAAAAAEo/PNOKoGsbkNw/s1600/Gambar-Kupu-Kupu.jpg" alt="" />
                </div>
                <div className='w-full flex p-2 justify-between' >
                    <img className='w-[49%] cursor-pointer' src="https://2.bp.blogspot.com/-5dh-Z6OLRMs/UXiTPMb_AuI/AAAAAAAAAEo/PNOKoGsbkNw/s1600/Gambar-Kupu-Kupu.jpg" alt="" />
                    <img className='w-[49%] cursor-pointer'  src="https://2.bp.blogspot.com/-5dh-Z6OLRMs/UXiTPMb_AuI/AAAAAAAAAEo/PNOKoGsbkNw/s1600/Gambar-Kupu-Kupu.jpg" alt="" />
                </div>
            </div>
        </div>
        <div className='w-[35%]'>
        <ReactPlayer 
                url= "https://www.youtube.com/watch?v=m53SO9JNJC0&list=RDm53SO9JNJC0&start_radio=1" 
                width='100%' 
                height='100%' 
                className='pt-2 pr-2 pb-2'
                controls={true}
            />
        </div>
    </div>
  )
}

export default ExploreComponents