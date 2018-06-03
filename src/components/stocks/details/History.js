import React from 'react';

const History = ({ data }) => {
  const { label, close, high, low } = data

  return (
    <div className='history-icon'>
      <b className='history-icon-label'>{label}</b>
      <b className='closing-price'>${close.toFixed(2)}</b>

      <div className='prices'>
        <p style={{color: 'green'}}><i className="fa fa-chevron-up"></i>High: {high.toFixed(2)}</p>
        <p style={{color: 'red'}}><i className="fa fa-chevron-down"></i>Low: {low.toFixed(2)}</p>
      </div>
    </div>
  )


}

export default History