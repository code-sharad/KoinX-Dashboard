import './App.css'
import Navbar from './components/Navbar'
import GreaterSvg from './components/GreaterSvg'
import BitcoinLogo from './assets/BitcoinLogo.png'
import CryptoGraph from './components/CryptoGrap'
import GetStart from './components/GetStart'
import TreadingCoin from './components/TreadingCoin'
import Performance from './components/Performance'
import Fundamentals from "./components/Fundamentals"
import newsIcon from "./assets/newsicon.png"
import growth from "./assets/growth.png"
import { Carousel } from "@material-tailwind/react";
import Ploygon from './components/Ploygon'
import InfoIcon from "./components/infoIcon"

import { motion } from "framer-motion"

function App() {

  return (
    <>
      <Navbar />
      <main className='bg-[#f0f2f5] '>
        <motion.p initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} className='flex items-center gap-2 ml-9 py-2 text-[#435664]'>Cryptocurrencies  <GreaterSvg /> <span className=' text-black '>Bitcoin</span></motion.p>

        <div className='flex pr-9'>
          <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }} className='mx-9'>
            <div className='bg-white h-[90vh] rounded  py-4 px-8  flex flex-col gap-7 '>
              <div className='flex gap-8 items-center'>
                <span className='flex gap-3 items-center text-slate-400'><img src={BitcoinLogo} />      <span className='text-black'>BITCOIN</span > BTC
                </span>
                <span className='bg-[#788394] text-white px-2 py-1  rounded'>Rank#1</span>
              </div>
              <div className='flex gap-12 items-start'>
                <span className='text-black text-2xl flex flex-col gap-1 '><span className='flex items-center gap-2'>$46,953.04 <span className='bg-[#eef9f4] flex items-center gap-2 text-[#51ad7d] px-3 py-1 rounded text-sm '><Ploygon /> 2.51%</span><span className='text-sm text-blue-gray-600'>(24h)</span></span>
                  <span className='text-lg'> ₹39,42,343</span>
                </span>

              </div>
              <div className='flex justify-between w-[840px] items-center'>
                <h2>Bitcoin Price Chart (USD)</h2>
                <ul className='flex items-center gap-3 text-blue-gray-500 text-sm'>
                  <li>1H</li>
                  <li>24H</li>
                  <li className='rounded-xl bg-[#e4ecfc] text-[#1940c7] px-3 py-1'>7D</li>
                  <li>1M</li>
                  <li>3M</li>
                  <li>6H</li>
                  <li>1Y</li>
                  <li>ALL</li>
                </ul>
              </div>
              <CryptoGraph />
            </div>
            <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }} className='text-black  bg-white my-3 rounded py-4 px-4'>
              <h1 className='font-semibold text-2xl'>Performance</h1>
              <div className='py-4 flex flex-col gap-4'>
                <Performance />
                <Fundamentals />

              </div>

            </motion.div>
            <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className='flex flex-col gap-4 bg-white   my-3 rounded py-4 px-12 '>
              <h1 className='font-bold text-2xl'>Sentiment</h1>
              <p className='text-gray-500 text-xl flex items-center gap-2'>Key Events <InfoIcon /> </p>
              <Carousel className="rounded-xl ">
                <div className='relative h-full w-full bg-blue-50 p-3 flex items-start gap-6 '>
                  <img width="40" height="40" src={newsIcon} />
                  <div className=''>
                    <h1 className='text-xl py-1 '>Voluptas quo maxime praesentium.</h1>
                    <p className='text-blue-gray-300'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quia repellendus provident voluptates ea perferendis et sint error similique recusandae veritatis voluptatem, veniam quam totam aliquam. Id similique fugit voluptatem.
                      Quia eos veniam neque dignissimos fuga consequuntur illo autem, dolor alias incidunt sapiente officiis ipsam amet pariatur facere. Voluptates ducimus quasi suscipit illo inventore facilis sed dicta ratione quia doloribus?
                      Voluptas quo maxime praesentium. Ipsa aut blanditiis saepe inventore molestias id harum pariatur dolore eos alias quis, eligendi a fuga suscipit, ex repellendus totam, numquam vero iusto! Facere, delectus quis!</p>
                  </div>
                </div>
                <div className='relative h-full w-full bg-[#eef9f4] p-3 flex items-start gap-6 '>
                  <img width="40" height="40" src={growth} />
                  <div className=''>
                    <h1 className='text-xl py-1 '>Voluptas quo maxime praesentium.</h1>
                    <p className='text-blue-gray-300'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quia repellendus provident voluptates ea perferendis et sint error similique recusandae veritatis voluptatem, veniam quam totam aliquam. Id similique fugit voluptatem.
                      Quia eos veniam neque dignissimos fuga consequuntur illo autem, dolor alias incidunt sapiente officiis ipsam amet pariatur facere. Voluptates ducimus quasi suscipit illo inventore facilis sed dicta ratione quia doloribus?
                      Voluptas quo maxime praesentium. Ipsa aut blanditiis saepe inventore molestias id harum pariatur dolore eos alias quis, eligendi a fuga suscipit, ex repellendus totam, numquam vero iusto! Facere, delectus quis!</p>
                  </div>
                </div>

              </Carousel>
              <div className='py-9 flex flex-col gap-8 justify-start mx-2'>
                <h2 className='text-[#454759] text-xl flex items-center gap-2'>Analyst Estimates <InfoIcon /></h2>
                <div className='flex items-center gap-4'>
                  <div className='w-44 h-44 bg-[#eef9f4] text-[#55b787] rounded-full flex items-center justify-center text-6xl'>
                    76%
                  </div>
                  <div className=''>
                    <div className='flex items-center gap-6'>
                      <p className='mr-2'>Buy</p>
                      <div className='h-2 w-80 bg-green-500 rounded-sm'></div>
                      76%
                    </div>
                    <div className='flex items-center gap-6 '>
                      <p>Hold</p>
                      <div className='h-2 w-16 bg-gray-500 rounded-sm'></div>
                      8%
                    </div>
                    <div className='flex items-center gap-6'>
                      <p className='mr-2'>Sell</p>
                      <div className='h-2 w-32 bg-red-500 rounded-sm'></div>
                      16%
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className=''>
            <GetStart />
            <TreadingCoin />
          </div>


        </div>


      </main >

    </>
  )
}


export default App
