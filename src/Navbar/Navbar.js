import React, { useEffect, useContext, useState,createContext } from 'react'
import './style.css'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
function Navbar() {
  const {token} = useContext(userContext);
  const navigate = useNavigate()
  const downloadAllCsv = async () => {
  const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    
    try {
        const response = await fetch("https://serverwabulk.onrender.com/download-csv", config);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        // Create a temporary <a> element to trigger the download
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'phone_numbers.csv');  // Specify the file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);  // Clean up the link after triggering download
    } catch (error) {
        console.error('Error downloading CSV:', error);
    }
};
  return (
    <div className='container-nav'>
      <div className='title' onClick={()=>{navigate('/')}}>
        WABulk
      </div>
      <button className="download-all-data" onClick={downloadAllCsv}>
        Download All Data
      </button>
    </div>
  )
}

export default Navbar
