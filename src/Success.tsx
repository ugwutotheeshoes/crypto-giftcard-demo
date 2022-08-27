import React from 'react'
import { Link } from "react-router-dom";


export const Success = () => {
  return (
    <div className="error-container">
      <h2>PAYMENT WAS SUCCESSFUL</h2>
      <div className="error">
        <Link to='/'>
          GO BACK HOME
        </Link>
      </div>
    </div>
  )
}