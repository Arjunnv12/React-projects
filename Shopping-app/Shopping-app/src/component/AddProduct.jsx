import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "../Style/Addproduct.css";

function AddProduct() {
  const [product, setProduct] = useState({
    p_name: "",
    p_category: "",
    p_brand: "",
    pr_price: "",
    pr_desc: "",
    pr_img: "",
    pr_stock: "",
    pr_rating: "",
  });
  let p_category = [
    "Electronics",
    "Clothing",
    "Footwear",
    "Home Appliances",
    "Beauty & Personal Care",
    "Groceries",
    "Sports & Fitness",
    "Books",
    "Toys & Games",
    "Furniture",
    "Jewelry",
    "Automotive",
    "Pet Supplies",
    "Stationery",
    "Health & Wellness",
    "Musical Instruments",
    "Gardening Tools",
    "Mobile Accessories",
    "Kitchenware",
    "Office Supplies",
  ];

  function handleChange(e) {
    let { name, value } = e.target;
    setProduct((prevState) => ({
      ...prevState,
      // [name]: value,
    }));
  }
  function Product_detail(e) {
    e.preventDefault();

    axios
      .post("http://localhost:1001/product", product)
      .then((res) => {
        console.log(res);
        toast.success("Product Added Sucessfully");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error Occured");
      });
  }
  return (
    <div className="product">
      <form onSubmit={Product_detail} action="">
        <label htmlFor="">Product_Name </label>
        <input
          type="text"
          name="p_name"
          value={product.p_name}
          onChange={handleChange}
          placeholder="Product Name"
          required
        />
        <label htmlFor="">Product Category</label>
        <select
          name="p_category"
          value={product.p_category}
          onChange={handleChange}
          id=""
        >
          {p_category.map((item) => {
            return <option>{item}</option>;
          })}
        </select>
        <label htmlFor="">Brand</label>
        <input
          type="text"
          name="p_brand"
          value={product.p_brand}
          onChange={handleChange}
          placeholder="Product Brand"
          required
        />
        <label htmlFor="">Price</label>
        <input
          type="number"
          name="pr_price"
          value={product.pr_price}
          onChange={handleChange}
          placeholder="Product Price"
          required
        />
        <label htmlFor="">Descriptiom</label>
        <input
          type="text"
          name="pr_desc"
          value={product.pr_desc}
          onChange={handleChange}
          placeholder="Product Description"
        />
        <label htmlFor="">Stock</label>
        <input
          type="number"
          name="pr_stock"
          value={product.pr_stock}
          onChange={handleChange}
        />
        <label htmlFor="">Rating</label>
        <input
          type="text"
          name="pr_rating"
          value={product.pr_rating}
          onChange={handleChange}
          placeholder="Product Rating"
        />
        <label htmlFor="">Image</label>
        <input
          type="text"
          name="pr_img"
          value={product.pr_img}
          onChange={handleChange}
          placeholder="Product Image"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default AddProduct;
