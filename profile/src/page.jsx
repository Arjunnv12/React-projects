import "./card.css";
import image from "./assets/photo.png";
import React from "react";

function Photo() {
  return (
    <>
      <div className="imgo">
        <img
          style={{ height: "220px", width: "220px" }}
          src={image}
          alt="photo"
        />
        <Details />
      </div>
    </>
  );
}
function Details() {
  let arr = [
    {
      Name: "Arjun NV",
      PhoneNO: "9446938406",
      Address: "Nandakam Kalliasseri",
    },
  ];
  return (
    <React.Fragment>
      {arr.map((item) => {
        return (
          <>
            <div className="imgo">
              <div className="names">
                <h3>Name:{item.Name}</h3>
                <h4>PhoneNo :{item.PhoneNO}</h4>
                <h4>Address :{item.Address}</h4>
              </div>
            </div>
          </>
        );
      })}
    </React.Fragment>
  );
}
export default Photo;
