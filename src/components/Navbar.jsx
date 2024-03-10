
import logo from "../assets/KoinXLogo.png"
import { motion } from "framer-motion"
function Navbar() {
    return (
        <motion.nav initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="flex justify-between items-center border-2 py-3 px-8">
            <ul>
                <img height={"100"} width="100" src={logo} alt="" />
            </ul>
            <ul className="flex gap-8 items-center">
                <li className="cursor-pointer">Crypto Taxes</li>
                <li className="cursor-pointer">Free Tools</li>
                <li className="cursor-pointer">Resources Center </li>
                <button className="rounded-lg bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] px-4 py-2">Get Started</button>
            </ul>
        </motion.nav>
    )
}

export default Navbar