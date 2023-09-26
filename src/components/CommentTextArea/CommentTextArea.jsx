import React from 'react'

export default function CommentTextArea() {
    return (
        <div className="flex flex-col mt-5">
            <div>دیدگاهتان را بنویسید</div>
            <p>به عنوان محمدرضا مقدر وارد شده اید <a href="">خارج میشوید؟</a>بخش های موردنیاز علامت گذاری شده اند *</p>
            <label className='flex flex-col gap-1 mt-2' htmlFor="inputPoint">
                <span>دیدگاه * </span>
                <textarea name="" id="inputPoint" rows="10" className='outline-none border-gray-300 border-1 rounded bg-transparent text-gray-700 p-3 shadow-sm shadow-gray-500'></textarea>
            </label>
            <div className='mt-3'>
                <button className='py-2 px-3 bg-green-600 text-white rounded transition-all duration-300 hover:bg-green-500'>فرستادن دیدگاه </button>
            </div>
        </div>
    )
}
