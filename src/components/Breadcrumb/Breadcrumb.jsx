import React from 'react'
import { GrFormPrevious } from "react-icons/gr"
import { ImHome } from "react-icons/im"
import { Link } from "react-router-dom"
export default function Breadcrumb({ links }) {
    return (
        <div className='container bg-green-400 rounded text-white'>
            <div className='p-6'>
                <ul className='flex items-center gap-x-1 font-medium text-xs md:text-sm'>
                    <ImHome className='text-lg' />
                    {links.map((link) => (
                        <>
                            <li><Link to={link.to}>{link.title}</Link></li>
                            {links.length !== link.id ? (
                                <GrFormPrevious className='text-white' />
                            ) : null}
                        </>
                    ))}
                </ul>
            </div>
        </div>
    )
}
