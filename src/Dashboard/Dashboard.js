import React, { useEffect, useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Goal from '../GoalComponant/Goal';
import CountryContribution from '../CountryContribution/CountryContribution';
import axios from 'axios';
import './style.css'
import RealTimeFeed from '../RealTimeFeed/RealTimeFeed';
import { userContext } from "../App"
function Dashboard() {
    
    const navigate = useNavigate();
    const [countries, setCountries] = useState(null);
    const {token} = useContext(userContext);
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
        <div style={{display:"flex", flexDirection:"column", justifyContent:"start",gap:"5%", alignItems:"center",width: "50%"}}>
        {/*<button className='btn-go-data' onClick={() =>{navigate('/data')}}>عرض الارقام</button>*/}
        <button className='btn-go-data' onClick={() =>{navigate('/add-number')}}>اضافة ارقام</button>
        <button className='btn-go-data' onClick={() =>{navigate('/sheet')}}>جدول البيانات</button>

        </div>
       
        <RealTimeFeed/>
      </div>
    
    </div>
  )
}

export default Dashboard
