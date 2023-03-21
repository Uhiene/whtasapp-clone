import React from 'react'
import { FiEdit, FiMoreHorizontal } from 'react-icons/fi'
import { VscSearch} from 'react-icons/vsc'
import { GoArchive} from 'react-icons/go'
import Contacts from './Contacts'

const Chats = () => {
    return (
        <div className='bg-white border-r border-gray-300 w-[30%] space-y-4'>
            <Header/>
            <Search/>
            <Archived/>
            <Contacts/>
        </div>
      )
}

const Header = () => {
    return (
        <div className="flex justify-between items-center p-2 px-4">
            <h1 className='text-xl font-semibold'>Chats</h1>
            <div className="flex w-fit space-x-10 text-gray-600">
                <FiEdit/>
                <FiMoreHorizontal/>
            </div>
        </div>
      )
}

const Search = () => {
    return (
        <div className="w-[90%] mx-auto bg-white rounded-lg p-2 shadow-sm shadow-gray-600 flex justify-between items-center">
            <input type="text" className='w-[90%] outline-none placeholder:text-sm' placeholder='Search or start a new chat' />
            <VscSearch className='text-sm text-gray-600'/>
        </div>
      )
}

const Archived = () => {
    return (
        <div className="w-[90%] mx-auto rounded-lg pl-5 flex space-x-4 items-center p-2 px-4">
            <GoArchive className='text-lg'/>
            <h1 className='font-semibold'>Archived</h1>
        </div>
      )
}


export default Chats
