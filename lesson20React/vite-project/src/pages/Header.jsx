import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const headerStyle = {
    background: "linear-gradient(135deg, #6C63FF, #52C7F9)",
    color: "white",
    padding: "25px 40px",
    borderRadius: "16px",
    textAlign: "center",
    fontFamily: "Poppins, sans-serif",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    marginBottom: "30px",
  };

  const titleStyle = {
    fontSize: "2rem",
    margin: "0 0 10px 0",
    letterSpacing: "1px",
  };

  const subtitleStyle = {
    fontSize: "1.1rem",
    margin: "0 0 20px 0",
    opacity: 0.9,
  };

  const navStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "12px",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    backgroundColor: "rgba(255,255,255,0.15)",
    padding: "8px 16px",
    borderRadius: "25px",
    transition: "0.3s",
    fontWeight: "500",
  };

  const activeStyle = {
    backgroundColor: "white",
    color: "#333",
  };

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>Exercises</h1>
      <p style={subtitleStyle}>Choose a topic to begin</p>
      <nav style={navStyle}>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
        >
          Q1
        </NavLink>
        <NavLink
          to="/q2"
          style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
        >
          Q2
        </NavLink>
        <NavLink
          to="/q3"
          style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
        >
          Q3
        </NavLink>
        <NavLink
          to="/q4"
          style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
        >
          Q4
        </NavLink>
        <NavLink
          to="/q5"
          style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
        >
          Q5
        </NavLink>
        <NavLink
          to="/q6"
          style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
        >
          Q6
        </NavLink>
        <NavLink
          to="/q7"
          style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
        >
          Q7
        </NavLink>
        <NavLink
          to="/q8"
          style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
        >
          Q8
        </NavLink>
        <NavLink
          to="/q9"
          style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
        >
          Q9
        </NavLink>
        <NavLink
          to="/q10"
          style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
        >
          Q10
        </NavLink>
        <NavLink
          to="/q11"
          style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
        >
          Q11
        </NavLink>
        <NavLink
          to="/q12"
          style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
        >
          Q12
        </NavLink>
        <NavLink
          to="/q13"
          style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
        >
          Q13
        </NavLink>
        <NavLink
          to="/q14"
          style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
        >
          Q14
        </NavLink>
        <NavLink
          to="/q15"
          style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
        >
          Q15
        </NavLink>
        <NavLink
          to="/q16"
          style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
        >
          Q16
        </NavLink>
        <NavLink
          to="/q17"
          style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
        >
          Q17
        </NavLink>
        <NavLink
          to="/q18"
          style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
        >
          Q18
        </NavLink>
        <NavLink
          to="/tasks"
          style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
        >
          Tasks
        </NavLink>
        <NavLink
          to="/studentList"
          style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
        >
          Student List
        </NavLink>
        <NavLink
          to="/productList"
          style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
        >
          Products List
        </NavLink>
        <NavLink
          to="/bookList"
          style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
        >
          Books List
        </NavLink>
        <NavLink
          to="/sfarimList"
          style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
        >
          Sfarim List
        </NavLink>
        <NavLink
          to="/student2List"
          style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
        >
          Student 2 List
        </NavLink>
        <NavLink
          to="/moviesList"
          style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
        >
          Movies List
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
