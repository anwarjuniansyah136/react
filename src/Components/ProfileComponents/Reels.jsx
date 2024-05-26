import React from 'react';
import ReactPlayer from 'react-player';
// import { AiFillHeart } from 'react-icons/ai';
// import { FaComment } from 'react-icons/fa';

const Reels = () => {
  const videoUrl = "https://www.youtube.com/watch?v=m53SO9JNJC0&list=RDm53SO9JNJC0&start_radio=1";

  return (
    <div className='p-2'>
        <div className='post w-60 h-60 relative'>
            <ReactPlayer 
                url={videoUrl} 
                width='100%' 
                height='100%' 
                controls={true}
            />
            {/* <div className='overlay absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>
                <div className='overlay-text flex justify-between w-full p-2'>
                    <div className='flex'>
                        <AiFillHeart className='mr-2 mt-1 text-white' /> <span className='text-white'>10</span>
                    </div>
                    <div className='flex'>
                        <FaComment className='mr-2 mt-1 text-white' />
                        <span className='text-white'>30</span>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
  );
};

export default Reels;
