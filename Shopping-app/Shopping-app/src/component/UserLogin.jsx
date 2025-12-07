import React, { useState, useEffect } from "react";
import "../Style/UserLogin.css";
import { toast } from "react-toastify";

function UserLogin() {
  const [Uname, setUname] = useState("");
  const [pswd, setPswd] = useState("");
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let res = await fetch("https://dummyjson.com/users");
      let data = await res.json();
      setUsers(data.users);
    }
    fetchData();
  }, []);

  const val_login = (e) => {
    e.preventDefault();
    const matches = Users.filter(
      (item) => item.email === Uname && item.password === pswd
    );
    console.log(Users);
    if (matches.length > 0) {
      toast.success("Login Sucessful");
    } else {
      toast.error("Login failed");
    }
  };
  return (
    <div className="UserLogin">
      <form onSubmit={val_login}>
        <label htmlFor="">
          <h3>UserName</h3>
        </label>
        <input
          id="email-input"
          type="text"
          value={Uname}
          onChange={(e) => setUname(e.target.value)}
          placeholder="UserName/Email"
        />

        <label htmlFor="">
          <h3>Password</h3>
        </label>
        <input
          id="password-input"
          type="password"
          value={pswd}
          onChange={(e) => setPswd(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default UserLogin;
