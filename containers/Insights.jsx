"use client"

import { motion } from "framer-motion"
import { staggerContainer } from "@/utils"
import { TypingText, TitleText, InsightCard } from "@/components"
import { insights } from "@/constants"

const Insights = () => {
    return (
        <section className="padding relative z-10">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="max-width"
            >
                <TypingText 
                    title="| Insight"
                    textStyles="text-center"
                />

                <TitleText 
                    title="Insight about metaverse"
                    textStyles="text-center"
                />

                <div className="mt-[50px] flex flex-col gap-[30px]">
                    {insights.map((insight, index) => (
                        <InsightCard 
                            key={`insight-${index}`}
                            {...insight}
                            index={index + 1}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Insights