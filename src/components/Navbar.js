import React from 'react'
import logo from "./logo.jpg"

const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>
        <img src={logo} alt="movie" className='w-[60px] rounded-full'/>
        <h3 className='text-blue-600'>Movies</h3>
        <h3 className='text-blue-600'>WatchList</h3>
        <h3>yes iam nav</h3>
    </div>
  )
}

export default Navbar