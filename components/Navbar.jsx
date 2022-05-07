import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '../img/hookd logo.png'
import { BiMessage } from "react-icons/bi";
import HeaderLink from './HeaderLink'
import { AiOutlineNotification } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { HiOutlineAcademicCap } from "react-icons/hi";

function Navbar() {

  const [search, setSearch] = useState()
  return (
    <div className='fixed items-center w-full '>
      <header className='flex justify-around items-center py-3'>
        <div className='relative cursor-pointer'>
          <Image src={logo} width={60} height={50} alt='logo' objectFit='contain' />
        </div>
        <div className='flex items-center sm:divide-x divide-gray-300'>
          <div className='hidden sm:flex space-x-8 pr-4'>
            <HeaderLink name="Avatar" Icon={BiUserCircle} active/>            
            <HeaderLink name="Profile" Icon={AiOutlineUser}/>
            <HeaderLink name='Messages' Icon={BiMessage} />
            <HeaderLink name='Notifications' Icon={AiOutlineNotification} />
            <HeaderLink name='Academy' Icon={HiOutlineAcademicCap} />
            <HeaderLink name="Search" Icon={BiSearchAlt} />
            <input type='text' name='search' />
          </div>  
        </div>
      </header>
    </div>
  )
}

export default Navbar