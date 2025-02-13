import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SecurityImage from "../../assets/Images/security.png";

const cards = [
    { id: 1, title: "01", color: "bg-blue-500" },
    { id: 2, title: "02", color: "bg-purple-500" },
    { id: 3, title: "03", color: "bg-green-500" },
    { id: 4, title: "04", color: "bg-red-500" },
    { id: 5, title: "05", color: "bg-yellow-500" },
];

const SecurityCarousel = () => {
    const [index, setIndex] = useState(0);
    const containerRef = useRef(null);
    //   <HTMLDivElement></HTMLDivElement>

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % cards.length);
        }, 3000); // Auto-scroll every 3s

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-[100%] h-[70%] max-sm:h-[600px] max-md:h-[90%] overflow-hidden flex items-center justify-center ">
            {/* Cards Container */}
            <motion.div
                ref={containerRef}
                className="absolute flex flex-col gap-4 items-center w-100 h-100"
                animate={{ y: -index * 490 }} // Move up by 120px per card
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
            >
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className={`w-[100%] max-lg:w-[90%] bg-white flex justify-center border-gray-300 border text-xl font-bold flex-col rounded-3xl p-4 gap-4`}
                    >
                        <div className="cardID w-full h-10 flex text-indigo-400 text-3xl font-extrabold"></div>
                        <div className="cardImage w-24 h-48 flex items-center">
                            <img
                                src={SecurityImage}
                                alt="Placeholder"
                                className="w-24 h-20 "
                            />
                        </div>
                        <div className="cardContent w-[90%] h-44 flex flex-col gap-2 items-center justify-center">
                            <h3 className="w-full text-2xl">Made by Accountants</h3>
                            <p className="w-full text-[15px]">Crafted, trained, and supported by real accountants and tax professionals to ensure reliable, expert-level guidance.</p>
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* Navigation Buttons
      <button
        className="absolute bottom-4 left-6 px-3 py-2 bg-gray-800 text-white rounded-full"
        onClick={() => setIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length)}
      >
        ⬆
      </button>
      <button
        className="absolute bottom-4 right-6 px-3 py-2 bg-gray-800 text-white rounded-full"
        onClick={() => setIndex((prevIndex) => (prevIndex + 1) % cards.length)}
      >
        ⬇
      </button> */}
        </div>
    );
};

export default SecurityCarousel;
