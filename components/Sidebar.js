import React from 'react'
import SidebarLink from './SidebarLink'
import { MdOutlineDynamicFeed } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { RiChatSmile2Line } from "react-icons/ri";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { RiMovieLine } from "react-icons/ri";
import { RiFolderMusicLine } from "react-icons/ri";
import { BiMessage } from "react-icons/bi";
import { AiOutlineNotification } from "react-icons/ai";
import { MdPeopleOutline } from "react-icons/md";
import { BiHash } from "react-icons/bi";
import { GiFishingHook } from "react-icons/gi";

function Sidebar() {
    return <div className='hidden sm:flex flex-col items-center xl:items-start xl:w-[34px] mt-20 p-2 fixed h-full'>
        <div className='space-y-1 xl:ml-18'>
            <SidebarLink className='border-[1px] border-gray-700 rounded-2xl p-1 ' text={'Hooks'} Icon={GiFishingHook} active />
            <SidebarLink text={'User Town'} Icon={GoLocation} />
            <SidebarLink text='Chat Rooms' Icon={RiChatSmile2Line} />
            <SidebarLink text='Students' Icon={HiOutlineAcademicCap} />
            <SidebarLink text='Videos' Icon={RiMovieLine} />
            <SidebarLink text='Music' Icon={RiFolderMusicLine} />
            <SidebarLink text='Messages' Icon={BiMessage} />
            <SidebarLink text='Notifications' Icon={AiOutlineNotification} />
            <SidebarLink text='People' Icon={MdPeopleOutline} />
            <SidebarLink text='Channels' Icon={BiHash} />
        </div>
    </div>
}

export default Sidebar