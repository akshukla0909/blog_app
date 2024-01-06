import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
  return (
    <>
     <nav className='flex items-center justify-between w-[85%] mx-auto'>
        <div className='flex '>
            {/* {logo} */}
            <h2 className='text-black p-5 px-8 font-bold'>BlogMaza</h2>
            <ul className='flex'>
                <a href='#' className='p-5 font-semibold hover:text-gray-600'>
                Home
                </a>
                <a href='#' className='p-5 font-semibold hover:text-gray-600 flex  items-center justify-between' >
                Products
                  <IoIosArrowDown className='ml-2' />
                </a>
                <a href='#' className='p-5 font-semibold hover:text-gray-600 flex  items-center justify-between'>
                Resources
                <IoIosArrowDown className='ml-2' />
                </a>
                <a href='#' className='p-5 font-semibold hover:text-gray-600'>
                Pricing
                </a>
               
            </ul>
        </div>
        <div className='px-8'>
            <button className='px-6'>Login</button>
            <button className='bg-black text-white px-5 py-2 rounded-full'>SignUp</button>
        </div>
     </nav>
    </>
  )
}

export default Navbar