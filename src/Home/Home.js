import React, { useState } from 'react'
import './style.css'
import LeftControl from '../LeftControl/LeftControl'
import ShowData from '../ShowData/ShowData'
function Home() {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const toggleSidebar = () => {
      setIsSidebarVisible(!isSidebarVisible);
    };
    const CountrySelect = (country) =>{
        setSelectedCountry(country);
    }
  return (
    <div className='container-home'>
      <LeftControl onCountrySelect={CountrySelect}
              isSidebarVisible={isSidebarVisible} 
              toggleSidebar={toggleSidebar}/>
      <ShowData selectedCountry={selectedCountry}
              isSidebarVisible={isSidebarVisible} 
              toggleSidebar={toggleSidebar}/>
    </div>
  )
}

export default Home
