import React, { useState } from 'react'
import { FaChalkboardTeacher, FaUsers } from "react-icons/fa"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { SpinnerCircular } from 'spinners-react';
import { Link, useParams } from 'react-router-dom';
export default function CourseBox({ title, route, img, desc, teacher, price, condition, numberStudents, pointView, comments, numberLessons }) {
    const [isShowLoader, setIsshowLoader] = useState(false)
    const onLoader = () => setIsshowLoader(true)
    return (
        <>
            <div className='flex flex-row rounded-lg overflow-hidden my-2 hover:shadow-md transition-all  hover:shadow-green-300 border border-green-300 md:flex-col' >
                <div className=' flex-1'>
                    {!isShowLoader && <SpinnerCircular />}
                    <img onLoad={onLoader} className='h-full w-full' src={img} alt="" />
                </div>
                <div className='flex-1 grow md:grow-0 flex flex-col'>
                    <div className=" font-medium text-xs text-center mb-2 md:text-sm block md:text-right px-3 mt-2">{title}</div>
                    <div className=' flex flex-col justify-between text-xs items-center grow md:grow-0 md:text-sm md:grid md:grid-cols-2 md:text-center p-4'>
                        <div className="flex items-center justify-center md:justify-start  gap-x-2">
                            <FaChalkboardTeacher className=' text-lg' /> {teacher}
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <img src="/images/svgs/star.svg" alt="" />
                            <img src="/images/svgs/star_fill.svg" alt="" />
                            <img src="/images/svgs/star_fill.svg" alt="" />
                            <img src="/images/svgs/star_fill.svg" alt="" />
                            <img src="/images/svgs/star_fill.svg" alt="" />
                        </div>
                        <div className="flex justify-center items-center md:justify-start gap-x-2">
                            <FaUsers className=' text-lg' /> {pointView}
                        </div>
                        <div className="flex justify-between mb-2 font-medium md:justify-end"> <span>قیمت : </span><span>{price} تومان</span></div>
                    </div>
                    <Link to={`/course-info/${route}`} href="" className="bg-green-400 hover:bg-green-500 transition-all w-full text-white font-medium  text-center p-2 md:grow flex justify-center items-center gap-x-2">مشاهده  اطلاعات <AiOutlineArrowLeft className='text-md md:text-lg' /></Link>
                </div>
            </div>
        </>
    )
}
