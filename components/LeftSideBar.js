import React from 'react'
import user from "../assets/jack.jpg";
import { MdHome, MdGroups } from "react-icons/md";
import { BsCart3, BsPeopleFill, BsCalendar2Fill } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";
import { AiOutlineDesktop, AiFillClockCircle } from "react-icons/ai";
import Image from 'next/image';


function LeftSideBar() {
  return (
    <div className='w-[5rem]'>
        <div className='flex flex-col space-y-6 pl-5 pt-5'>
            <MdHome className='w-8 h-8'/>
            <div>
                <Image src={user} className='rounded-full w-10 h-10'/>
            </div>
            <div className='border-b' />
            <AiOutlineDesktop className='w-8 h-8'/>
            <BsPeopleFill className='w-8 h-8'/>
            <MdGroups className='w-8 h-8'/>
            <BsCart3 className='w-7 h-7'/>
            <BsCalendar2Fill className='w-8 h-8'/>
            <AiFillClockCircle className='w-8 h-8'/>
            <RiArrowDownSLine className='w-8 h-8'/>
        </div>
    </div>
  )
}

export default LeftSideBar