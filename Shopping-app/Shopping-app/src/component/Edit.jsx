import React from "react";
import { useParams } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  return (
    <div>
      <h2>Edit Product ID:{id}</h2>
    </div>
  );
}

export default Edit;
