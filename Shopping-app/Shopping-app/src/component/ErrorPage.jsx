// ErrorPage.jsx
import React from "react";

function ErrorPage() {
  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h1>Oops! Something went wrong.</h1>
      <p>We can't seem to find the page you're looking for.</p>
      <img
        src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/error-500_f9bbb4.png"
        alt="A confused robot indicating a page error" // ★ KEY CHANGE: Descriptive alt text
        style={{ maxWidth: "300px", marginTop: "20px" }}
      />
    </div>
  );
}

export default ErrorPage;
