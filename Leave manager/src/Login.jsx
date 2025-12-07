import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const handleLogin = () => {
    role === "manager" ? navigate("/manager") : navigate("/dashboard");
  };
  return (
    <div className="Login">
      <h2>Login</h2>
      <select onChange={(e) => setRole(e.target.value)} id="">
        <option value="user">User</option>
        <option value="manager">Manager</option>
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
export default Login;
