import { useState } from "react";
import React from "react";

function LeaveForm() {
  const [leave, setLeave] = useState({ from: "", to: "", reason: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLeave((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Leave applied from ${leave.from} to ${leave.to} for ${leave.reason}`
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Apply for Leave</h3>
      <label htmlFor="">From</label>
      <input type="date" value={leave.from} onChange={handleChange} />
      <br />
      <label htmlFor="">To:</label>
      <input type="date" value={leave.to} onChange={handleChange} />
      <br />
      <label htmlFor="">Reason</label>
      <input
        type="text"
        name="reason"
        value={leave.reason}
        onChange={handleChange}
        placeholder="Enter Reason"
      />
      <br />

      <button type="submit">Apply</button>
    </form>
  );
}
export default LeaveForm;
