import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
    return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <nav class="navbar-brand">NGO Event Management</nav>
    <div>
    <ul style={{listStyleType: "none"}}>
      <li class="nav-item active" style={{ float: "left", display: "block", textAlign: "center"}}>
      <Link to="/" class="nav-link">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item active" style={{ float: "left", display: "block", textAlign: "center"}}>
      <Link to="/customers" class="nav-link">Customers</Link>
      </li>
      <li class="nav-item active" style={{ float: "left", display: "block", textAlign: "center"}}>
      <Link to="/events" class="nav-link">Events</Link>
      </li>
      <li class="nav-item active" style={{ float: "left", display: "block", textAlign: "center"}}>
      <Link to="/login" class="nav-link">Login</Link>
      </li>
      <li class="nav-item active" style={{ float: "left", display: "block", textAlign: "center"}}>
      <Link to="/register" class="nav-link">Register</Link>
      </li>
    </ul>
    </div>
    </nav>    
    )
};

export default NavBar;
