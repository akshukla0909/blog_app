import React from 'react'

function NewsLetter() {
  return (
    <div className='flex mx-[10%] mt-16 w-[85%]' >
      <div className=' w-[50%]'>
        <h1 className='font-bold text-[22px] lg:text-[70px] mb-5'>BlogMaza</h1>
      <div className='flex'>
      <input type="email" placeholder='Enter your email' className='rounded-full py-2 px-5  lg:w-[20vw] border border-gray-400'/>
        <button className='text-white border border-black rounded-full px-6 py-2 bg-black lg:-ml-10'>Subscribe</button>
      </div>
      </div>
      <div className='px-36 hidden lg:block font-medium text-[17px] text-gray-500'>
        <h1>New product features, the latest in technology, solutions and update</h1>
      </div>
    </div>
  )
}

export default NewsLetter