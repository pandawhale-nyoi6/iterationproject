import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // import useNavigate

const UserPage = ({ username }) => {
  const navigate = useNavigate(); // Use the useNavigate hook
  const [savedList, setSavedList] = useState([]);
  const [triedList, setTriedList] = useState([]);
  const getSaved = async () => {
    try {
      //query userRouters/saved with username in body
      const response = await axios.post('/api/savedList', { username });
      //server should return an array of saved places already queried for name
      if (response.status === 200) {
        //check if it's in response.data!!
        setSavedList(response.data.savedList);
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
        setTriedList(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getSaved();
    getTrys();
  }, []);

  //generate rows for saved list
  const savedRows = savedList.map((savedPlace) => {
    return (
      <tr>
        <td>{savedPlace}</td>
      </tr>
    );
  });
  //generate rows for tried list
  const triedRows = triedList.map((triedPlace) => {
    const name = triedPlace.name;
    const score = triedPlace.score;
    const tags = triedPlace.tags;
    return (
      <tr>
        <td>{name}</td>
        <td>{score}</td>
        <td>{tags}</td>
      </tr>
    );
  });

  return (
    <div>
      {/* add a button to navigate to the search page */}
      <div className='lists'>
        <table className='SavedTable'>
          <thead>
            <tr>
              <h4>Saved Spots!</h4>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Capital One Cafe</th>
            </tr>
            <tr>
              <th>Bean & Bean Chelsea</th>
            </tr>
            <tr>
              <th>Gregorys Coffee</th>
            </tr>
            <tr>
              <th>Variety Coffee Roasters</th>
            </tr>
            <tr>
              <th>King's Street Coffee</th>
            </tr>
          </tbody>
        </table>
        <table className='BeenTable'>
          <thead>
            <tr>
              <th><h4>Where You've Been</h4></th>
              <th><h4>Rating</h4></th>
              <th><h4>Tags</h4></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Seven Grams Caffe</th>
              <th>4</th>
              <th>Chill</th>
            </tr>
            <tr>
              <th>Intelligentsia Coffee Highline Coffeebar</th>
              <th>4</th>
              <th>Quiet</th>
            </tr>
            <tr>
              <th>Stumptown Coffee Roasters</th>
              <th>3</th>
              <th>Chill</th>
            </tr>
            <tr>
              <th>Gregorys Coffee</th>
              <th>4</th>
              <th>Outlets</th>
            </tr>
            <tr>
              <th>Joe Coffee Company</th>
              <th>2</th>
              <th>Clean Bathroom</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='searchButton'>
        <button className='button' onClick={() => navigate('/search')}>Go to Search Page</button>
      </div>
    </div>
  );
};
export default UserPage;
