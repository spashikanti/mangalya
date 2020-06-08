import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">
            Mangalya Matrimony
          </Link>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav navbar-right">
            <li>
              <NavLink to="/users">Users</NavLink> {" | "}
              <NavLink to="/courses">Course</NavLink> {" | "}
              <NavLink to="/customers">Customers</NavLink> {" | "}
              <NavLink to="/register">Register</NavLink>
              {" | "}
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
