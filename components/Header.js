import React from 'react'
import facebook from "../assets/facebook1.png"
import Image from 'next/image'

const Header = () => {
  return (
    <div className='p-3'>
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

        {/* RightSide */}
    </div>
  )
}

export default Header