import React, { useEffect, useState } from "react";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    { name: "Carlos M.", title: "Construction Business Owner", description: "Running a construction business means tons of paperwork, and tax season was always a nightmare. But with Ezyiah, everything’s a breeze. I love how the quick links keep all my most-used documents ready to go—no more wasting time searching. And when it’s time to share with my accountant, I just send them the exact files through the secure sharing feature. It's saved me so much time and stress!" },
    { name: "Carlos M.", title: "Construction Business Owner", description: "Running a construction business means tons of paperwork, and tax season was always a nightmare. But with Ezyiah, everything’s a breeze. I love how the quick links keep all my most-used documents ready to go—no more wasting time searching. And when it’s time to share with my accountant, I just send them the exact files through the secure sharing feature. It's saved me so much time and stress!" },
    { name: "Carlos M.", title: "Construction Business Owner", description: "Running a construction business means tons of paperwork, and tax season was always a nightmare. But with Ezyiah, everything’s a breeze. I love how the quick links keep all my most-used documents ready to go—no more wasting time searching. And when it’s time to share with my accountant, I just send them the exact files through the secure sharing feature. It's saved me so much time and stress!" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      {/* Mobile View: Horizontal Carousel */}
      <div className="bg-gray-100 w-full h-auto max-lg:block min-lg:hidden flex justify-center items-center overflow-hidden mx-auto flex-col">
        <div className="header w-full h-[30vh] flex justify-center items-center flex-col gap-2">
          <h2 className="text-5xl text-center font-extrabold uppercase">
            What Our Clients Say
          </h2>
        </div>

        {/* Mobile Carousel */}
        <div className="relative bg-gray-100 flex flex-col h-[500px] w-[95%] ">
          <div className="relative h-[500px] my-3  w-full overflow-hidden rounded-lg flex justify-center items-center transition-all duration-700 ease-in-out">
            {testimonials.map((item, index) => (
              <div key={index} className={`absolute inset-0  flex items-center justify-center transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"}`}>
                <div className="p-5 rounded-3xl shadow-md bg-white w-[400px] h-[400px] flex flex-col items-center justify-between">
                  <div className="clientName w-full">
                    <h3 className="text-2xl font-extrabold">{item.name}</h3>
                    <p>{item.title}</p>
                  </div>
                  <p className="text-gray-700 mt-2 text-center">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
         
          <div className="flex w-full mx-auto justify-center gap-4 my-5 ">
            <button onClick={prevSlide} className="bg-gray-100 text-gray-500 border-2 border-gray-500  px-4 py-3 rounded-full">
              ◀
            </button>
            <button onClick={nextSlide} className="bg-gray-100 text-gray-500 border-2 border-gray-500 px-4 py-3 rounded-full">
              ▶
            </button>
          </div>
          
        </div>
      </div>

      {/* Desktop View: Vertical Stacked Cards */}
      <section className="relative flex flex-col items-center justify-center h-screen min-lg:block max-lg:hidden bg-gray-100 overflow-hidden -z-[1]">
        {/* Background Orbit Circles */}
        <div className="absolute  flex items-center justify-center">
         <div className="absolute max-md:-top-50  max-md:-left-50 -top-40 left-60  w-[1100px] h-[1100px] rounded-full border-[1px] border-gray-300 opacity-60"></div>
          <div className="absolute max-md:-top-30  max-md:-left-30 top-0 left-100 w-[800px] h-[800px] rounded-full border-[1px] border-gray-300 opacity-60"></div>
          <div className="absolute max-md:-top-10  max-md:left-10 top-30 left-130 w-[500px] h-[500px] rounded-full border-[1px] border-gray-300 opacity-60"></div>
        </div>

      <div className="hidden md:flex  flex-col absolute top-55 items-center w-full  h-[600px] ">
          <h2 className="text-5xl font-extrabold uppercase min-md:w-[35%] min-lg:w-[30%] tracking-wide min-lg:text-6xl text-center mb-10">
          What Our Clients Say
        </h2>

       <div className="absolute min-lg:right-40 min-2xl:right-80 min-lg:top-20 min-xl:right-60 min-xl:top-10 right-70">
            <div className="relative  w-[400px] h-[500px]  flex items-center justify-center">
              {testimonials.map((item, index) => {
                let position = "opacity-0 scale-90"; // Default hidden state
                if (index === currentIndex) {
                  position = "opacity-100 scale-100 rotate-0"; // Centered card
                } else if (index === (currentIndex + 1) % testimonials.length) {
                  position = "opacity-100 scale-95 rotate-0"; // Next card
                } else if (index === (currentIndex - 1 + testimonials.length) % testimonials.length) {
                  position = "opacity-100 scale-95 -rotate-0"; // Previous card
                }

                return (
                  <div key={index} className={`absolute transition-all duration-700 ease-in-out ${position} w-[400px] h-[400px] bg-white shadow-lg p-5 rounded-3xl flex flex-col items-center justify-center`}>
                    <h3 className="text-2xl font-extrabold">{item.title}</h3>
                    <p className="text-gray-700 mt-2 text-center">{item.description}</p>
                  </div>
                );
              })}
            </div>
        <div className="flex gap-4 mt-5 justify-between">
              <button onClick={prevSlide} className="bg-gray-100 text-gray-500 border-2 border-gray-500  px-4 py-3 rounded-full">
                ◀
          </button>
              <button onClick={nextSlide} className="bg-gray-100 text-gray-500 border-2 border-gray-500 px-4 py-3 rounded-full">
                ▶
          </button>
        </div>
       </div>

        {/* Desktop Navigation */}
      </div>
      </section>
    </>
  );
};

export default Testimonial;
