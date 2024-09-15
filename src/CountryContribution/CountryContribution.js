import React, { useState } from 'react';
import './style.css'

function CountryContribution({ countries, totalNumbers }) {
  const [sortOrder, setSortOrder] = useState('desc');

  const countryFlags = {
    Algeria: 'https://flagcdn.com/dz.svg',
    'Western-Sahara': 'https://flagcdn.com/eh.svg',
    Morocco: 'https://flagcdn.com/ma.svg',
    Tunisia: 'https://flagcdn.com/tn.svg',
    Libya: 'https://flagcdn.com/ly.svg',
    Iceland: 'https://flagcdn.com/is.svg',
    Mauritania: 'https://flagcdn.com/mr.svg',
    Syria: 'https://flagcdn.com/sy.svg',
    Lebanon: 'https://flagcdn.com/lb.svg',
    Jordan: 'https://flagcdn.com/jo.svg',
    Palestine: 'https://flagcdn.com/ps.svg',
    Israel: 'https://flagcdn.com/il.svg',
    Iraq: 'https://flagcdn.com/iq.svg',
    'Saudi-Arabia': 'https://flagcdn.com/sa.svg',
    UAE: 'https://flagcdn.com/ae.svg',
    Kuwait: 'https://flagcdn.com/kw.svg',
    Qatar: 'https://flagcdn.com/qa.svg',
    Oman: 'https://flagcdn.com/om.svg',
    Bahrain: 'https://flagcdn.com/bh.svg',
    Yemen: 'https://flagcdn.com/ye.svg',
    Egypt: 'https://flagcdn.com/eg.svg',
    Sudan: 'https://flagcdn.com/sd.svg',
    'South-Sudan': 'https://flagcdn.com/ss.svg',
    Comoros: 'https://flagcdn.com/km.svg',
    Chad: 'https://flagcdn.com/td.svg',
    Turkey: 'https://flagcdn.com/tr.svg',
    Belgium: 'https://flagcdn.com/be.svg',
    Switzerland: 'https://flagcdn.com/ch.svg',
    France: 'https://flagcdn.com/fr.svg',
    Germany: 'https://flagcdn.com/de.svg',
    Luxembourg: 'https://flagcdn.com/lu.svg',
    Italy: 'https://flagcdn.com/it.svg',
    'San-Marino': 'https://flagcdn.com/sm.svg',
    Vatican: 'https://flagcdn.com/va.svg',
    Spain: 'https://flagcdn.com/es.svg',
    Andorra: 'https://flagcdn.com/ad.svg',
    Bulgaria: 'https://flagcdn.com/bg.svg',
    Gibraltar: 'https://flagcdn.com/gi.svg',
    Ireland: 'https://flagcdn.com/ie.svg',
    Albania: 'https://flagcdn.com/al.svg',
    Malta: 'https://flagcdn.com/mt.svg',
    Netherlands: 'https://flagcdn.com/nl.svg',
    Poland: 'https://flagcdn.com/pl.svg',
    Belarus: 'https://flagcdn.com/by.svg',
    Kyrgyzstan: 'https://flagcdn.com/kg.svg',
    Ukraine: 'https://flagcdn.com/ua.svg',
    Serbia: 'https://flagcdn.com/rs.svg',
    Montenegro: 'https://flagcdn.com/me.svg',
    Kosovo: 'https://flagcdn.com/xk.svg',
    Croatia: 'https://flagcdn.com/hr.svg',
    Slovenia: 'https://flagcdn.com/si.svg',
    'Bosnia-and-Herzegovina': 'https://flagcdn.com/ba.svg',
    'North-Macedonia': 'https://flagcdn.com/mk.svg',
    Moldova: 'https://flagcdn.com/md.svg',
    Greece: 'https://flagcdn.com/gr.svg',
    Cyprus: 'https://flagcdn.com/cy.svg',
    Lithuania: 'https://flagcdn.com/lt.svg',
    Latvia: 'https://flagcdn.com/lv.svg',
    Estonia: 'https://flagcdn.com/ee.svg',
    Finland: 'https://flagcdn.com/fi.svg',
    Norway: 'https://flagcdn.com/no.svg',
    Sweden: 'https://flagcdn.com/se.svg',
    Denmark: 'https://flagcdn.com/dk.svg',
    'United-Kingdom': 'https://flagcdn.com/gb.svg',
    'United-States-and-Canada': 'https://flagcdn.com/us.svg',
    Belize: 'https://flagcdn.com/bz.svg',
    Guatemala: 'https://flagcdn.com/gt.svg',
    'El-Salvador': 'https://flagcdn.com/sv.svg',
    Honduras: 'https://flagcdn.com/hn.svg',
    Nicaragua: 'https://flagcdn.com/ni.svg',
    'Costa-Rica': 'https://flagcdn.com/cr.svg',
    Panama: 'https://flagcdn.com/pa.svg',
    Haiti: 'https://flagcdn.com/ht.svg',
    Guadeloupe: 'https://flagcdn.com/gp.svg',
    Martinique: 'https://flagcdn.com/mq.svg',
    'Dutch-Caribbean': 'https://flagcdn.com/bq.svg',
    Mexico: 'https://flagcdn.com/mx.svg',
    Argentina: 'https://flagcdn.com/ar.svg',
    Brazil: 'https://flagcdn.com/br.svg',
    Portugal: 'https://flagcdn.com/pt.svg',
    Chile: 'https://flagcdn.com/cl.svg',
    Colombia: 'https://flagcdn.com/co.svg',
    Venezuela: 'https://flagcdn.com/ve.svg',
    Bolivia: 'https://flagcdn.com/bo.svg',
    Guyana: 'https://flagcdn.com/gy.svg',
    Ecuador: 'https://flagcdn.com/ec.svg',
    'French-Guiana': 'https://flagcdn.com/gf.svg',
    Paraguay: 'https://flagcdn.com/py.svg',
    Suriname: 'https://flagcdn.com/sr.svg',
    Uruguay: 'https://flagcdn.com/uy.svg',
    'Russia-and-Kazakhstan': 'https://flagcdn.com/ru.svg',
    'Hong Kong': 'https://flagcdn.com/hk.svg',
    Azerbaijan: 'https://flagcdn.com/az.svg',
    Philippines: 'https://flagcdn.com/ph.svg',
    Armenia: 'https://flagcdn.com/am.svg',
    Thailand: 'https://flagcdn.com/th.svg',
    China: 'https://flagcdn.com/cn.svg',
    Singapore: 'https://flagcdn.com/sg.svg',
    Malaysia: 'https://flagcdn.com/my.svg',
    Indonesia: 'https://flagcdn.com/id.svg',
    Iran: 'https://flagcdn.com/ir.svg',
    Afghanistan: 'https://flagcdn.com/af.svg',
    Vietnam: 'https://flagcdn.com/vn.svg',
    'South-Korea': 'https://flagcdn.com/kr.svg',
    Japan: 'https://flagcdn.com/jp.svg',
    Tajikistan: 'https://flagcdn.com/tj.svg',
    Pakistan: 'https://flagcdn.com/pk.svg',
    Australia: 'https://flagcdn.com/au.svg',
    'Australian-External-Territories': 'https://flagcdn.com/aq.svg',
    Nauru: 'https://flagcdn.com/nr.svg',
    'Papua-New-Guinea': 'https://flagcdn.com/pg.svg',
    'Solomon-Islands': 'https://flagcdn.com/sb.svg',
    Vanuatu: 'https://flagcdn.com/vu.svg',
    Fiji: 'https://flagcdn.com/fj.svg',
    Palau: 'https://flagcdn.com/pw.svg',
    Niue: 'https://flagcdn.com/nu.svg',
    Samoa: 'https://flagcdn.com/ws.svg',
    Kiribati: 'https://flagcdn.com/ki.svg',
    Tuvalu: 'https://flagcdn.com/tv.svg',
    Micronesia: 'https://flagcdn.com/fm.svg',
    'Marshall-Islands': 'https://flagcdn.com/mh.svg',
    'Wallis-and-Futuna': 'https://flagcdn.com/wf.svg',
    'New Caledonia': 'https://flagcdn.com/nc.svg',
    'French-Polynesia': 'https://flagcdn.com/pf.svg',
    Brunei: 'https://flagcdn.com/bn.svg',
    Tonga: 'https://flagcdn.com/to.svg',
    'Cook-Islands': 'https://flagcdn.com/ck.svg',
    Tokelau: 'https://flagcdn.com/tk.svg',
    Somalia: 'https://flagcdn.com/som.svg',
    'Ivory-Coast': 'https://flagcdn.com/ci.svg',
    Senegal: 'https://flagcdn.com/sn.svg',
    Mali: 'https://flagcdn.com/ml.svg',
    Kenya: 'https://flagcdn.com/ke.svg',
    'Democratic-Republic-of-the-Congo': 'https://flagcdn.com/cd.svg',
    Togo: 'https://flagcdn.com/tg.svg',
    Liberia: 'https://flagcdn.com/lr.svg',
    Ghana: 'https://flagcdn.com/gh.svg',
    'South-Africa': 'https://flagcdn.com/za.svg',
    Uganda: 'https://flagcdn.com/ug.svg',
    Réunion: 'https://flagcdn.com/re.svg',
    'Sri-Lanka': 'https://flagcdn.com/lk.svg',
    Nepal: 'https://flagcdn.com/np.svg',
    India: 'https://flagcdn.com/in.svg',
    Bangladesh: 'https://flagcdn.com/bd.svg',
    Nigeria: 'https://flagcdn.com/ng.svg',
    'Falkland-Islands': 'https://flagcdn.com/fk.svg',
    Zambia: 'https://flagcdn.com/zm.svg',
    Cameroon: 'https://flagcdn.com/cm.svg',
    Ethiopia: 'https://flagcdn.com/et.svg',
    Tanzania: 'https://flagcdn.com/tz.svg',
    Mozambique: 'https://flagcdn.com/mz.svg',
    Mauritius: 'https://flagcdn.com/mu.svg',
    'Sierra-Leone': 'https://flagcdn.com/sl.svg',
    Zimbabwe: 'https://flagcdn.com/zw.svg',
    Lesotho: 'https://flagcdn.com/ls.svg',
    Botswana: 'https://flagcdn.com/bw.svg',
    Eswatini: 'https://flagcdn.com/sz.svg',
    'New-Zealand': 'https://flagcdn.com/nz.svg',
    Macau: 'https://flagcdn.com/mo.svg',
    Malawi: 'https://flagcdn.com/mw.svg',
    Angola: 'https://flagcdn.com/ao.svg',
    Austria: 'https://flagcdn.com/at.svg',
    Gambia: 'https://flagcdn.com/gm.svg',
    Guinea: 'https://flagcdn.com/gn.svg',
    Niger: 'https://flagcdn.com/ne.svg',
    'Republic-of-the-Congo': 'https://flagcdn.com/cg.svg',
    Madagascar: 'https://flagcdn.com/mg.svg',
    'East Timor': 'https://flagcdn.com/tl.svg',
    Maldives: 'https://flagcdn.com/mv.svg',
    Benin: 'https://flagcdn.com/bj.svg',
    Laos: 'https://flagcdn.com/la.svg',
    Rwanda: 'https://flagcdn.com/rw.svg',
    Burundi: 'https://flagcdn.com/bi.svg',
    Namibia: 'https://flagcdn.com/na.svg',
    'Saint-Helena': 'https://flagcdn.com/sh.svg',
    'Burkina-Faso': 'https://flagcdn.com/bf.svg',
    'Equatorial-Guinea': 'https://flagcdn.com/gq.svg',
    Slovakia: 'https://flagcdn.com/sk.svg',
    Romania: 'https://flagcdn.com/ro.svg',
    Gabon: 'https://flagcdn.com/ga.svg',
    'Central-African-Republic': 'https://flagcdn.com/cf.svg',
    Peru: 'https://flagcdn.com/pe.svg',
    Hungary: 'https://flagcdn.com/hu.svg',
    Taiwan: 'https://flagcdn.com/tw.svg',
    Myanmar: 'https://flagcdn.com/mm.svg',
    Djibouti: 'https://flagcdn.com/dj.svg',
    Cambodia: 'https://flagcdn.com/kh.svg',
    Mongolia: 'https://flagcdn.com/mn.svg',
    Cuba: 'https://flagcdn.com/cu.svg',
    'Czech-Republic': 'https://flagcdn.com/cz.svg',
    Seychelles: 'https://flagcdn.com/sc.svg',
    'Guinea-Bissau': 'https://flagcdn.com/gw.svg',
    Uzbekistan: 'https://flagcdn.com/uz.svg'
  };




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
            {sortOrder === 'asc' ? ' ↑' : ' ↓'}
          </th>
          <th style={{ border: '1px solid #3398db', padding: '8px' }}>Contribution (%)</th>
        </tr>
      </thead>
      <tbody>
        {sortedCountries?.map((country, index) => {
          const contribution = (country.numbers / totalNumbers) * 100;
          const flagUrl = countryFlags[country.name]; 

          return (
            <tr key={index} style={{ overflowY: 'auto' }}>
               <td style={{ border: '1px solid #3398db', padding: '8px' }}>
                {flagUrl && (
                  <img src={flagUrl} alt={country.name} style={{ width: '20px', marginRight: '8px' }} />
                )}
                {country.name}
              </td>
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
