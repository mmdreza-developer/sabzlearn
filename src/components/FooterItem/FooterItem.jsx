import React from 'react'

export default function FooterItem({ title, children }) {
    return (
        <div className='flex flex-col p-4'>
            <div className="relative font-medium text-white-600 text-lg z-10">{title}
            <span className='absolute w-10 h-10 bg-green-500 -top-1 rounded right-0 transform rotate-45 -z-10'></span>
            </div>
            <div className='mt-2 text-gray-100'>
                {children}
            </div>
        </div>
    )
}
