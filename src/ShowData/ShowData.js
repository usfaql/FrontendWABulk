import React, { useEffect, useState,useContext } from 'react'
import axios from 'axios';
import './style.css'
import ReactPaginate from 'react-paginate';
import { userContext } from "../App"
import { useNavigate } from 'react-router-dom';

function ShowData({selectedCountry , isSidebarVisible, toggleSidebar}) {
    const navigate = useNavigate();
    const { token} = useContext(userContext);
    const [numbers, setNumbers] = useState([]);
    const matchResult = selectedCountry.match(/[a-zA-Z]+$/);
    const country = matchResult ? matchResult[0] : 'DefaultCountry'; 
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerColumn = 4;
    const rowsPerPage = 50;
    const [countShow , setCountShow] = useState(200);
     const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const [loading, setLoading] = useState(false);

    
   
    useEffect(()=>{
        setLoading(true);
        setNumbers([]);
        if(selectedCountry === "all"){
            axios.get(`http://localhost:5000/getall?page=${currentPage}&limit=2000000`,config).then((result) => {
                setNumbers(result.data.data);
                setCountShow(result.data.data.length);
                console.log("test=>", result);
                
            }).catch((err) => {
                console.error(err.response.data.message);
                setNumbers('');
                
            });
        }else{
            axios.get(`https://serverwabulk.onrender.com/getnumberbyname/${country}`,config).then((result) => {
                setNumbers(result.data.data);
                setCountShow(result.data.data.length)
            }).catch((err) => {
                console.error(err.response.data.message);
                setNumbers('');
                if(err.response.data.code === 2){
                    localStorage.clear();
                    navigate("/login")
                  }
            }).finally(()=>{
                setLoading(false)
            });
        }
    },[selectedCountry]);
       

        const pageCount = Math.ceil(numbers.length / (itemsPerColumn * rowsPerPage));

        const handlePageClick = (event) => {
            const selectedPage = event.selected;
            setCurrentPage(selectedPage);
        };
    
        const startIndex = currentPage * itemsPerColumn * rowsPerPage;
        const endIndex = startIndex + itemsPerColumn * rowsPerPage;
        const displayNumbers = numbers?.slice(startIndex, countShow);
        const columns = [];

        if(displayNumbers){
        for (let i = 0; i < 4; i++) {
        columns.push(displayNumbers.filter((_, index) => index % itemsPerColumn === i));
        }

        }
        

    const downloadCsv = async () => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    
    try {
        const response = await fetch(`https://serverwabulk.onrender.com/download-csv/${selectedCountry}`, config);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        // Create a temporary <a> tag to trigger the download
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${selectedCountry || 'no'}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Clean up the link after download
    } catch (error) {
        console.error('Error downloading CSV:', error);
    }
};
    return (
    <div className='container-show-data'>
        <div className='name-table'>
        <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
        {isSidebarVisible ? '<' : '>'}
        </button>
        <div className='title-country'>Country : {selectedCountry ? selectedCountry : 'Please Select Country'}</div>
        {selectedCountry && <>
            <div style={{width:"25%"}}>count: <input placeholder='200' onChange={(e)=>{
            setCountShow(e.target.value)
        }}/></div>
        <div style={{width:"25%"}}>Count : {numbers.length}</div>
        <button style={{width:"25%"}} className='download-country-data' onClick={downloadCsv}>
        Download {selectedCountry}</button>
        </>}

        </div>
        {selectedCountry ? (
                loading ? (
                    <div class="loader"></div>
                ) : (
                    numbers.length > 0 ? (
                            <>
                                <table className='table-number'>
                                    <thead>
                                        <tr>
                                            {columns.map((_, colIndex) => (
                                                <th key={colIndex}>No {colIndex + 1}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Array.from({ length: rowsPerPage }).map((_, rowIndex) => (
                                            <tr key={rowIndex}>
                                                {columns.map((column, colIndex) => (
                                                    column[rowIndex] && <>
                                                        <td key={colIndex}>
                                                        {column[rowIndex].number}
                                                        </td>
                                                    </>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className='paginate-sticky'>
                                    <ReactPaginate
                                        previousLabel={'<-'}
                                        nextLabel={'->'}
                                        breakLabel={'...'}
                                        pageCount={pageCount}
                                        marginPagesDisplayed={2}
                                        pageRangeDisplayed={3}
                                        onPageChange={handlePageClick}
                                        containerClassName={'paginate'}
                                        activeClassName={'active'}
                                    />
                                </div>
                            </>
                    
                    ) : (
                        <p>No numbers available for the selected country.</p>
                    )
                )
            ) : (
                <p>Please select a country.</p>
            )}
    
      
             
    </div>
  )
}

export default ShowData
