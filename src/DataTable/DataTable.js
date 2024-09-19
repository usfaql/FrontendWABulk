import React, { useState, useEffect, useContext } from 'react';
import { userContext } from '../App';
import LazyLoad from 'react-lazyload';
import './style.css';
import axios from 'axios';


const backgroundColors = ['#ADD8E6', '#D8BFD8', '#90EE90', '#FFB6C1'];


const DataTable = () => {
  const { token } = useContext(userContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cetrruntCategory, setCetrruntCategoryCategory] = useState('arabic_countries');
  const [selectedCategory, setSelectedCategory] = useState('arabic_countries');

  const [page, setPage] = useState({}); // Store page number for each country

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  // Update fetchData to handle fetching all data or specific country data
  const fetchData = async (category, country = null, pageNumber = 1) => {
    try {
      // If country is null, fetch all data for the category; otherwise, fetch specific country data
      const requestData = country 
        ? { collectionName: category, country ,page: pageNumber } 
        : { collectionName: category };
        if(cetrruntCategory !== selectedCategory){
            setData([])
        }
      const result = await axios.post("https://serverwabulk.onrender.com/getcollection", requestData, config);
      if (result.data.status) {
        const datas = result.data.data;
        setCetrruntCategoryCategory(selectedCategory)
        setData(prevData => {
          // Create a dictionary of existing countries for quick lookup
          const dataMap = new Map(prevData.map(d => [d.country, d]));

          // Update the existing data or add new countries
          datas.forEach(d => {
            if (dataMap.has(d.country)) {
              // If the country already exists, merge the numbers
              const existingCountry = dataMap.get(d.country);
              dataMap.set(d.country, {
                ...existingCountry,
                numbers: [...existingCountry.numbers, ...d.numbers]
              });
            } else {
              // If the country does not exist, add it
              dataMap.set(d.country, d);
            }
          });

          // Convert the map back to an array
          return Array.from(dataMap.values());
        });

        // Update the page state for the specific country
        if (country) {
          setPage(prevPage => ({
            ...prevPage,
            [country]: pageNumber
          }));
        }

        setLoading(false);
      } else {
        setError(result.data.message);
        setLoading(false);
      }
    } catch (err) {
      
      setError('Error fetching data');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(selectedCategory);
  }, [selectedCategory]);

  const handleLoadMore = (country) => {
    const currentPage = page[country] || 1;
    console.log(country);
    
    fetchData(selectedCategory, country, currentPage + 1);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div style={{display:"flex", width:"100%", justifyContent:"center", alignItems:"center", gap:"10px", marginTop:"10px"}}>
        <button className='country-btn' onClick={() => setSelectedCategory('arabic_countries')}>الدول العربية</button>
        <button className='country-btn' onClick={() => setSelectedCategory('african_countries')}>الدول الافريقية</button>
        <button className='country-btn' onClick={() => setSelectedCategory('european_countries')}>الدول الاوروبية</button>
        <button className='country-btn' onClick={() => setSelectedCategory('american_countries')}>الدول الامريكية</button>
        <button className='country-btn' onClick={() => setSelectedCategory('asian_countries')}>اسيا</button>
      </div>
      <h1>{selectedCategory === 'arabic_countries' && 'الدول العربية'}
  {selectedCategory === 'european_countries' && 'الدول الأوروبية'}
  {selectedCategory === 'african_countries' && 'الدول الإفريقية'}
  {selectedCategory === 'american_countries' && 'الدول الأمريكية'}
  {selectedCategory === 'asian_countries' && 'الدول الآسيوية'}</h1>
      <LazyLoad height={200} offset={100}>
        <div className="data-grid">
          {data.map((row, index) => (
            <div className="data-row" key={index}>
              <div className="data-cell country">{row.country} ({row.totalCount})</div>
              {row.numbers.map((number, idx) => {
                // حساب لون الخلفية بناءً على مجموعة الرقم
                const groupIndex = Math.floor(idx / 200);
                const backgroundColor = backgroundColors[groupIndex % backgroundColors.length]; // استخدام الألوان المتاحة بالتناوب
                return (
                  <div 
                    key={idx}
                    className="data-cell"
                    style={{ backgroundColor: backgroundColor }}
                  >
                    {number}

                  </div>
                );
              })}
               {row.numbers.length > 199 && (
                    <button className='load-btn' onClick={() => handleLoadMore(row.country)}>Load More for {row.country} ({row.numbers.length})</button>
                )}
            </div>
          ))}
        </div>
      </LazyLoad>
    </div>
  );
};

export default DataTable;
