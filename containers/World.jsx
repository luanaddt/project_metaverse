"use client"

import { motion } from "framer-motion"
import { staggerContainer, fadeIn } from "@/utils"
import { TypingText, TitleText } from "@/components"

const World = () => {
    return (
        <section className="padding">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="max-width"
            >
                <TypingText 
                    title="| People on the World"
                    textStyles="text-center"
                />

                <TitleText 
                    title="Track friends around you and invite them to play together in the same world"
                    textStyles="text-center"
                />

                <motion.div
                    variants={fadeIn("up", "tween", 0.3, 1)}
                    className="mt-[68px] relative h-[550px]"
                >
                    <img 
                        src="/assets/images/map.png"
                        alt="map"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute bottom-20 right-20 w-[70px] h-[70px] rounded-full p-[6px] bg-[#5D6680]">
                        <img 
                            src="/assets/images/people-01.png"
                            alt="people"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <div className="absolute top-10 left-20 w-[70px] h-[70px] rounded-full p-[6px] bg-[#5D6680]">
                        <img 
                            src="/assets/images/people-02.png"
                            alt="people"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] rounded-full p-[6px] bg-[#5D6680]">
                        <img 
                            src="/assets/images/people-03.png"
                            alt="people"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default World