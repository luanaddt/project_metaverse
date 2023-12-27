"use client"

import { motion } from "framer-motion"
import { staggerContainer, fadeIn, zoomIn } from "@/utils"

const Feedback = () => {
    return (
        <section className="padding relative z-10">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="max-width flex max-lg:flex-col gap-6"
            >
                <motion.div
                    variants={fadeIn("right", "tween", 0.2, 1)}
                    className="flex-end flex-[0.5] flex-col lg:max-w-[370px] feedback-gradient sm:p-8 p-4 rounded-[32px] border border-[#6A6A6A] relative"
                >
                    <div className="feedback__content-gradient" />

                    <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-10 leading-9 text-white capitalize">
                        Samantha
                    </h4>

                    <p className="mt-2 font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-4 text-white capitalize">
                        Founder Metaverus
                    </p>

                    <p className="mt-6 font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
                        “With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”
                    </p>
                </motion.div>

                <motion.div
                    variants={fadeIn("left", "tween", 0.2, 1)}
                    className="relative flex-center flex-1"
                >
                    <img 
                        src="/assets/images/planet-09.png"
                        alt="planet"
                        className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
                    />

                    <motion.div
                        variants={zoomIn(0.4, 1)}
                        className="max-lg:hidden absolute top-[3%] -left-[10%]"
                    >
                        <img 
                            src="/assets/images/stamp.png"
                            alt="stamp"
                            className="w-[155px] h-[155px] object-contain"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Feedback