import React from 'react'
import LeftSideBar from './LeftSideBar'
import Stories from './Stories'

function Feed() {
  return (
    <div className='flex bg-[#f2f3f7] h-screen'>
        {/* LeftSideBar */}
        <LeftSideBar />
        {/* Stories */}
        <Stories />
        {/* CreatePost */}
        {/* Posts */}
        {/* RightSideBar */}
    </div>
  )
}

export default Feed