import React from 'react'
import therock from "../assets/therock.jpg";
import therock2 from "../assets/therock2.webp";
import therock20 from "../assets/therock20.jpg";
import mike from "../assets/1miketyson.jpg";
import mikeprofile from "../assets/mikeprofile.webp";
import mrbeastbackground from "../assets/mrbeastbackground.webp";
import mrbeast from "../assets/1mrbeast.jpg";
import kobebackground from "../assets/kobebackground.jpg";
import kobe from "../assets/1kobe.webp";
import arnoldbackground from "../assets/arnoldbackground.webp";
import arnold from "../assets/1arnold.jpg";
import Image from "next/image";

function Stories() {
  const storeis = [
        {profile: therock, background: therock20},
        {profile: mikeprofile, background: mike},
        {profile: mrbeast, background: mrbeastbackground},
        {profile: kobe, background: kobebackground},
        {profile: arnold, background: arnoldbackground},
    ];  
  return (
    <div className='w-screen sm:w-full h-44 flex items-center mt-4'>
        <div className='flex space-x-1 p-4 mx-auto max-w-[24rem] justify-between bg-white rounded-[1rem]'>
            {storeis.map((story) => (
                <div className='relative flex bg-red-300 w-[4.5rem] h-32 sm:w-24 sm:h-40 rounded-[1rem]'>
                    <div className='flex'>
                        <Image src={story.background} className='flex object-cover rounded-[1rem]'/>
                        <div className='absolute w-9 h-9 flex top-1 left-1 p-1 bg-blue-500 rounded-full'>
                            <Image src={story.profile} className='rounded-full object-cover'/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Stories