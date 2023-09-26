import React from 'react'
import Navbar from '../Navbar/Navbar'
import Topbar from '../Topbar/Topbar'

export default function Header() {
    return (
        <div className='shadow-md shadow-gray-400 my-5'>
            <Topbar />
            <Navbar />
        </div>
    )
}
