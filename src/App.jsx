import React from 'react'
import Navbar from './Components/Navbar'
import NewsLetter from './Components/NewsLetter'
import CategoryList from './Components/CategoryList'
import BlogPostCont from './Components/BlogPostCont'
import Footer from './Components/Footer'

function App() {
  return (
    <>

   <Navbar />
   <NewsLetter />
   <CategoryList />
    <div className='grid grid-cols-2 w-[85%] mx-auto gap-10'>
    <BlogPostCont />
    <BlogPostCont />
    <BlogPostCont />
    <BlogPostCont />
    <BlogPostCont />
    <BlogPostCont />
    </div>
    <Footer/>
    </>
  )
}

export default App