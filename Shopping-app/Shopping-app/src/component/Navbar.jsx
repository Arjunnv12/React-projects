import React from "react";
import { Link } from "react-router-dom";
import "../Style/Navbar.css";

function Navbar({ search, setSearch }) {
  return (
    <div className="Navbar">
      <div className="logo">
        <h1>
          Shop<span>Py</span>
        </h1>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="search items"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>Search</button>
        <Link to="/admin-homepage/add-products">Add Products</Link>{" "}
      </div>
      <div className="profile">{/* <Profile /> */}</div>
    </div>
  );
}

export default Navbar;
