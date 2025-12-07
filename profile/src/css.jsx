import React from "react";
function Css() {
  return (
    <React.Fragment>
      <div className=".cardcontainer">
        <div className="card1">
          <h3>Css</h3>
          <img
            style={{ height: "160px", width: "160px" }}
            src="https://webdevmonk.com/main/css.png"
            alt=""
          />
          <p>
            CSS stands for Cascading Style Sheets. It is a stylesheet language
            used to style and enhance website presentation.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Css;
