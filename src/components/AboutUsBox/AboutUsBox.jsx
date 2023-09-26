import React from 'react'

export default function AboutUsBox({ icon, title, desc }) {
    return (
        <div className='flex my-4 gap-x-2'>
            <div className='text-6xl'>
                {icon}
            </div>
            <div className="">
                <div className="text-md font-medium">{title}</div>
                <div className="text-sm">{desc}</div>
            </div>
        </div>
    )
}
