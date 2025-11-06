import React from "react";
import { useContext } from "react";
import UsernameContext from "../contexts/UsernameContext";

const Header = () => {
    const {username} = useContext(UsernameContext);
    return (
    <div>
      <h1>Hello {username} </h1>
    </div>
  );
};

export default Header;
