import React from 'react'
import FarmsCardHeader from './FarmsCardHeader'
import APR from './APR'
const FarmsCard = () => {
  return (
    <div className=" md:w-1/3 p-2 ">
      <div
        className="main border px-5 py-2
            rounded-[20px] 
              overflow-hidden cardbg shadow-inner shadow-[#00ffff]"
      >
        <FarmsCardHeader />
        <APR />
        <div
          className="farmAprContainer 
        mt-2 flex flex-row justify-center items-center
        md:w-[80%]  mx-auto md:pl-2  pl-7"
        >
          <div className="farmApr flex-1 custfont font-thin text-white">Earn: RSHIB + Fees</div>
        </div>
        {/* end earn container */}
        <hr className="text-white" />
        <span className="custfont mt-2 text-[12px] font-bold text-[#00ffff]">RSHIB EARNED:</span>
        {/* harvest value */}
        <div
          className="harVestContainer mt-2 flex flex-row justify-center items-center
        md:w-[80%]  mx-auto md:pl-2  pl-7"
        >
          <div className="farmApr flex-1 text-white text-2xl custfont font-extrabold">0.00000</div>
          <div className=" flex-1 ">
            {/* #00ffff */}
            <button className="harvestbtn">Harvest</button>
          </div>
        </div>
        {/* end harvest value */}
        {/* tooltip value */}
        <div className="tooltipContainer flex flex-col gap-1 justify-start items-start">
          <p className="custfont text-white font-semibold text-[14px]">
            <span className="text-white]"> USDT-ETH LP</span> STAKED:
            <div className="farmApr flex-1 text-white text-2xl custfont font-extrabold">0.0</div>
          </p>
        </div>
        {/* end tooltip value */}
        <button className="walletbtn">Stake</button>
        <br />

        <hr className="text-white" />
        {/* dropdown start */}

        {/* end  dropdown start */}
      </div>
    </div>
  )
}

export default FarmsCard
