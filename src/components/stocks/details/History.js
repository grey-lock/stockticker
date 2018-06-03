import React from 'react';

const History = ({ data }) => {
  const { label, close, high, low } = data

  return (
    <div className='history'>
      <h2 className='history-label'>{label}</h2>
      <h3 className='closing-price'>${close.toFixed(2)}</h3>

      <div className='prices'>
        <p style={{color: 'green'}}><i className="fas fa-caret-up"></i>{high.toFixed(2)}</p>
        <p style={{color: 'red'}}><i className="fas fa-caret-down"></i>{low.toFixed(2)}</p>
      </div>
    </div>
  )


}

export default HistoryItem