import React from 'react'
import { Link } from "react-router-dom";

const Footer = ({ to, buttonText }) => {

  return (
    <div className="w-full mt-4 flex justify-center items-center sticky bottom-0 left-0 overflow-y-auto">
        <div className="w-[100%]  flex flex-col px-3 py-5 bg-white rounded-xl">
          <button
            className="bg-blue-600 text-white rounded-xl py-4 hover:bg-blue-800"
          >
            <Link to={to}>
            {buttonText} 
            </Link>
          </button>
        </div>
      </div>
  )
}

export default Footer