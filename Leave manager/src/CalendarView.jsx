import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";

function CalendarView() {
  const [attendance, setAttendance] = useState({});
  const handleDate = (date) => {
    const dateStr = date.toDateString();
    const currentStatus = attendance[dateStr];

    let newStatus;
    if (currentStatus === "present") newStatus = "absent";
    else if (currentStatus === "absent") newStatus = null;
    else newStatus = "present";
    setAttendance({
      ...attendance,
      [dateStr]: newStatus,
    });
  };
  return (
    <div>
      <h3>Attendance Calander</h3>
      <Calendar
        onClickDay={handleDate}
        tileClassName={({ date }) => {
          const status = attendance[date.toDateString()];
          if (status === "present") return "green";
          if (status === "absent") return "red";
        }}
      />
      <div>
        {/* <button onClick={() => markAttendance(new Date(), "present")}>
          Mark Present
        </button>
        <button onClick={() => markAttendance(new Date(), "absent")}>
          Mark Absent
        </button> */}
      </div>
    </div>
  );
}
export default CalendarView;
