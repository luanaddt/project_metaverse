"use client"

import { motion } from "framer-motion"
import { staggerContainer, planetVariants, fadeIn } from "@/utils"
import { TypingText, TitleText, StartSteps } from "@/components"
import { startingFeatures } from "@/constants"

const GetStarted = () => {
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
                    variants={planetVariants("left")}
                    className="flex-center flex-1"
                >
                    <img 
                        src="/assets/images/get-started.png"
                        alt="get started"
                        className="w-[90%] h-[90%] object-contain"
                    />
                </motion.div>

                <motion.div
                    variants={fadeIn("left", "tween", 0.2, 1)}
                    className="flex flex-[0.75] flex-col justify-center"
                >
                    <TypingText title="| How Metaverus Works" />

                    <TitleText title="Get started with just a few clicks" />

                    <div className="mt-6 flex flex-col max-w-sm gap-6">
                        {startingFeatures.map((feature, index) => (
                            <StartSteps 
                                key={`feature-${index}`}
                                number={`${index < 10 ? "0" : ""}${index + 1}`}
                                text={feature}
                            />
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default GetStarted