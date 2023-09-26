import React from 'react'

export default function ArticleBox({ title, desc, cover }) {
  return (
    <div className='flex flex-col'>
      <div>
        <img src={cover} alt="" />
      </div>
      <div className='font-bold text-lg'>{title}</div>
      <div className="mt-3 font-sm">{desc}</div>
      <div className='mt-2'>
        <a href='#' className="border-2 inline-block border-green-400 text-green-500 font-medium hover:bg-green-500 hover:text-white rounded transition-all duration-500 px-4 py-2">بیشتر بخوانید</a>
      </div>
    </div>
  )
}
