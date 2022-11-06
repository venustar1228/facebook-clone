import React from 'react'
import user from "../assets/jack.jpg";
import dots from "../assets/dots.png";
import car from "../assets/c-class.jpg";
import heart from "../assets/hearth.png";
import like from "../assets/like.png";
import { BiLike, BiSmile } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import share from "../assets/share.png";
import { RiArrowDownSLine } from "react-icons/ri";
import { AiOutlineCamera, AiOutlineGif } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import Image from "next/image";
import guy from "../assets/guy7.jpg"
import Moment from "react-moment";

function Post() {
  return (
    <div className='bg-white rounded-[1rem] px-4 py-4'>
      {/* Header */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <div className='w-12 h-12'>
            <Image src={user} className='rounded-full'/>
          </div>
          <div className='ml-3'>
            <p className='font-bold'> Jack Cannon </p>
            <div className='flex'>
              <p className='text-xs'> 3 hours ago &#8226;</p> 
              <BiWorld className='ml-1 shrink-0' />
            </div>
          </div>
        </div>
      <div>
        <Image src={dots} className='w-10 h-10'/>
       </div>
      </div> 
      <div className='mt-3 mb-2'>
        <p>My brand new car</p>
      </div>
      <div className='-mx-3'>
        <Image src={car}/>
      </div>
      {/* Number of Likes */}
      <div>
        <div className='flex justify-between text-[#8e8d8d] mt-1 items-center'>
          <div className='flex mt-2 items-center '>
          <div className='w-[1.1rem] h-[1.1rem]'>
            <Image src={like} />
          </div>
          <div className='w-5 h-5 ml-1'>
            <Image src={heart}/>
          </div>
            <p className='ml-1'> Emily Doe and another 32,155</p>
          </div>
          <p>372 comments</p>
        </div>  
      </div>
      <div className='border-b my-2' />
      <div className='flex justify-between mx-6'>
        <div className='flex items-center'>
          <BiLike className='w-5 h-5'/>
          <p className='ml-2 text-[18px]'>Like</p>
        </div>
        <div className='flex items-center'>
          <FaRegCommentAlt className='w-5 h-5'/>
          <p className='ml-2 text-[18px]'>Comment</p>
        </div>
        <div className='flex items-center'>
          <Image src={share} className='w-5 h-5'/>
          <p className='ml-2 text-[18px]'>Share</p>
        </div>
      </div>
      <div className='border-b my-2' />
      {/* comment section */}
      <div className=''>
        <div className='flex justify-between text-[#8e8d8d]'>
          <p>See 371 previous comments</p>
          <div className='flex items-center'>
            <p>Most Relevant </p>
            <RiArrowDownSLine className='ml-2'/>
          </div>
        </div>
        <div className='max-h-40 overflow-y-scroll'>
          <div>
            <div className='flex items-center mt-3'>
              <div className='w-10 h-10'>
                <Image src={user} className='rounded-full'/>
              </div>
              <p className='ml-2 font-bold'>Jack Cannon</p>
              <p className='ml-2'>I love the color</p>
            </div>
            <div className='ml-[3rem] flex -mt-1.5'>
              <p className='mr-3'>Like</p>
              <p className=''>Reply</p>
            </div>
          </div>
          <div>
            <div className='flex items-center mt-3'>
              <div className='w-10 h-10'>
                <Image src={guy} className='rounded-full'/>
              </div>
              <p className='ml-2 font-bold'>Robert Carden</p>
              <p className='ml-2'>I lilke cleaning the HAVAL</p>
            </div>
            <div className='ml-[3rem] flex -mt-1.5'>
              <p className='mr-3'>Like</p>
              <p className=''>Reply</p>
            </div>
          </div>
          <div>
            <div className='flex items-center mt-3'>
              <div className='w-10 h-10'>
                <Image src={guy} className='rounded-full'/>
              </div>
              <p className='ml-2 font-bold'>Robert Carden</p>
              <p className='ml-2'>I lilke cleaning the HAVAL</p>
            </div>
            <div className='ml-[3rem] flex -mt-1.5'>
              <p className='mr-3'>Like</p>
              <p className=''>Reply</p>
            </div>
          </div>
          <div>
            <div className='flex items-center mt-3'>
              <div className='w-10 h-10'>
                <Image src={user} className='rounded-full'/>
              </div>
              <p className='ml-2 font-bold'>Jack Cannon</p>
              <p className='ml-2'>I love the color</p>
            </div>
            <div className='ml-[3rem] flex -mt-1.5'>
              <p className='mr-3'>Like</p>
              <p className=''>Reply</p>
            </div>
          </div>
          <div>
            <div className='flex items-center mt-3'>
              <div className='w-10 h-10'>
                <Image src={user} className='rounded-full'/>
              </div>
              <p className='ml-2 font-bold'>Jack Cannon</p>
              <p className='ml-2'>I love the color</p>
            </div>
            <div className='ml-[3rem] flex -mt-1.5'>
              <p className='mr-3'>Like</p>
              <p className=''>Reply</p>
            </div>
          </div>
        </div>
      </div>
      {/* input */}
      <div className='flex items-center mt-4'>
        <div className='w-10 h-10'>
          <Image src={user} className='rounded-full shrink-0' />
        </div>
        <div className='flex ml-2 w-full bg-[#f2f3f7] relative items-center rounded-full'>
          <input type="text" placeholder='Write a comment' 
            className='outline-0 p-1 rounded-full pl-3 w-full'/>
          <div className='flex absolute right-[4.5rem] space-x-2 text-[#838d8d]'>
            <BiSmile />
            <AiOutlineCamera />
            <AiOutlineGif />
          </div>
          <div className='flex items-center  mr-4 text-white bg-blue-400 rounded-full'>
            <button className=' px-2 font-bold'>Post</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post