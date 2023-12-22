"use client"

import { motion } from "framer-motion"
import { textContainer, textVariant2 } from "@/utils"

const TypingText = ({ title, textStyles }) => {
    return (
        <motion.p
            variants={textContainer}
            className={`font-normal text-[14px] leading-[18px] text-secondary-white ${textStyles}`}
        >
            {Array.from(title).map((text, index) => (
                <motion.span
                    key={index}
                    variants={textVariant2}
                >
                    {text === " " ? "\u00A0" : text}
                </motion.span>
            ))}
        </motion.p>
    )
}

export default TypingText