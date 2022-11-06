import React from 'react'
import CreatePost from './CreatePost'
import LeftSideBar from './LeftSideBar'
import Posts from './Posts'
import Stories from './Stories'


function Feed() {
  return (
    <div className='flex bg-[#f2f3f7]'>
        {/* LeftSideBar */}
        <LeftSideBar />
        <div className='mx-auto'>
          {/* Stories */}
          <Stories />
          {/* CreatePost */}
          <CreatePost />
          {/* Posts */}
          <Posts />
        </div>
        {/* RightSideBar */}
    </div>
  )
}

export default Feed