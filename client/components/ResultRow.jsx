import React from 'react';

const ResultRow = (props) => {
  const {
    name,
    formatted_address,
    formatted_phone_number,
    website,
    url,
    price_level,
    opening_hours,
  } = props.result;

  return (
    <div
      className='collapse show bg-base-200'
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        margin: '20px 20px 20px 20px',
        width: '70%',
      }}
    >
      <input type='checkbox' />
      <div className='collapse-title text-xl font-medium'>{name}</div>
      <div className='collapse-content'>
        <p>{formatted_address}</p>
        <p>{formatted_phone_number}</p>
        <p>{price_level}</p>
        <p>{website}</p>
        <p>{url}</p>
      </div>
    </div>
  );
};

export default ResultRow;
