import React from 'react'
import pan from '../../../assets/images/pan.png'
import bnb from '../../../assets/images/bnb.png'
const FarmsCardHeader = () => {
  return (
    <div>
      <div
        className="h-full  flex flex-row
           justify-evenly items-center "
      >
        <div className="farmImgescontainer">
          <img src={bnb} height={35} width={35} className="relative mt-[15px] -ml-1 z-0" alt="bnb" />
          <img src={pan} height={50} width={50} alt="pan" className="relative z-10 -mt-2 " />
        </div>
        <div className="farmTitleOptions flex-1 flex flex-col gap-2 justify-end items-end">
          <div className="title  custfont text-xl font-bold text-white ">USDT-ETH</div>
        </div>
      </div>
    </div>
  )
}

export default FarmsCardHeader
