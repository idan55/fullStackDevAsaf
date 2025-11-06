import React, { useEffect, useState } from "react";

const Userlist = () => {
  const [users, setUsers] = useState([]);
  async function fetchUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    setUsers(data);
  }
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <h1 style={{ color: "gold" }}>Users</h1>
      {users.map((user, id) => (
        <div key={id}>
          <h2>Name: {user.name}</h2>
          <h3>Email: {user.email} </h3>
          <h4>Address:</h4>
          <h5> Street: {user.address.street}</h5>
          <h5>City: {user.address.city}</h5>
        </div>
      ))}
    </div>
  );
};

export default Userlist;
