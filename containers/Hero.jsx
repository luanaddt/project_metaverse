"use client"

import { motion } from "framer-motion"
import { staggerContainer, textVariant, slideIn } from "@/utils"

const Hero = () => {
    return (
        <section className="padding-y 2xl:pl-0 sm:pl-16 pl-6">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="max-width"
            >
                <div className="flex-center flex-col relative z-10">
                    <motion.h1
                        variants={textVariant(1.1)}
                        className="hero__title-heading"
                    >
                        METAVERSE
                    </motion.h1>

                    <motion.div
                        variants={textVariant(1.2)}
                        className="flex-center"
                    >
                        <h1 className="hero__title-heading">
                            MA
                        </h1>

                        <div className="hero__title-d" />

                        <h1 className="hero__title-heading">
                            NESS
                        </h1>
                    </motion.div>
                </div>

                <motion.div
                    variants={slideIn("right", "tween", 0.2, 1)}
                    className="relative md:-mt-5 -mt-3"
                >
                    <div className="absolute w-full h-[300px] hero__image-gradient rounded-tl-[140px] -top-[30px] z-0" />

                    <img 
                        src="/assets/images/cover.png"
                        alt="cover"
                        className="relative w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10"
                    />

                    <div className="flex-end sm:-mt-[70px] -mt-[50px] pr-10 relative z-10">
                        <a href="#explore">
                            <img 
                                src="/assets/images/stamp.png"
                                alt="stamp"
                                className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
                            />
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Hero