import React from 'react'
import { IoMdArrowUp } from "react-icons/io";

function BlogPostCont() {
  return (
    <div>
        <div className='mt-16 mx-auto -mb-16'>
              <div className=''>
              <img src="https://images.unsplash.com/photo-1543269865-0a740d43b90c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="" className='w-full h-[45vh]'/>
            <div className='-mt-20 p-5 text-white flex justify-between  backdrop-blur-md'>
                <div>
                <h2 className='font-medium text-base'>Oliva Rhyve</h2>
                <span>02 JAN 2024</span>
                </div>
                <h3 className='font-medium'>Design</h3>
            </div>
          <div className=' flex flex-col gap-2 my-5'>
            <div>
              <h1 className='hover:underline font-medium text-[18px] mb-3'>UX review presentations</h1>
              <p className='font-normal text-gray-500 leading-[20px]'>How do you create compelling presentations that wow your colleagues and impress your managers ? look no further.</p>
            </div>
            <div className='flex items-center '>
              <p>Read post</p> 
              <IoMdArrowUp className='rotate-45 mx-1'/>
            </div>
          </div>

              </div>
        </div>
    </div>
  )
}

export default BlogPostCont