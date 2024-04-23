import clsx from "clsx"
import HeaderFilter from "./header-property-filter"
import { useContext } from "react"
import { Context } from "../../context/ModalContext"
import useScrollPosition from "../../hooks/useScrollPosition"
import { motion } from "framer-motion"

function Navbar() {
    const scrollPosition = useScrollPosition()
    const { activeModal } = useContext(Context)


    return (
        <nav >
            <motion.nav
                initial={{ translateY: -20, opacity: 1, scale: 1, top: 0}}
                animate={{ 
                    translateY: scrollPosition > 0 && activeModal === null || activeModal === "" ? -10 : 0,
                    opacity: scrollPosition > 0 && activeModal === null || activeModal === "" ? 0 : 1,
                    scale: scrollPosition > 0 && activeModal === null || activeModal === "" ? 0.4 : 1,
                    top: scrollPosition > 0 && activeModal === null || activeModal === "" ? 10 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut"}}
                className="flex flex-col items-center justify-center"
            >
                <ul className={clsx("items-center flex text-[#717171] px-6 py-4 mb-3 transition-all", {
                    "py-0 hidden": scrollPosition > 0 && activeModal === null || activeModal === "",
                })}>
                    <li><a href="/" className="p-4 hover:bg-[#f7f7f7] rounded-full">Konaklama yerleri</a></li>
                    <li><a href="/" className="p-4 hover:bg-[#f7f7f7] rounded-full">Deneyimler</a></li>
                    <li><a href="/" className="p-4 hover:bg-[#f7f7f7] rounded-full">Çevrim içi deneyimler</a></li>
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