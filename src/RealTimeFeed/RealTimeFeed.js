import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './style.css'; // Import the CSS file for animations

const socket = io('https://serverwabulk.onrender.com'); // Adjust the URL as necessary

function RealTimeFeed() {
    const [feed, setFeed] = useState([]);

    useEffect(() => {
        // Listen for new phone numbers summary
        socket.on('newNumbersSummary', (countsByCountry) => {
            const formattedFeed = Object.entries(countsByCountry).map(([country, count]) => ({
                country,
                count,
                timestamp: Date.now(), 
                id: Date.now() + Math.random() 
            }));
            setFeed((prevFeed) => [...formattedFeed, ...prevFeed]);
            console.log(countsByCountry);
        });

       
        return () => {
            socket.off('newNumbersSummary');
        };
    }, []);

    useEffect(() => {
        
        const handleRemoval = () => {
            feed.forEach((item, index) => {
                setTimeout(() => {
                    setFeed((prevFeed) => {
                        const updatedFeed = prevFeed.map(i => 
                            i.id === item.id ? { ...i, fadeOut: true } : i
                        );
                        return updatedFeed.filter(i => !i.fadeOut); 
                    });
                }, 5000 + index * 200);
            });
        };

        handleRemoval();

        
        return () => {
            
        };
    }, [feed]);

    return (
        <div className='container-latest'>
            <h2 style={{color:"#ededed", borderBottom:"1px solid #3398db", paddingTop:"20px",paddingBottom:"20px", margin:"0"}}>Latest Additions Feed</h2>
            <div style={{ maxHeight: '300px', overflowY: 'scroll' }}>
                {feed?.map((item) => (
                    <div 
                        key={item.id}
                        className={`feed-item ${item.fadeOut ? 'fade-out' : ''}`} 
                    >
                        <p style={{ color: "green" }}>Country: <strong>{item.country}</strong> Count:<strong>{item.count}</strong> numbers added</p>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RealTimeFeed;
