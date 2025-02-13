import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../Footer/Footer'
import BlogSections from './BlogSections/BlogSections'

const BlogPage = () => {
  return (
      <div className='w-full h-screen bg-gray-100 box-border overflow-x-hidden'>
        <div className="nav w-full h-[160px] relative ">
              <Navbar />
        </div>
     <BlogSections/>
     <Footer/>
    </div>
  )
}

export default BlogPage
