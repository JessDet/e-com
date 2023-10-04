import { createContext, useState, useEffect } from 'react';
import axios from 'axios';



export const UsersContext = createContext({
  users: [],
});

export const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
  
    const fetchdatauser = () => {
      axios.get ('http://127.0.0.1:8000/api/users')
      .then((resp) => {
        // console.log(resp.data);
        setUsers(resp.data['hydra:member'])
      })
    }
  
    useEffect (() => {
        fetchdatauser()
    },[])

    const value = { users };
  return (
    <UsersContext.Provider value={value}>
      {children}
    </UsersContext.Provider>
  );
};