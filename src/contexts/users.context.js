// import { createContext, useState } from 'react';
// import axios from 'axios';



// export const UsersContext = createContext({
//   users: [],
// });

// export const UsersProvider = ({ children }) => {
//   const apiUrl = 'http://127.0.0.1:8000/api';
//   axios.get(apiUrl)
//     .then(response => {
//       console.log(response.data);
//     })
//     .catch(error => {
//       console.error(error);
//     });
//   const [users, setUsers] = useState();
//   console.log("users:", users);
//   const value = { users };
//   console.log("value:", value);
//   return (
//     <UsersContext.Provider value={value}>
//       {children}
//     </UsersContext.Provider>
//   );
// };