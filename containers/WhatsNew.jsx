"use client"

import { motion } from "framer-motion"
import { staggerContainer, planetVariants, fadeIn } from "@/utils"
import { TypingText, TitleText, NewFeatures } from "@/components"
import { newFeatures } from "@/constants"

const WhatsNew = () => {
    return (
        <section className="padding relative z-10">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="max-width flex max-lg:flex-col gap-8"
            >
                <motion.div
                    variants={fadeIn("right", "tween", 0.2, 1)}
                    className="flex flex-[0.95] flex-col justify-center"
                >
                    <TypingText title="| Whats New?" />

                    <TitleText title="What's new about Metaversus?" />

                    <div className="mt-12 flex flex-wrap justify-between gap-6">
                        {newFeatures.map((feature) => (
                            <NewFeatures 
                                key={feature.title}
                                {...feature}
                            />
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    variants={planetVariants("right")}
                    className="flex-center flex-1"
                >
                    <img 
                        src="/assets/images/whats-new.png"
                        alt="whats new"
                        className="w-[90%] h-[90%] object-contain"
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default WhatsNew