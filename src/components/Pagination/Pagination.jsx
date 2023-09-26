import React, { useState } from 'react'
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"
export default function Pagination() {
  const [pagination, setPagination] = useState(3)
  return (
    <div className='flex justify-center m-3 gap-1 font-medium'>
      <button onClick={() => setPagination("prev")} className={`hover:bg-green-500 hover:text-white ${pagination === "prev" ? 'bg-green-500 text-white' : ""} w-12 h-12 rounded-full flex justify-center items-center text-2xl transition-all`}><BiSkipPrevious /></button>
      <button onClick={() => setPagination(1)} className={`hover:bg-green-500 hover:text-white ${pagination === 1 ? 'bg-green-500 text-white' : ""} w-12 h-12 rounded-full flex justify-center items-center text-2xl transition-all`}>1</button>
      <button onClick={() => setPagination(2)} className={`hover:bg-green-500 hover:text-white ${pagination === 2 ? 'bg-green-500 text-white' : ""} w-12 h-12 rounded-full flex justify-center items-center text-2xl transition-all`}>2</button>
      <button onClick={() => setPagination(3)} className={`hover:bg-green-500 hover:text-white ${pagination === 3 ? 'bg-green-500 text-white' : ""} w-12 h-12 rounded-full flex justify-center items-center text-2xl transition-all`}>3</button>
      <button onClick={() => setPagination("next")} className={`hover:bg-green-500 hover:text-white ${pagination === "next" ? 'bg-green-500 text-white' : ""} w-12 h-12 rounded-full flex justify-center items-center text-2xl transition-all`}><BiSkipNext /></button>
    </div>
  )
}
