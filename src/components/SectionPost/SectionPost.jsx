import React from 'react'

export default function SectionPost({ title, subTitle, children, img }) {
    return (
        <div className='text-white'>
            <h1 className="text-2xl  py-3 border-b-2 border-gray-600 inline-block">{title}</h1>
            <div className="flex gap-x-3 text-xs md:text-sm text-gray-400">
                {subTitle}
            </div>
            <div className='my-4 text-medium flex flex-col'>
                <div><img src={`/images/blog/${img}`} alt="" /></div>
                <div className="mt-3">
                    {children}
                </div>
            </div>
        </div>
    )
}
