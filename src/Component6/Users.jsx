import React, { useEffect, useState } from 'react'

const Users = () => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null);

    const fetchAllUsers = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users')
          const data = await response.json();
          console.log(data);
          setUsers(data);
        } catch (err) {
          setError('Something went wrong!');
        }
      }
  
    useEffect(() => {
     
      fetchAllUsers()
    }, []);
  
    return (
      <>
        <h1>List of Users</h1>
          {error && <div>{error}</div>}
          {users ? (
          <ul>
             {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        ) : (
        <p>No users found</p>
      )}
      </>
    )
}

export default Users