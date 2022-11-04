import React from 'react'
import guy from '../assets/jack.jpg';
import Image from 'next/image';
import camera from "../assets/camera.png";
import photos from "../assets/photos.png";
import smile from "../assets/smile.png"

function CreatePost() {
  return (
    <div className='w-screen sm:w-full'>
        <div className='bg-white flex flex-col p-1 rounded-[1rem] max-w-[25rem] sm:max-w-[33rem] mx-auto my-6'>
            <div className='ml-2 flex items-center'>
                <div className='w-16 h-16 mt-3'>
                    <Image src={guy} className='rounded-full'/>
                </div>
                <div className='flex ml-5 w-full'>
                    <input type="text" placeholder='What is on your mind Joe Doe?'
                        className='outline-0 bg-[#f2f3f7] p-2 rounded-full pl-3'/>
                </div>
                <div className='flex bg-blue-600 rounded-full px-3 h-10'>
                    <button className='font-bold text-white'>Post</button>
                </div>
            </div>
            <div className='border-b mt-5'>
            </div>
            <div className='flex justify-between mx-9 mb-1'>
                <div className='mt-3 flex items-center'>
                    <Image src={camera} className='w-7 h-7' />
                    <p className='ml-2 text-[16px]'>Live Video</p>
                </div>
                <div className='mt-3 ml-7 flex items-center'>
                    <Image src={photos} className='w-7 h-7' />
                    <p className='ml-2 text-[16px]'>Photo/Video</p>
                </div>
                <div className='mt-3 ml-7 flex items-center'>
                    <Image src={smile} className='w-7 h-7' />
                    <p className='ml-2 text-[16px]'>Felling/Activity</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreatePost