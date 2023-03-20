import React from 'react'
import {RiWhatsappFill} from "react-icons/ri"
import {AiOutlineMinus} from "react-icons/ai"
import {BsFiles} from "react-icons/bs"
import {TfiClose} from "react-icons/tfi"

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-3'>
        <div className='flex justify-between items-center w-fit space-x-3'>
            <RiWhatsappFill className='text-green-400 text-2xl'/>
            <h1 className='text-sm'>Whatsapp</h1>
        </div>
        <div className='flex justify-between items-center w-fit space-x-8 text-sm text-gray-600'>
            <AiOutlineMinus/>
            <BsFiles/>
            <TfiClose/>
        </div>
    </div>
  )
}

export default Navbar