import React from 'react'
import facebook from "../assets/facebook1.png"
import Image from 'next/image'

import { MdHome } from "react-icons/md";
import { FiPlayCircle, FiFlag, FiMessageCircle } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { GrGroup, GrAppsRounded } from "react-icons/gr";
import { FaBell } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import user from "../assets/jack.jpg";

const Header = () => {
  return (
    <div className='p-3 flex items-center justify-between'>
        {/* LeftSide */}
        <div className='flex items-center'>
            <div className='w-12 h-12'>
                <Image src={facebook} />
            </div>
            <div className='ml-2'>
              <input type="text" placeholder="Search Facebook" 
                className='outline-0 bg-[#f2f3f7] p-3 rounded-full pl-4'/>
            </div>
        </div>
        {/* Middle */}
        <div className='flex items-center space-x-4 '>
          <MdHome className='w-9 h-9'/>
          <FiFlag className='w-7 h-7'/>
          <FiPlayCircle className='w-7 h-7'/>
          <BsCart3 className='w-7 h-7'/>
          <GrGroup className='w-7 h-7'/>
        </div>
        {/* RightSide */}
        <div className='flex items-center space-x-6'>
          <GrAppsRounded className='w-7 h-7'/>
          <FaBell className='w-7 h-7'/>
          <AiOutlineMessage className='w-7 h-7'/>
          <div className='w-10 h-10'>
            <Image src={user} className='rounded-full' />
          </div>
        </div>
    </div>
  )
}

export default Header