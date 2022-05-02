import React, {useState, useRef} from 'react'
import { IoMdClose} from "react-icons/io";
import { HiOutlinePhotograph } from "react-icons/hi";
import { GrEmoji } from "react-icons/gr";

const Input = () => {
    const [input, setInput] = useState()
    const [selectedFile, setSelectedFile] = useState(null)
    const [showEmojis, setShowEmojis] = useState(false)
    const filePickerRef = useRef(null)

    const addImageToPost = () => {

    }



  return (
    <div className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll`}>
        <img className='h-11 w-11 rounded-full cursor-pointer object-cover' src='https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/275791199_4912479898873340_2397088914060735098_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=19AB3fVz-iIAX8uby7Y&_nc_ht=scontent-cpt1-1.xx&oh=00_AT9Ny2qdLXl4cskhXGa8XOwdi_U8pFVP-J2m55jBXY_Viw&oe=6274C3A2' alt='dp'/>

        <div className='w-full divide-y divide-gray-700'>
            <div className={``}>
                <textarea value={input} rows='2' onChange={e => setInput(e.target.value)} className='bg-transparent outline-none text-gray text-lg placeholder-gray-500tracking-wide w-full min-h-[50px] ' placeholder="What's happening"/>

                {selectedFile && (
                    <div className='relative'>
                        <div className='absolute w-8 h-8 bg-white hover:bg-gray opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-poiner' onClick={() => setSelectedFile(null) }>
                            <IoMdClose className='text-black h-5' />
                        </div>
                        <img src={selectedFile} alt='selected input image' className='rounded-2xl max-h-80 object-contain' />
                    </div>
                )}
            </div>
            <div>
                <div className='flex items-center justify-between pt-2.5'>
                    <div className='flex items-center'>
                        <div className='hoverAnimation' onClick={() => filePickerRef.current.click()}>
                            <HiOutlinePhotograph className='h-[22px]' />
                            <input type='file' hidden onChange={addImageToPost} ref={filePickerRef} />
                        </div>
                        <div className='hoverAnimation'>
                            <GrEmoji className='h-[22px]' onClick={() => setShowEmojis(!showEmojis)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Input