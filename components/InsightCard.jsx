"use client"

import { motion } from "framer-motion"
import { fadeIn } from "@/utils"

const InsightCard = ({ img, title, subtitle, index }) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 1)}
            className="flex max-md:flex-col md:gap-[62px] gap-4"
        >
            <img 
                src={img}
                alt={title}
                className="md:w-[270px] w-full h-[250px] object-cover rounded-[32px]"
            />

            <div className="w-full flex-between">
                <div className="flex flex-1 flex-col max-w-[646px] gap-4">
                    <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
                        {title}
                    </h4>

                    <p className="font-normal lg:text-[20px] text-[14px] text-secondary-white">
                        {subtitle}
                    </p>
                </div>

                <div className="lg:flex hidden justify-center items-center w-[100px] h-[100px] rounded-full bg-transparent border border-white">
                    <img 
                        src="/assets/icons/arrow.svg"
                        alt="arrow"
                        className="w-2/5 h-2/5 object-contain"
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default InsightCard