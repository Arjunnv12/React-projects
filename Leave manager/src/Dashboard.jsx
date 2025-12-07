import React from "react";
import CalendarView from "./CalendarView";
import LeaveForm from "./LeaveForm";
function Dashboard() {
  return (
    <div>
      <h2>User Dashboard</h2>
      <CalendarView />
      <LeaveForm />
    </div>
  );
}
export default Dashboard;
