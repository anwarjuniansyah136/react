import React from 'react'
import { useNavigate } from 'react-router-dom'

const StoryCircle = () => {
  const navigate = useNavigate()

  const handleNavigate=()=>{
    navigate("/story")
  }
  return (
    <div onClick={handleNavigate} className='cursor-pointer flex flex-col items-center'>
        <img className='w-16 h-16 rounded-full' src="https://2.bp.blogspot.com/-5dh-Z6OLRMs/UXiTPMb_AuI/AAAAAAAAAEo/PNOKoGsbkNw/s1600/Gambar-Kupu-Kupu.jpg" alt="" />
        <p>Username</p>
    </div>
  )
}

export default StoryCircle