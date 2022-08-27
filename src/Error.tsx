import React from 'react'
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div className="error-container">
      <h2>ERROR: PAYMENT WAS UNSUCCESSFUL</h2>
      <div className="error">
        <Link to='/'>
          GO BACK HOME
        </Link>
      </div>
    </div>
  )
}