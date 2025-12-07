import { useState } from "react";
import { useEffect } from "react";
import "./Flipkart.css";

function Flipkart() {
  let [items, setItems] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let res = await fetch("http://localhost:3000/products");
      let data = await res.json();
      setItems(data);
    }
    fetchData();
  }, []);
  console.log(items);
  return (
    <>
      <div className="flipkart">
        {items.map((item) => {
          return (
            <>
              <div className="items">
                <div className="imge">
                  <img src={item.image} alt="" />
                </div>
                <div className="detalis">
                  <p>
                    <b>{item.id}</b> || <b>{item.name.toUpperCase()}</b>
                  </p>
                  <p>M.R.P: {item.price}</p>
                  <button>ADD TO CART</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
export default Flipkart;
