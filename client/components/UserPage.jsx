import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // import useNavigate

const UserPage = ({ userEmail }) => {
  const navigate = useNavigate(); // Use the useNavigate hook
  const [savedList, setSavedList] = useState([
    {name: 'Capital One Cafe', address: '123 abc st'}, 
    {name: 'Bean & Bean Chelsea', address: '123 abc st'}, 
    {name: 'Gregorys Coffee', address: '123 abc st'}, 
  ]);
  const [triedList, setTriedList] = useState([]);
  const getSaved = async () => {
    try {
      //query userRouters/saved with userEmail in body
      const response = await axios.post('/api/savedList', { userEmail });
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
      //query userRouter/tried with userEmail in body
      const response = await axios.post('/api/beenList', { userEmail });
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
        <td>{savedPlace.name}</td>
        <td>{savedPlace.address}</td>
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
    <div className="bg-gradient-to-r from-blue-200"  style={{height: '100%'}}> 
      <h1 className="font-primary text-8xl text-primary" style={{'textShadow': '2px 2px 10px gray'}}>VIBE*</h1>
      {/* add a button to navigate to the search page */}
      <div className='lists overflow-x-auto flex-col'>
      <br />
      <br />
        <div className="collapse show bg-base-200" style={{'backgroundColor': 'rgba(0, 0, 0, 0.2)'}}>
          <input type="checkbox" /> 
          <div className="collapse-title text-2xl font-medium font-primary text-white" style={{'textShadow': '1px 1px 2px black'}}>
             Saved Places!
          </div>
        <div className="collapse-content"> 
        <table className='SavedTable table table-zebra font-primary rounded-sm'  style={{'backgroundColor': 'rgba(0, 0, 0, 0.1)'}}>
            <thead>
              <tr>
                <th>Place</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {savedRows}
            </tbody>
          </table>
        </div>
        </div>
        <br />
        <div className="collapse show bg-base-200" style={{'backgroundColor': 'rgba(0, 0, 0, 0.2)'}}>
          <input type="checkbox" /> 
          <div className="collapse-title text-2xl font-medium font-primary text-white" style={{'textShadow': '1px 1px 2px black'}}>
          **~ Where you've been ~**
          </div>
        <div className="collapse-content"> 
        <table className='SavedTable table table-zebra font-primary rounded-sm'  style={{'backgroundColor': 'rgba(0, 0, 0, 0.1)'}}>
        <thead>
              <tr>
                <th><h4>Place</h4></th>
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
        </div>
        <br />
        <br />
      </div>
      <div className='searchButton'>
        <button className='button' onClick={() => navigate('/search')}>Go to Search Page</button>
      </div>
    </div>
  );
};
export default UserPage;




{/* <tr>
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
            </tr> */}




            // <h2 className="font-primary text-2xl text-primary" style={{'textShadow': '1px 1px 2px gray'}}>**~ Where you've been ~**</h2>
            // <div>
            //   <table className='SavedTable table table-zebra font-primary'  style={{'backgroundColor': 'rgba(0, 0, 0, 0.1)'}}>
            //     <thead>
            //       <tr>
            //         <th><h4>Place</h4></th>
            //         <th><h4>Rating</h4></th>
            //         <th><h4>Tags</h4></th>
            //       </tr>
            //     </thead>
            //     <tbody>
            //       <tr>
            //         <th>Seven Grams Caffe</th>
            //         <th>4</th>
            //         <th>Chill</th>
            //       </tr>
            //       <tr>
            //         <th>Intelligentsia Coffee Highline Coffeebar</th>
            //         <th>4</th>
            //         <th>Quiet</th>
            //       </tr>
            //       <tr>
            //         <th>Stumptown Coffee Roasters</th>
            //         <th>3</th>
            //         <th>Chill</th>
            //       </tr>
            //       <tr>
            //         <th>Gregorys Coffee</th>
            //         <th>4</th>
            //         <th>Outlets</th>
            //       </tr>
            //       <tr>
            //         <th>Joe Coffee Company</th>
            //         <th>2</th>
            //         <th>Clean Bathroom</th>
            //       </tr>
            //     </tbody>
            //   </table>
    
            // </div>