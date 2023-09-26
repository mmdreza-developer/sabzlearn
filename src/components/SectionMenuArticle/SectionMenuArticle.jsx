import React from 'react'

export default function SectionMenuArticle({ title }) {
    return (
        <div className='flex gap-x-2 font-bold'>
            <div className='w-4 h-auto bg-green-400 rounded-l-full'></div>
            <div className='py-2'>{title}</div>
        </div>
    )
}
