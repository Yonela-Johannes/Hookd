import { GiFishingHook } from "react-icons/gi";
import Input from "./Input";

function Hooks() {
  return (
    <div className='text-black flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[300px] xl:mt-[80px] sm:mt-[90px]'> 
        <div className='text-black flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 border-b border-gray-700'>
            <h2 className="text-lg sm:text-xl font-bold">Hookd</h2>
            <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
                <GiFishingHook className="h-7 w-7 text-black border-gray-700 border-[1px] p-1 rounded-2xl" />
            </div>
        </div>
        <Input />
    </div>
  )
}

export default Hooks