import React from 'react';
import './style.css'

function CountryContribution({ countries, totalNumbers }) {
  return (
    <table className='container-table-country-data'>
      <thead>
        <tr>
          <th style={{ border: '1px solid #3398db', padding: '8px' }}>Country</th>
          <th style={{ border: '1px solid #3398db', padding: '8px' }}>Number of Numbers</th>
          <th style={{ border: '1px solid #3398db', padding: '8px' }}>Contribution (%)</th>
        </tr>
      </thead>
      <tbody>
        {countries?.map((country, index) => {
          const contribution = (country.numbers / totalNumbers) * 100;
          return (
            <tr key={index} style={{ overflowY:"auto"}}>
              <td style={{ border: '1px solid #3398db', padding: '8px' }}>{country.name}</td>
              <td style={{ border: '1px solid #3398db', padding: '8px' }}>{country.numbers.toLocaleString()}</td>
              <td style={{ border: '1px solid #3398db', padding: '8px' }}>{contribution.toFixed(2)}%</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default CountryContribution;