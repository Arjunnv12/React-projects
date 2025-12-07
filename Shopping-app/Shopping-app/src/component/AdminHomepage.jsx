import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import AddProduct from "./AddProduct";
import Dashboard from "./Dashboard";
import React, { useState } from "react";
import Edit from "./Edit";
function AdminHomepage() {
  const [search, setSearch] = useState("");
  return (
    <div className="AdminHomePage">
      <Navbar search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/add-products" element={<AddProduct />} />
        <Route path="/" element={<Dashboard search={search} />} />
        <Route path="/edit-product/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}
export default AdminHomepage;
