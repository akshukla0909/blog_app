import React from 'react'

const CategoryList = () => {
  return (
    <div>
        <ul className='flex gap-10 mt-20 w-[85%] mx-auto font-medium text-[17px] text-gray-500 border-b-[2px]'>
            <a href='#' className='hover:text-black hover:border-b-2 border-black pb-2'>View all</a >
            <a href='#' className='hover:text-black hover:border-b-2 border-black pb-2'>Design</a >
            <a href='#' className='hover:text-black hover:border-b-2 border-black pb-2'>Product</a >
            <a href='#' className='hover:text-black hover:border-b-2 border-black pb-2'>Development</a >
            <a href='#' className='hover:text-black hover:border-b-2 border-black pb-2'>Customer Support</a >
            <a href='#' className='hover:text-black hover:border-b-2 border-black pb-2'>Leadership</a >
            <a href='#' className='hover:text-black hover:border-b-2 border-black pb-2'>Management</a >
            <a href='#' className='hover:text-black hover:border-b-2 border-black pb-2'>Interviews</a>
        </ul>
    </div>
  )
}

export default CategoryList