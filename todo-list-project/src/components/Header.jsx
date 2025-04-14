
import React from 'react'

function Header() {
  return (
    <nav className='flex justify-between bg-blue-950 text-white p-3 font-semibold'>
        <div className='logo'>
            <span className=''>Task Master</span>
        </div>
        <ul className="flex gap-4 cursor-pointer hover:font-bold">
            <li>Home</li>
            <li>Your Tasks</li>
        </ul>
    </nav>
  )
}

export default Header