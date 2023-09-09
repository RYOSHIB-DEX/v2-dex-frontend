import React from 'react'

import { IoRocket } from 'react-icons/io5'
const APR = () => {
  return (
    <div>
      <div className="farmAprContainer mt-4 flex flex-row justify-evenly items-center">
        <div className="farmApr custfont text-white">APR:</div>
        <div className="farmAprValues flex flex-row justify-center gap-4 items-center">
          <span className="flex gap-2 text-[#00ffff] custfont justify-center items-center">
            <IoRocket className="text-[#00ffff] " />
            Up to 5%
          </span>
        </div>
      </div>
    </div>
  )
}

export default APR
