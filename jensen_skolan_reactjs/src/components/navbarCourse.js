import React from "react";

import "bootstrap/dist/css/bootstrap.css";

import { NavLink } from "react-router-dom";

export default function NavbarCourse() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/record">
          KURSER
        </NavLink>
        <NavLink className="nav-link" to="/create">
          LÄGG TILL KURS
        </NavLink>
      </nav>
    </div>
  );
}

// © NATTA