import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Style/Dashboard.css";
import Star from "./star";
import { useNavigate } from "react-router-dom";

function Dashboard({ search }) {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:1001/product")
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filteredItems = items.filter((item) =>
    item.p_brand.toLowerCase().startsWith(search.toLowerCase())
  );
  const handleEdit = (id) => {
    navigate(`/edid-product/${id}`);
  };

  return (
    <>
      <div className="shopping">
        {filteredItems.map((item) => {
          return (
            <div className="productshop" key={item.id}>
              {" "}
              <div className="thumbnail">
                <img src={item.pr_img} alt="" />
              </div>
              <div className="details">
                <b>{item.p_brand}</b>||<b>{item.p_category}</b>
                <strike>M.R.P: {item.pr_price}</strike>
                <span>{item.pr_price - item.pr_price * 0.15}/-</span>
              </div>
              <div className="product-info">
                <div className="rating">
                  {item.pr_rating}
                  <Star />
                </div>
                <div className="stock">{item.pr_stock}</div>
              </div>
              <button id="btn1" onClick={() => handleEdit(item.id)}>
                Edit
              </button>
              <button id="btn2">Remove</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Dashboard;
