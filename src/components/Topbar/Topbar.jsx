import React, { memo } from 'react'
import { Link } from 'react-router-dom';

export default memo(function Topbar() {
  console.log("Topbar");
  return (
    <div className='w-full  justify-between p-4 hidden md:flex'>
      <ul className='grid grid-cols-2 sm:gap-x-3 sm:flex  text-xs lg:text-base font-base grow'>
        <li><Link to="" className='hover:text-green-500'>آموزش Html</Link></li>
        <li><Link to="" className='hover:text-green-500'>آموزش Css</Link></li>
        <li><Link to="" className='hover:text-green-500'>آموزش جاوا اسکریپت</Link></li>
        <li><Link to="" className='hover:text-green-500'>آموزش بوت استرپ</Link></li>
        <li><Link to="" className='hover:text-green-500'>آموزش پایتون</Link></li>
        <li><Link to="" className='hover:text-green-500'>آموزش ریکت</Link></li>
        <li><Link to="" className='hover:text-green-500 hidden xl:block'>20,000 تومان</Link></li>
      </ul>
      <div className='gap-4 hidden md:block lg:flex'>
        <div className='flex gap-1 justify-center md:hidden lg:flex items-center'><span>mmdvirus@gmail.com</span><i className="fa-solid fa-envelope text-green-400 text-md"></i></div>
        <div className='flex gap-1 justify-center items-center '><span>017333333</span><i className="fa fa-phone text-green-400 text-md"></i></div>
        <div></div>
      </div>
    </div>
  )
})
