import React from 'react';

function Goal({ totalNumbers, goal = 1000000 }) {
  const percentage = (totalNumbers / goal) * 100;

  return (
    <div className='container-goal'>
      <h3>Total Numbers: {totalNumbers?.toLocaleString()} / {goal.toLocaleString()}</h3>
      <div style={{ backgroundColor: '#e0e0e0', borderRadius: '10px', width: '50%', height: '10px', position: 'relative' }}>
        <div style={{
          width: `${percentage}%`,
          height: '100%',
          backgroundColor: '#2986ff',
          borderRadius: '10px',
          transition: 'width 0.3s'
        }} />
      </div>
      <p>{percentage.toFixed(2)}% of the goal reached</p>
    </div>
  );
}

export default Goal;