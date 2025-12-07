import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "../Style/Adminsign.css";
function AdminSign() {
  let [admin, setAdmin] = useState({
    U_name: "",
    email: "",
    password: "",
    re_password: "",
    phone: "",
    age: "",
    profile: "",
  });

  function handleChange(e) {
    let { name, value } = e.target;
    setAdmin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function register_admin(e) {
    e.preventDefault();
    if (admin.password !== admin.re_password) {
      toast.error("Passwords do not match!");
      return; // Stop the submission
    }

    axios
      .post("http://localhost:1000/Admin", admin)
      .then((res) => {
        console.log(res);
        toast.success("Admin Registered Success");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Invalid Information");
      });
  }

  return (
    <div className="AdminSign">
      <div className="thumbnail">New Admin</div>
      <form onSubmit={register_admin} action="">
        <label htmlFor="">Name :</label>
        <input
          type="text"
          name="U_name"
          value={admin.U_name}
          onChange={handleChange}
          placeholder="Enter name of Admin"
          required
        />
        <label htmlFor="">email :</label>
        <input
          type="text"
          name="email"
          value={admin.email}
          onChange={handleChange}
          placeholder="Enter email of Admin"
          required
        />
        <label htmlFor="">Password :</label>
        <input
          type="text"
          value={admin.password}
          name="password"
          onChange={handleChange}
          placeholder="Enter password of Admin"
          required
        />
        <label htmlFor="">Re - password :</label>
        <input
          type="text"
          value={admin.re_password}
          name="re_password"
          onChange={handleChange}
          placeholder="Enter password of Admin"
          required
        />
        <label htmlFor="">Phone :</label>
        <input
          type="text"
          value={admin.phone}
          name="phone"
          onChange={handleChange}
          placeholder="Enter phone of Admin"
          required
        />
        <label htmlFor="">Age :</label>
        <input
          type="number"
          value={admin.age}
          name="age"
          onChange={handleChange}
          placeholder="Enter age of Admin"
          required
        />
        <label htmlFor="">Profile :</label>
        <input
          type="text"
          value={admin.profile}
          name="profile"
          onChange={handleChange}
          placeholder="Enter image url of Admin"
          required
        />
        <button>Register</button>
      </form>
    </div>
  );
}
export default AdminSign;
