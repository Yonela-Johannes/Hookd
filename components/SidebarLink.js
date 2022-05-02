import React from 'react'

const SidebarLink = ({ Icon, text, active }) => {
    return (
        <div className={`text-black flex items-center justify-center xl:justify-start text-md space-x-2 hoverAnimation ${active && 'font-bold'}`}>
            <Icon className='lg:h-6 sm:h-7' />
            <span className='text-black hidden xl:inline'>{text}</span>
        </div>
    )
}

export default SidebarLink