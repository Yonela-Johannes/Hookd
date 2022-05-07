import Image from 'next/image';
import React from 'react'
import { RiChatHeartFill } from "react-icons/ri";
import chatImage from '../img/chat.jpg'

function Landing() {
  return (
    <div className='flex justify-start flex-col-reverse sm:flex-row sm:w-screen sm:h-screen md:justify-around sm:items-center sm:rounded content-start pt-[150px] py-5 ml-10 px-2 bg-[#4b4b4b] lg:bg-white overflow-hidden'>
        <div className='flex flex-col items-start'>
            <h1 className='text-white text-[26px] sm:text-black'>Share the world with your friends</h1>
            <h5 className='text-white sm:text-black md:text-[30px]'>Hookd lets you connect with everyone in your area</h5>
            <div>
                <div className='bg-[#278900] px-2 py-1 text-[#ffffff] rounded flex items-center mt-5'>
                    Get Started <RiChatHeartFill className='ml-1' />
                </div>
            </div>
        </div>
        <div>
            <Image
                src={chatImage}
                width='300px'
                height='220px'
                alt=''
            />
        </div>
    </div>
  )
}

export default Landing