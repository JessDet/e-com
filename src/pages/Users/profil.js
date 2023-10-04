import React, {useContext, useState, useEffect}from 'react';
import { UsersContext } from '../../contexts/users.context';
import { useParams } from 'react-router-dom';

import './profil.css';



export default function Profil({ data }) {
  <UsersContext.Provider value={data}>
    <div className="profile-container">
      {data && data.map((users) => (
        <div className="profile-details">
          <h2>{users.firstname} {users.lastname}</h2>
          <p>{users.address}</p>
          <p>{users.phone}</p>
          <p>{users.email}</p>
        </div>
      ))}
    </div>
  </UsersContext.Provider>
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/users/{id}')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        console.log(data); // Added console.log statement to log the fetched data
      })
      .catch(error => {
        console.error('Error fetching data:', error); // Added console.error statement to log any errors
      });
  }, []);
  return (
    <div className="profile-container">
      {data && data.map((users) => (
        <div className="profile-details">
          <h2>{users.firstname} {users.lastname}</h2>
          <p>{users.address}</p>
          <p>{users.phone}</p>
          <p>{users.email}</p>
        </div>
      ))}
    </div>
  );
}