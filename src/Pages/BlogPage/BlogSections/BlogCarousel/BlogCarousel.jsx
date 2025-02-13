import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import LeftButton from "../../../../assets/Images/leftButton.png"
import RightButton from "../../../../assets/Images/rightButton.png"
import { Search } from "lucide-react";
import Button from "../../../../Components/Button/Button";
import Arrow_Image from "../../../../assets/Images/purple-arrow-image.png"

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

const BlogCarousel = () => {

    const [index, setIndex] = useState(0);
    const containerRef = useRef(null);
    //   <HTMLDivElement></HTMLDivElement>

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setIndex((prevIndex) => (prevIndex + 1) % blogPosts.length);
    //     }, 3000); // Auto-scroll every 3s

    //     return () => clearInterval(interval);
    // }, []);
  return (
      <div className="relative w-[100%] h-auto max-sm:h-[600px]max-md:h-auto gap-4 flex items-center justify-center ">
          {/* Cards Container */}
          <motion.div
              ref={containerRef}
              className="absolute -top-10 flex  gap-4 items-center space-x-32 max-md:ml-0 ml-48 w-full h-[500px]"
              animate={{ x: -index * 550 }} // Move left by 120px per card
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
          >
              {blogPosts.map((post) => (
                  <div key={post.id} className="bg-white w-full p-6 h-fit rounded-2xl shadow-lg ">
                      <div className="flex items-center border rounded-full p-3 w-[400px] h-fit gap-2  max-sm:w-full justify-between ">
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
                          <img src={Arrow_Image} className="max-sm:hidden" alt="img" />
                      </div>
                      <div className="mt-10 h-[150px] flex flex-col justify-center">
                          <h3 className="text-2xl  font-bold">{post.title}</h3>
                          <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                          <p className="text-gray-600 text-lg max-md:text-[16px] max-sm:text-[12px]">{post.description}</p>
                      </div>
                  </div>
              ))}
          </motion.div>

          {/* Navigation Buttons */}
      <button
        className="absolute top-28 max-md:top-96 left-6 px-3 py-2 rounded-full"
        onClick={() => setIndex((prevIndex) => (prevIndex - 1 + blogPosts.length) % blogPosts.length)}
      >
       <img src={LeftButton} alt="button" />
      </button>
      <button
              className="absolute top-28 max-md:top-96 right-6 px-3 py-2 rounded-full"
        onClick={() => setIndex((prevIndex) => (prevIndex + 1) % blogPosts.length)}
      >
              <img src={RightButton} alt="button" />
      </button>
      </div>
  )
}

export default BlogCarousel
