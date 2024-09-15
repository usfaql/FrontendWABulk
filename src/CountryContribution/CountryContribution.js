import React, { useState } from 'react';
import './style.css'

function CountryContribution({ countries, totalNumbers }) {
  const [sortOrder, setSortOrder] = useState('desc');

  const sortData = () => {
    if (!countries || countries.length === 0) return [];  

    const sortedCountries = [...countries].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.numbers - b.numbers;
      } else {
        return b.numbers - a.numbers; 
      }
    });
    return sortedCountries;
  };

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  const sortedCountries = sortData();

  return (
    <table className='container-table-country-data'>
      <thead>
        <tr>
          <th style={{ border: '1px solid #3398db', padding: '8px' }}>Country</th>
          <th style={{ border: '1px solid #3398db', padding: '8px', cursor: 'pointer' }} onClick={toggleSortOrder}>
            Number of Numbers
            {sortOrder === 'asc' ? ' ↑' : ' ↓'} {/* Display sort direction */}
          </th>
          <th style={{ border: '1px solid #3398db', padding: '8px' }}>Contribution (%)</th>
        </tr>
      </thead>
      <tbody>
        {sortedCountries?.map((country, index) => {
          const contribution = (country.numbers / totalNumbers) * 100;
          return (
            <tr key={index} style={{ overflowY: 'auto' }}>
              <td style={{ border: '1px solid #3398db', padding: '8px' }}>{country.name}</td>
              <td style={{ border: '1px solid #3398db', padding: '8px' }}>{country.numbers.toLocaleString()}</td>
              <td style={{ border: '1px solid #3398db', padding: '8px' }}>{contribution.toFixed(2)}%</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CountryContribution;
