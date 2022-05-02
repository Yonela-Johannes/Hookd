import { BiUserCircle } from "react-icons/bi";

const HeaderLink = ({name, Icon, active}) => {
  return (
    <div className={`cursor-pointer flex flex-col justify-center items-center hoverAnimation ${active && 'font-bold'}`}>    
        <Icon  className='text-black !h-6 !w-6 lg:!-mb-1' />
        <span className='text-md hidden xl:inline'>{name}</span>
    </div>
  )
}

export default HeaderLink