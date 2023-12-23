"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { staggerContainer } from "@/utils"
import { TypingText, TitleText, ExploreCard } from "@/components"
import { exploreWorlds } from "@/constants"

const Explore = () => {
    const [active, setActive] = useState("world-2")

    return (
        <section
            id="explore"
            className="padding relative z-10"
        >
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="max-width"
            >
                <TypingText 
                    title="| The World"
                    textStyles="text-center"
                />

                <TitleText 
                    title={<>Choose the world you want<br className="max-md:hidden" />{" "}to explore</>}
                    textStyles="text-center"
                />

                <div className="mt-[50px] flex max-lg:flex-col min-h-[70vh] gap-5">
                    {exploreWorlds.map((world, index) => (
                        <ExploreCard 
                            key={world.id}
                            {...world}
                            index={index}
                            active={active}
                            handleClick={setActive}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Explore