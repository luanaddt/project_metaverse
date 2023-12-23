"use client"

import { motion } from "framer-motion"
import { textVariant2 } from "@/utils"

const TitleText = ({ title, textStyles }) => {
    return (
        <motion.h2
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
            className={`mt-2 font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
        >
            {title}
        </motion.h2>
    )
}

export default TitleText