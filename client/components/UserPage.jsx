
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const UserPage = ({ username }) => {
    const [savedList, setSavedList] = useState([]);
    const [triedList, setTriedList] = useState([]);
    const getSaved = async () => {
    try {
        //query userRouters/saved with username in body
        const response = await axios.post('/api/savedList', { username });
        //server should return an array of saved places already queried for name
        if (response.status === 200) {
        //check if it's in response.data!!
        setSavedList(response.data.savedList)
        }
    } catch (err) {
        console.error(err);
    }
    };
    const getTrys = async () => {
        try {
            //query userRouter/tried with username in body
            const response = await axios.post('/api/beenList', { username });
            //server should return an array of objects
            if (response.status === 200) {
            //check if it's in response.data!
            setTriedList(response.data)
            }
        } catch (err) {
            console.error(err);
        }
    };

  useEffect(() => {
    getSaved();
    getTrys();
  }, [])

  //generate rows for saved list
  const savedRows = savedList.map(savedPlace => {
    return (
    <tr>
        <td>{savedPlace}</td>
    </tr>
    )
  });
  //generate rows for tried list
  const triedRows = triedList.map(triedPlace => {
    const name = triedPlace.name;
    const score = triedPlace.score;
    const tags = triedPlace.tags;
    return (
        <tr>
            <td>{name}</td>
            <td>{score}</td>
            <td>{tags}</td>
        </tr>
    )
  })
  
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Saved Spots</th>
                </tr>
            </thead>
            <tbody>
                {savedRows}
            </tbody>
        </table>
        <table>
            <thead>
                <tr>
                    <th>Been there, rated that.</th>
                    <th>Rating</th>
                    <th>Tags</th>
                </tr>
            </thead>
            <tbody>
                {triedRows}
            </tbody>
        </table>
      {/* <button onClick={login}>Login</button>
      <button onClick={signup}>Sign Up</button> */}
    </div>
  );
};
export default UserPage;
