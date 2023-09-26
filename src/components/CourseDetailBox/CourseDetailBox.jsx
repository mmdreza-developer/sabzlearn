import React from 'react'

export default function CourseDetailBox({icon,title,text }) {
    return (
        <div className='flex gap-x-2 items-center'>
            <div className="text-5xl text-green-500">{icon}</div>
            <div className="flex flex-col text-xs md:text-sm lg:text-base lg:font-medium">
                <div>{title}</div>
                <div>{text}</div>
            </div>
        </div>
    )
}
