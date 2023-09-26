import React from 'react'
import { MdArrowBackIos, MdArrowLeft } from "react-icons/md"
import { Link } from 'react-router-dom'
export default function SectionHeader({ title, desc, btnTitle, btnHref }) {
    return (
        <div className='flex justify-between mt-14 mb-2'>
            <div className="grow relative mb-4">
                <div className="mb-1 min-w-fit w-3/4 md:w-4/12 text-green-500 text-xl font-bold p-1 rounded z-10 mr-3 border-b-4 border-green-400"><span className='mr-3'>{title}</span></div>
                <div className=" w-8 h-1 bg-green-400 absolute bottom-6 -right-2 transform -rotate-90 rounded-full"></div>
                <div className="w-8 h-1 bg-green-400 absolute bottom-6 -right-2 transform -rotate-0 rounded-full"></div>
                <div className="w-8 h-1 bg-green-400 absolute bottom-6 -right-2 transform -rotate-45 rounded-full"></div>
                <div className="w-8 h-1 bg-green-400 absolute bottom-6 -right-2 transform rotate-45 rounded-full"></div>
                <div className="text-xs text-green-700 mt-2">{desc}</div>
            </div>
            <div>
                {btnTitle &&
                    <Link to={`/${btnHref}`} className='bg-green-400 p-2 text-white rounded flex items-center justify-center hover:bg-green-500 transition-all'>{btnTitle}<MdArrowLeft className='text-3xl' /></Link>
                }
            </div>
        </div>
    )
}
