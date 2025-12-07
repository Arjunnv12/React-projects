import { useEffect, useState } from "react";
import "../Style/AdminLogin.css";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [admin, setAdmin] = useState([]);

  // const val_login = (e) => {
  //   e.preventDefault();
  //   if (email === "abcd" && password === "1234") {
  //     toast.success("Login Successful");
  //   } else {
  //     toast.error("Login Failed");
  //   }
  // };
  useEffect(() => {
    axios
      .get("http://localhost:1000/Admin")
      .then((res) => {
        console.log(res.data);
        setAdmin(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let isPresent = admin.filter((admin) => {
    return admin.email === email && admin.password === password;
  });
  let navigate = useNavigate();
  function login_admin(e) {
    e.preventDefault();
    if (isPresent.length > 0) {
      toast.success("login sucessful");
      navigate("/admin-homepage");
    } else {
      toast.error("Invalid username or password");
    }
  }

  return (
    <div className="AdminLogin">
      <form onSubmit={login_admin} action="">
        <label htmlFor="">Username</label>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          placeholder="Enter Email-id"
          required
        />
        <label htmlFor="">Password</label>
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Enter Password"
          required
        />
        <button>Login</button>
        <Link to="/admin-sign">Register</Link>
      </form>
    </div>
  );
}

export default AdminLogin;
