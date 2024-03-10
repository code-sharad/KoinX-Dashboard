import Ploygon from "./Ploygon"
import { motion } from "framer-motion"
function TreadingCoin() {
    return (
        <motion.div initial={{ x: 100, opacity: 0.00001 }} animate={{ x: -20, opacity: 1 }} transition={{ delay: 0.6 }} className="bg-white p-3 my-6  rounded flex  flex-col gap-3" >
            <h1 className="text-xl font-semibold">Treading Coins (24H)</h1>
            <div className="flex  flex-col mx-9 gap-1 justify-center items-start">
                <div className="flex gap-6">
                    Ethereum(ETH)
                    <span className='bg-green-50 text-green-500 px-3 rounded p-1 flex items-center gap-1'><Ploygon /> 8.21%
                    </span>
                </div>

                <div className="flex gap-[39px]">
                    Bitcoin (BTC)
                    <span className='bg-green-50 text-green-500 px-3 rounded p-1 flex items-center gap-1'>  <Ploygon />5.26%  </span>
                </div>
                <div className="flex gap-[12px]">
                    Polygon (MATIC)
                    <span className='bg-green-50 text-green-500 px-3 rounded p-1 flex items-center gap-1'> <Ploygon /> 4.32%
                    </span>
                </div>
            </div>
        </motion.div>
    )
}

export default TreadingCoin