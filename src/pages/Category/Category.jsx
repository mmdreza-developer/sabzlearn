import React from 'react'
import Topbar from "./../../components/Topbar/Topbar"
import Navbar from "./../../components/Navbar/Navbar"
import Footer from '../../components/Footer/Footer'
import CourseBox from "../../components/CourseBox/CourseBox"
import { MdOutlineWindow } from "react-icons/md"
import { AiOutlineBars } from "react-icons/ai"
import { BiSearchAlt2 } from "react-icons/bi"
import Pagination from '../../components/Pagination/Pagination'
export default function Category() {
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="container my-5">
        <div className="flex justify-between shadow-md p-6 text-gray-100 flex-col items-center gap-2 md:flex-row">
          <div className='flex gap-2'>
            <div className="bg-blue-500 w-12 h-12 rounded flex items-center justify-center text-white cursor-pointer"><MdOutlineWindow /></div>
            <div className=" w-12 h-12 border border-gray-300 shadow-md rounded flex items-center justify-center text-lg font-medium cursor-pointer"><AiOutlineBars /></div>
            <select name="" id="" className='outline-none border border-gray-300 h-12 w-auto px-2  rounded shadow-md text-sm cursor-pointer'>
              <option value="">مرتب سازی پیش فرض</option>
              <option value="">پرفروش ها</option>
              <option value="">پیش فروش ها</option>
            </select>
          </div>
          <div className='flex relative grow w-full'>
            <BiSearchAlt2 className='absolute left-2 text-2xl top-3 cursor-pointer' />
            <input type="text" className='outline-none border border-gray-300 h-12 px-2 shadow-md w-full rounded placeholder:text-sm md:placeholder:text-base text-xs md:text-base grow' placeholder=' جستجو دوره موردنظر ...' />
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <CourseBox />
          <CourseBox />
          <CourseBox />
          <CourseBox />
        </div>
        <Pagination />
      </div>
      <Footer />
    </>
  )
}
