import React from 'react'
import { FaChalkboardTeacher } from "react-icons/fa"
export default function TeacherInfo({ avatar, name, expert, desc }) {
    return (
        <div className="flex flex-col p-4 border-2 border-gray-200 rounded shadow-md my-5 text-white">
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <div className='rounded-full w-16 h-16 overflow-hidden'><img className='rounded-full' src={`/images/info/${avatar}.jfif`} alt="" /></div>
                    <div className='flex flex-col'>
                        <div className='font-medium  text-sm hover:text-blue-400'>{name}</div>
                        <div className='text-xs text-gray-400'>{expert}</div>
                    </div>
                </div>
                <button className='bg-green-400 mb-3 transition-all hover:bg-green-500 flex gap-x-1 items-center text-white py-2 px-4 rounded'>
                    <div className='text-xl mt-1'>
                        <FaChalkboardTeacher />
                    </div>
                    <div className='font-medium'>مدرس</div>
                </button>
            </div>
            <p className='text-sm text-gray-200 font-medium mr-5'>{desc}</p>
        </div>
    )
}
