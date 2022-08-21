import React from 'react'
import { FaBitcoin } from "react-icons/fa";

export const Bitcoin = () => {
  return (
    <div className='crypto'>
      <h2>Bitcoin USD</h2>
      <div className="cards">
        <div className="bin">
          <div className="header">
            <FaBitcoin />
            <p>$50.00</p>
          </div>
          <h2>Bitcoin US</h2>
          <button>buy now</button>
        </div>
        <div className="bin">
          <div className="header">
            <FaBitcoin />
            <p>$100.00</p>
          </div>
          <h2>Bitcoin US </h2>
          <button>buy now</button>
        </div>
      </div>
    </div>
  )
}
