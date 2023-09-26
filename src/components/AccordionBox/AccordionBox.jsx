import React from 'react'
import { useState } from 'react'
import { BiChevronDown } from "react-icons/bi"
import { BsPlayBtnFill } from "react-icons/bs"
export default function AccordionBox({ title, desc, time }) {
    const [isShowBox, setIsShowBox] = useState(false)
    return (
        <div className='my-4'>
            <div className={`flex justify-between border-2 border-gray-300 p-3 rounded-t-md shadow-sm shadow-blue-200 font-bold ${isShowBox && "border-blue-500"}`} onClick={() => setIsShowBox(prevState => !prevState)}>
                <div className={`text-gray-400 text-bold ${isShowBox && "text-blue-500"}`}>{title}</div>
                <div className={`text-3xl text-gray-100 font-bold ${isShowBox && "text-blue-400"}`}>
                    <BiChevronDown className={`trasition-all duration-500 ${isShowBox ? "transform rotate-180" : ""}`} />
                </div>
            </div>
            <div className={`flex items-center justify-between gap-2 border-2 duration-500 transition-all  border-t-transparent overflow-hidden ${isShowBox ? "h-16 border-blue-500" : "h-0 border-none"}`}>
                <div className='flex gap-x-2 items-center'>
                    <div className='w-8 h-8 border-2  border-gray-300 text-gray-100 rounded-full flex justify-center items-center mr-2'>1</div>
                    <BsPlayBtnFill />
                    <div className='text-gray-100 font-medium text-xs md:text-sm lg:text-base hover:text-blue-400'>{desc}</div>
                </div>
                <div className='text-gray-100 font-medium text-xs md:text-sm lg:text-base ml-2'>{time}</div>
            </div>
        </div>
    )
}
