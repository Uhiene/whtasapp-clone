import React from 'react'
import {BiMessageRoundedDetail}  from "react-icons/bi"
import {FiPhone}  from "react-icons/fi"
import {MdOutlineChangeCircle}  from "react-icons/md"

const SideBar = () => {
  return (
    <div className='w-[3%] flex flex-col items-center space-y-5 text-gray-600 text-[18px] mt-4'>
        <BiMessageRoundedDetail/>
        <FiPhone/>
        <MdOutlineChangeCircle/>
    </div>
  )
}

export default SideBar