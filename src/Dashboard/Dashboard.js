import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Goal from '../GoalComponant/Goal';
import CountryContribution from '../CountryContribution/CountryContribution';
import axios from 'axios';
import './style.css'
import RealTimeFeed from '../RealTimeFeed/RealTimeFeed';
function Dashboard() {
    const navigate = useNavigate();
    const [countries, setCountries] = useState(null);
    


    useEffect(()=>{
        axios.get(`https://serverwabulk.onrender.com/getcountcountry`).then((result) => {
            setCountries(result.data.data)
            console.log(result);
            
        }).catch((err) => {
            
        });
    },[]);
      const totalNumbers = countries?.reduce((acc, country) => acc + country.numbers, 0);
  return (
    <div className='container-dashboard'>
      <div className='welcome'>Welcome To WABulk</div>
      
      <Goal totalNumbers={totalNumbers} />
      <div className='container-information'>
        <div className='container-contribution'>
            <CountryContribution countries={countries} totalNumbers={totalNumbers} />
        </div>
        <button className='btn-go-data' onClick={() =>{navigate('/data')}}>show All Data</button>
        <RealTimeFeed/>
      </div>
    
    </div>
  )
}

export default Dashboard
