"use client"

import { motion } from "framer-motion"
import { fadeIn } from "@/utils"

const ExploreCard = ({ id, img, title, index, active, handleClick }) => {
    return (
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className={`relative ${active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"} flex-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
            onClick={() => handleClick(id)}
        >
            <img 
                src={img}
                alt={title}
                className="absolute w-full h-full object-cover rounded-3xl"
            />

            {active !== id ? (
                <h3 className="font-bold sm:text-[26px] text-[18px] text-white capitalize absolute z-0 lg:bottom-20 lg:-rotate-[90deg] lg:origin-[0,0]">
                    {title}
                </h3>
            ) : (
                <div className="absolute bottom-0 p-8 w-full bg-[rgba(0,0,0,0.5)] rounded-b-3xl">
                    <div className="mb-4 flex-center w-[60px] h-[60px] rounded-3xl explorecard-glassmorphism">
                        <img 
                            src="/assets/icons/headset.svg"
                            alt="headset"
                            className="w-1/2 h-1/2 object-contain"
                        />
                    </div>

                    <p className="font-normal text-[16px] leading-5 text-white uppercase">
                        ENTER METAVERSE
                    </p>

                    <h3 className="mt-6 font-bold sm:text-[32px] text-[24px] text-white capitalize">
                        {title}
                    </h3>
                </div>
            )}
        </motion.div>
    )
}

export default ExploreCard