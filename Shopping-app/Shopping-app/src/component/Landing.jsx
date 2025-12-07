import "../Style/Landing.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="Landingpage">
      <Link to="/admin-login">
        <img
          src="https://img.freepik.com/premium-vector/support-admin-icon-glyph-style-vector-eps_965649-13140.jpg"
          alt=""
        />
        <h2>ADMIN</h2>
      </Link>
      <Link to="/user-login">
        <img
          src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
          alt=""
        />
        <h2>USER</h2>
      </Link>
    </div>
  );
}
export default Landing;
