import Image from 'next/image'
import logo from '../img/hookd logo.png'
import HeaderLink from './HeaderLink'
import { AiOutlineUser } from "react-icons/ai";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";
// import { MdPeopleOutline } from "react-icons/md";
// import { MdPeopleOutline } from "react-icons/md";
function Navbar() {
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
            <HeaderLink name="Scout" Icon={RiCompassDiscoverLine} />
          </div>  
        </div>
      </header>
    </div>
  )
}

export default Navbar