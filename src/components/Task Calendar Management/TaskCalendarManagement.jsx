import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function TaskAssignmentCalendarIntegration() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      counselorName: "John Doe",
      task: "Student Counseling",
      dueDate: "2025-02-15",
    },
  ]);
  const [counselorName, setCounselorName] = useState("");
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const addToGoogleCalendar = (task, date) => {
    const startDate = new Date(date);
    const endDate = new Date(date);
    endDate.setHours(endDate.getHours() + 1);

    const startISO = startDate.toISOString().replace(/-|:|\.\d+/g, "");
    const endISO = endDate.toISOString().replace(/-|:|\.\d+/g, "");

    const googleCalendarURL = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      task
    )}&dates=${startISO}/${endISO}&details=Task+Reminder`;
    window.open(googleCalendarURL, "_blank");
  };

  const addToOutlookCalendar = (task, date) => {
    const startDate = new Date(date);
    const endDate = new Date(date);
    endDate.setHours(endDate.getHours() + 1);

    const startISO = startDate.toISOString();
    const endISO = endDate.toISOString();

    const outlookCalendarURL = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(
      task
    )}&startdt=${startISO}&enddt=${endISO}&body=Task+Reminder`;
    window.open(outlookCalendarURL, "_blank");
  };

  const setReminder = (task, date) => {
    alert(`🔔 Reminder set for "${task}" on ${date}`);
  };

  const showNotifications = () => {
    alert("🔔 You have upcoming tasks! Check your calendar.");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const markCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };

  const addTask = () => {
    if (!counselorName || !taskName || !taskDate) {
      alert("⚠ Please fill out all fields.");
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      counselorName,
      task: taskName,
      dueDate: taskDate,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    // Clear input fields
    setCounselorName("");
    setTaskName("");
    setTaskDate("");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">📅 Assign Tasks to Counselors & Calendar Integration</h2>

      {/* Task Assignment Form */}
      <div className="card p-3 mb-4">
        <h4 className="mb-3">📝 Assign New Task</h4>
        <div className="row g-3">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Counselor Name"
              value={counselorName}
              onChange={(e) => setCounselorName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Task Description"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-3">
            <input
              type="date"
              className="form-control"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              required
            />
          </div>
          <div className="col-md-1">
            <button className="btn btn-success w-100" onClick={addTask}>
              ➕ Add
            </button>
          </div>
        </div>
      </div>

      {/* Task Assignment Table */}
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Counselor Name</th>
              <th>Task</th>
              <th>Due Date</th>
              <th>Calendar</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr
                key={task.id}
                style={{
                  backgroundColor: task.completed ? "#d4edda" : "transparent",
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                <td>{task.id}</td>
                <td>{task.counselorName}</td>
                <td>{task.task}</td>
                <td>{task.dueDate}</td>
                <td>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => addToGoogleCalendar(task.task, task.dueDate)}
                  >
                    📅 Google
                  </button>
                  <button
                    className="btn btn-outline-info btn-sm ms-2"
                    onClick={() => addToOutlookCalendar(task.task, task.dueDate)}
                  >
                    📆 Outlook
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-warning btn-sm m-1"
                    onClick={() => setReminder(task.task, task.dueDate)}
                  >
                    🔔 Set Reminder
                  </button>
                  <button
                    className="btn btn-danger btn-sm m-1"
                    onClick={() => deleteTask(task.id)}
                  >
                    🗑 Delete
                  </button>
                  {!task.completed && (
                    <button
                      className="btn btn-success btn-sm m-1"
                      onClick={() => markCompleted(task.id)}
                    >
                      ✅ Done
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Live Notifications Section */}
      <div className="text-center mt-4">
        <button className="btn btn-success btn-lg m-1" onClick={showNotifications}>
          🔔 Show Notifications
        </button>
      </div>
    </div>
  );
}

export default TaskAssignmentCalendarIntegration;