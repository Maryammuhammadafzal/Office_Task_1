// import React from 'react'
// import Navbar from '../../../Components/Navbar/Navbar'
// import BlogCarousel from './BlogCarousel/BlogCarousel'
// const BlogSections = () => {
//   return (
//       <div className="flex flex-col  gap-3 items-center min-h-screen w-full">
//           <div className="h-[100px] z-10 w-[98%]  max-sm:w-[80%] max-md:w-[70%] max-lg:w-[60%]">
//               <h1 className="text-7xl capitalize font-[900] tracking-wide text-black max-sm:text-4xl min-sm:text-5xl leading-14 ">
//                   Insightfull Blogs
//               </h1>
//           </div>
//           <div className="w-full  flex items-center justify-center h-auto  px-4">
//             <BlogCarousel/>
//           </div>
//       </div>
//   )
// }

// export default BlogSections
import { useState } from "react";
import { Search } from "lucide-react";
import Button from "../../../Components/Button/Button";
import Arrow_Image from "../../../assets/Images/purple-arrow-image.png"
import BlogCarousel from "./BlogCarousel/BlogCarousel";
import LeftButton from "../../../assets/Images/leftButton.png"
import RightButton from "../../../assets/Images/rightButton.png"

const blogPosts = [
    {
        id: 1,
        title: "Blog Title",
        date: "5 Oct, 2023",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        categories: ["Jobs", "Interview"],
        time: "5 min",
    },
    {
        id: 2,
        title: "Blog Title",
        date: "5 Oct, 2023",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        categories: ["Jobs", "Interview"],
        time: "5 min",
    },
    {
        id: 3,
        title: "Blog Title",
        date: "5 Oct, 2023",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        categories: ["Jobs", "Interview"],
        time: "5 min",
    },
    {
        id: 4,
        title: "Blog Title",
        date: "5 Oct, 2023",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        categories: ["Jobs", "Interview"],
        time: "5 min",
    },
    {
        id: 5,
        title: "Blog Title",
        date: "5 Oct, 2023",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        categories: ["Jobs", "Interview"],
        time: "5 min",
    },
    {
        id: 6,
        title: "Blog Title",
        date: "5 Oct, 2023",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        categories: ["Jobs", "Interview"],
        time: "5 min",
    },
];

export default function BlogSection() {
    const [search, setSearch] = useState("");

    return (
        <div className="bg-gray-100 p-10 min-h-screen">
           <div className="carousel  w-full h-[600px]">
                <h2 className="text-5xl font-extrabold mb-8">INSIGHTFUL BLOGS</h2>
                <BlogCarousel/>
           </div>

            <div className="flex w-full max-[870px]:flex-col  max-[870px]:gap-3 gap-3 max-[870px]:items-center justify-center mb-8">
                <div className="relative w-[50%] max-[870px]:w-full mr-auto max-[870px]:mr-0 max-[870px]:justify-center items-center flex max-w-lg">
                    <input
                        type="text"
                        placeholder="Search Blogs"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full p-3 pl-5 pr-10 border border-gray-300 rounded-full focus:outline-none"
                    />
                    <Search className="absolute right-4 top-3  my-auto h-auto  text-gray-500 cursor-pointer" />
                </div>
                <div className="flex justify-end max-[870px]:justify-center items-center w-[50%] max-[870px]:w-full space-x-3 ">
                <button className="w-[100px] max-sm:text-[12px] max-[870px]:text-[14px] py-2 rounded-full border  focus:bg-indigo-500 focus:text-white" title="All">All</button>
                <button variant="outline" className="w-[100px] max-sm:text-[12px] max-[870px]:text-[14px] py-2 rounded-full border  focus:bg-indigo-500 focus:text-white" title="This Year">This Year</button>
                <button variant="outline" className="w-[100px] max-sm:text-[12px] max-[870px]:text-[14px] py-2 rounded-full border  focus:bg-indigo-500 focus:text-white" title="This Month">This Month</button>
                <button variant="outline" className="w-[100px] max-sm:text-[12px] max-md:text-[14px] py-2 rounded-full border  focus:bg-indigo-500 focus:text-white" title="This Week">This Week</button>
            </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full lg:grid-cols-2 gap-6">
                {blogPosts.map((post) => (
                    <div key={post.id} className="bg-white p-6 h-fit rounded-2xl shadow-lg relative">
                        <div className="flex items-center border rounded-full p-3 w-fit  gap-2  justify-between ">
                           <div className="flex gap-2 items-center">
                                {post.categories.map((cat, index) => (
                                    <span
                                        key={index}
                                        className="border px-5 py-2 text-xs rounded-full"
                                    >
                                        {cat}
                                    </span>
                                ))}
                                <span className="text-xs text-gray-500">{post.time}</span>
                           </div>
                        <img src={Arrow_Image} alt="img" />
                        </div>
                        <div className="mt-10 h-[150px] flex flex-col justify-center">
                            <h3 className="text-2xl  font-bold">{post.title}</h3>
                            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                            <p className="text-gray-600 text-lg max-md:text-[16px] max-sm:text-[12px]">{post.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-10 w-fit mx-auto rounded-full items-center border space-x-2">
                 {/* Navigation Buttons */}
                      <button
                        className=" px-3 py-2 rounded-full"
                        onClick={() => setIndex((prevIndex) => (prevIndex - 1 + blogPosts.length) % blogPosts.length)}
                      >
                       <img src={LeftButton} alt="button" />
                      </button>
                  
                <button variant="outline" className="w-10 focus:bg-indigo-500 focus:text-white h-10 rounded-full" title="01">01</button>
                <button className=" w-10 focus:bg-indigo-500 focus:text-white h-10 rounded-full" title="02" >02</button>
                <button variant="outline" className="w-10 focus:bg-indigo-500 focus:text-white h-10 rounded-full" title="03">03</button>
                      <button
                              className=" px-3 py-2 rounded-full"
                        onClick={() => setIndex((prevIndex) => (prevIndex + 1) % blogPosts.length)}
                      >
                              <img src={RightButton} alt="button" />
                      </button>
            </div>
        </div>
    );
}
