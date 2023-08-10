import React from 'react';


const ResultRow = (props) => {
    const { name, formatted_address, opening_hours, id } = props.result
    const saveIt = (location,address) => {
        console.log("in saveIt Function...!")
        let dataBody = {
            email: localStorage.email,
            location: location,
            address: address
        };
        fetch('/saveLoc', 
        {method: 'POST',
            body: dataBody,
            headers: {
            "Content-Type": "application/json",
            },})
            .then((res) => res.json())
            .then((data) => console.log(data));
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{formatted_address}</td>
            <button>Rate</button>
            <button onclick = {saveIt(name,formatted_address)}>Save</button>
        </tr>
    );
}

export default ResultRow;