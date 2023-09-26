import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <div className='w-full flex justify-between p-4 flex-col text-xs md:flex-row md:text-base'>
            <ul className='flex gap-x-2 order-1 justify-center md:order-0 md:justify-start mt-2 items-center'>
                <li className=''><Link to=""><img src="/images/logo/Logo.png" alt="" /></Link></li>
                <li className='relative group'><Link to="" className='hover:text-green-500'>فرانت اند <i className="fa fa-angle-down"></i></Link><ul className='absolute  h-auto bg-gray-100 w-48 p-4 rounded y-300 divide-y-2 hidden group-hover:block'>
                    <li className='bg-green-500 hover:bg-green-400 p-2 rounded'><Link className='text-white' href="">فرانت 1</Link></li>
                    <li className='bg-green-500 hover:bg-green-400 p-2 rounded'><Link className='text-white' href="">فرانت 2</Link></li>
                    <li className='bg-green-500 hover:bg-green-400 p-2 rounded'><Link className='text-white' href="">فرانت 3</Link></li>
                </ul></li>
                <li className='relative group'><Link to="" className='hover:text-green-500'>امنیت <i className="fa fa-angle-down"></i></Link><ul className='absolute  h-auto bg-gray-100 w-48 p-4 rounded y-300 divide-y-2 hidden group-hover:block'>
                    <li className='bg-green-500 hover:bg-green-400 p-2 rounded'><Link className='text-white' href="">امنیت 1</Link></li>
                    <li className='bg-green-500 hover:bg-green-400 p-2 rounded'><Link className='text-white' href="">امنیت 2</Link></li>
                    <li className='bg-green-500 hover:bg-green-400 p-2 rounded'><Link className='text-white' href="">امنیت 3</Link></li>
                </ul></li>
                <li className='relative group'><Link to="" className='hover:text-green-500'>مقالات <i className="fa fa-angle-down"></i></Link><ul className='absolute  h-auto bg-gray-100 w-48 p-4 rounded y-300 divide-y-2 hidden group-hover:block'>
                    <li className='bg-green-500 hover:bg-green-400 p-2 rounded'><Link className='text-white' href="">مقالات 1</Link></li>
                    <li className='bg-green-500 hover:bg-green-400 p-2 rounded'><Link className='text-white' href="">مقالات 2</Link></li>
                    <li className='bg-green-500 hover:bg-green-400 p-2 rounded'><Link className='text-white' href="">مقالات 3</Link></li>
                </ul></li>
                <li className='relative group'><Link to="" className='hover:text-green-500'>پایتون <i className="fa fa-angle-down"></i></Link><ul className='absolute  h-auto bg-gray-100 w-48 p-4 rounded y-300 divide-y-2 hidden group-hover:block'>
                    <li className='bg-green-500 hover:bg-green-400 p-2 rounded'><Link className='text-white' href="">پایتون 1</Link></li>
                    <li className='bg-green-500 hover:bg-green-400 p-2 rounded'><Link className='text-white' href="">پایتون 2</Link></li>
                    <li className='bg-green-500 hover:bg-green-400 p-2 rounded'><Link className='text-white' href="">پایتون 3</Link></li>
                </ul></li>
                <li className='hidden sm:block'><Link to="" className='hover:text-green-500'>مهارت های نرم</Link></li>
            </ul>
            <ul className='flex gap-x-1 order-0 justify-center items-center mb-3 md:order-1 md:justify-start text-xs sm:text-sm md:text-md'>
                <li><Link className='bg-green-400 rounded w-10 h-10 flex justify-center items-center text-white font-base'><i className="fa fa-search"></i></Link></li>
                <li><Link className=' w-10 h-10 flex justify-center items-center text-lg'><i className="fa fa-shopping-cart"></i></Link></li>
                <li><Link to="/login" className=' border-2 en-400 hover:en-500 border-green-400 text-green-500 hover:bg-green-500 hover:text-white transition duration-300 rounded h-10 flex justify-center items-center p-4'>محمدرضا مقدر</Link></li>
            </ul>
        </div>
    )
}
