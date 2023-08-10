import React from 'react';



const ResultRow = (props) => {
    const { name, formatted_address, opening_hours, id } = props.result;
    //for this function I think we need a rating component so that on the onclick we can also store the rating and pass that in for the 4th parameter in the rateIt function

    // const rateIt = (name, formatted_address, score) => {
    //     onsole.log("in rateIt Function...!")
    //     let dataBody = {
    //         email: localStorage.email,
    //         location: name,
    //         address: formatted_address,
    //         rating: score
    //     };
    //     fetch('/rateLoc', 
    //     {method: 'POST',
    //         body: dataBody,
    //         headers: {
    //         "Content-Type": "application/json",
    //         },})
    //         .then((res) => res.json())
    //         .then((data) => console.log(data));
    // }
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
                body: dataBody,
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
        <tr>
            <td>{name}</td>
            <td>{formatted_address}</td>
            <button onClick = {() => saveIt(name,formatted_address)}>Save</button>
        </tr>
    );
}

export default ResultRow;