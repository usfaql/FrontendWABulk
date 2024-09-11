import React from 'react'
import './style.css'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
function Navbar() {
  const navigate = useNavigate()

  return (
    <div className='container-nav'>
      <div className='title' onClick={()=>{navigate('/')}}>
        WABulk
      </div>
      <button className="download-all-data">
        <a href="https://serverwabulk.onrender.com/download-csv" download="phone_numbers.csv">
        Download All Data
        </a>
      </button>
    </div>
  )
}

export default Navbar
