import React from 'react'
import { FaBold } from "react-icons/fa";

export const Binance = () => {
    return (
        <div className='crypto'>
            <h2>Binance USD</h2>
            <div className="cards">
                <div className="bin">
                    <div className="header">
                        <FaBold />
                        <p>$50.00</p>
                    </div>
                    <h2>Binance US</h2>
                    <button>buy now</button>
                </div>
                <div className="bin">
                    <div className="header">
                        <FaBold />
                        <p>$100.00</p>
                    </div>
                    <h2>Bitcoin US </h2>
                    <button>buy now</button>
                </div>
            </div>
        </div>
    )
}
