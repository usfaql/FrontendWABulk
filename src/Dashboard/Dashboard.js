import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Goal from '../GoalComponant/Goal';
import CountryContribution from '../CountryContribution/CountryContribution';
import axios from 'axios';
import './style.css'
import RealTimeFeed from '../RealTimeFeed/RealTimeFeed';
import { userContext } from "../App"
function Dashboard() {
        const { token} = useContext(userContext);
    const navigate = useNavigate();
    const [countries, setCountries] = useState(null);
     const config = {
        headers: { Authorization: `Bearer ${token}` }
    };


    useEffect(()=>{
        axios.get(`https://serverwabulk.onrender.com/getcountcountry`, config).then((result) => {
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
        <div style={{display:"flex", flexDirection:"column", justifyContent:"start",gap:"5%", alignItems:"center"}}>
        <button className='btn-go-data' onClick={() =>{navigate('/data')}}>show All Data</button>
        <img style={{width:"60%", borderRadius:"8px", boxShadow:"0px 0px 10px 1px #2b2b2b"}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/%D9%85%D9%87%D9%86%D8%AF_%D8%A7%D8%B3%D9%85%D8%A7%D8%B9%D9%8A%D9%84.jpg/903px-%D9%85%D9%87%D9%86%D8%AF_%D8%A7%D8%B3%D9%85%D8%A7%D8%B9%D9%8A%D9%84.jpg'/>
        </div>
       
        <RealTimeFeed/>
      </div>
    
    </div>
  )
}

export default Dashboard
