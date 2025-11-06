import React from "react";
import { useContext } from "react";
import UsernameContext from "../contexts/UsernameContext";

const Login = () => {
  const { username, setUsername } = useContext(UsernameContext);
  const handleLogin = (e) => setUsername(e.target.value);
  return (
    <div>
      <input onChange={handleLogin} type="username" placeholder="username" />
      <h2>what's up: {username}</h2>
    </div>
  );
};

export default Login;
