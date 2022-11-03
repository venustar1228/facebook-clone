import React from 'react'
import user from "../assets/jack.jpg";
import { MdHome, MdGroups } from "react-icons/md";
import { BsCart3, BsPeopleFill, BsCalendar2Fill } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";
import { AiOutlineDesktop, AiFillClockCircle } from "react-icons/ai";
import Image from 'next/image';


function LeftSideBar() {
  return (
    <div className='w-[10rem] hidden sm:block'>
        <div className='flex flex-col pl-5 pt-5'>
            <div className='flex items-center'>
                <MdHome className='w-9 h-9'/>
                <p className='ml-2 font-bold'>Home</p>
            </div>
            <div className='flex items-center mt-4'>
                <div className='w-10 h-10'>
                    <Image src={user} className='rounded-full'/>
                </div>
                <p className='ml-2 font-bold'>Log In</p>
            </div>
            <div className='border-b my-4' />
            <div className='space-y-5'>
                <div className='flex items-center'>
                    <AiOutlineDesktop className='w-8 h-8'/>
                    <p className='ml-2 font-bold'>Watch</p>
                </div>
                <div className='flex items-center'>
                    <BsPeopleFill className='w-8 h-8'/>
                    <p className='ml-2 font-bold'>Friends</p>
                </div>
                <div className='flex items-center'>
                    <MdGroups className='w-8 h-8'/>
                    <p className='ml-2 font-bold'>Groups</p>
                </div>
                <div className='flex items-center'>
                    <BsCart3 className='w-8 h-8'/>
                    <p className='ml-2 font-bold'>Marketplace</p>
                </div>
                <div className='flex items-center'>
                    <BsCalendar2Fill className='w-8 h-8'/>
                    <p className='ml-2 font-bold'>Events</p>
                </div>
                <div className='flex items-center'>
                    <AiFillClockCircle className='w-8 h-8'/>
                    <p className='ml-2 font-bold'>Memories</p>
                </div>
                <div className='flex items-center'>
                    <RiArrowDownSLine className='w-8 h-8'/>
                    <p className='ml-2'>See more</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LeftSideBar