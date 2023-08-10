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

  const saveIt = async (name,formatted_address) => {
    try{
        console.log("in saveIt Function...!")
        let dataBody = {
            email: localStorage.email,
            location: name ,
            address: formatted_address
        };
        console.log("databody" + dataBody.email)
        console.log("databody" + dataBody.location)
        console.log("databody" + dataBody.address)
        await fetch('/api/saveLoc', 
        {method: 'POST',
            body: JSON.stringify(dataBody),
            headers: {
            "Content-Type": "application/json",
            },})
            .then((res) => res.json())
            .then((data) => console.log(data));
    }catch{
        console.log("error in the saveItfunction")
    }
   
}

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
      <button onClick = {() => saveIt(name,formatted_address)}>Save</button>
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
