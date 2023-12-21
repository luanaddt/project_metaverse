"use client"

import { motion } from "framer-motion"
import { navVariants } from "@/utils"

const Navbar = () => {
    return (
        <motion.nav
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            className="padding-x py-8 relative"
        >
            <div className="absolute w-1/2 inset-0 navbar-gradient" />

            <div className="max-width flex justify-between">
                <img 
                    src="/assets/icons/search.svg"
                    alt="search"
                    className="w-6 h-6 object-contain"
                />

                <h2 className="font-extrabold text-[24px] leading-[30px] text-white uppercase">
                    METAVERSUS
                </h2>

                <img 
                    src="/assets/icons/menu.svg"
                    alt="menu"
                    className="w-6 h-6 object-contain"
                />
            </div>
        </motion.nav>
    )
}

export default Navbar