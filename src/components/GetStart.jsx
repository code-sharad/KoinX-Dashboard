import GetstartedImg from "./GetstartedImg"
import { motion } from "framer-motion"

function GetStart() {
    return (
        <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: -20, opacity: 1 }} transition={{ delay: 0.4 }} className='bg-[#2151f5]  h-[515px] px-8 flex flex-col gap-6 justify-center items-center  text-white rounded'>
            <h1 className="text-xl font-bold w-full text-center ">Get Started with KoinX for FREE</h1>  <p className="">With our range of features that you can equip for free,
                KoinX allows you to be more educated and aware of your tax reports.</p>
            <GetstartedImg />
            <button className="bg-white rounded text-black py-2 px-3">Get Started for FREE
            </button></motion.div>
    )
}

export default GetStart