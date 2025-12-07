import AdminLogin from "./component/AdminLogin";
import UserLogin from "./component/UserLogin";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./component/Landing";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminSign from "./component/AdminSign";
import AdminHomepage from "./component/AdminHomepage";
import ErrorPage from "./component/ErrorPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/admin-sign" element={<AdminSign />} />
          <Route path="/admin-homepage/*" element={<AdminHomepage />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
