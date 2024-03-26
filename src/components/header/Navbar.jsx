import clsx from "clsx"
import HeaderFilter from "./header-property-filter"

import useScrollPosition from "../../hooks/useScrollPosition"
import { motion } from "framer-motion"

function Navbar() {
    const scrollPosition = useScrollPosition()


    return (
        <nav >
            <motion.nav
                initial={{ translateY: -20, opacity: 1, scale: 1, top: 0}}
                animate={{ 
                    translateY: scrollPosition > 0 ? -10 : 0,
                    opacity: scrollPosition > 0 ? 0 : 1,
                    scale: scrollPosition > 0 ? 0.4 : 1,
                    top: scrollPosition > 0 ? 10 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut"}}
                
                className="flex flex-col items-center justify-center "
            >
                <ul className={clsx("flex items-center text-[#717171] px-6 py-4", {
                    "py-0 hidden ": scrollPosition > 0,
                })}>
                    <li><a href="/" className="px-4 py-2.5 hover:bg-[#ebebeb] rounded-full">Konaklama yerleri</a></li>
                    <li><a href="/" className="px-4 py-2.5 hover:bg-[#ebebeb] rounded-full">Deneyimler</a></li>
                    <li><a href="/" className="px-4 py-2.5 hover:bg-[#ebebeb] rounded-full">Çevrim içi deneyimler</a></li>
                </ul>
            </motion.nav>
            <motion.div 
                initial={{ translateY: 0}}
                animate={{ 
                    translateY: scrollPosition > 0 ? -0 : 0,

                 }}
                transition={{ 
                    duration: 0.3, // burada süreyi uzattık
                    ease: "linear"
                }}
            >
                <HeaderFilter />
            </motion.div>
        </nav>
    )
}

export default Navbar