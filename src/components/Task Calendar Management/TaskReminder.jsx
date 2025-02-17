import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Task Reminders Component
const TaskReminders = ({ tasks }) => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    const upcomingTasks = tasks.filter((task) => {
      const taskDate = new Date(task.date);
      const today = new Date();
      return taskDate >= today;
    });
    setReminders(upcomingTasks);
  }, [tasks]);

  return (
    <div className="card p-3 mt-3">
      <h4>Task Reminders</h4>
      <p>Get notified for upcoming tasks.</p>
      <ul className="list-group">
        {reminders.length > 0 ? (
          reminders.map((task, index) => (
            <li key={index} className="list-group-item">
              {task.task} - {task.counselor} on {task.date}
            </li>
          ))
        ) : (
          <li className="list-group-item">No upcoming tasks</li>
        )}
      </ul>
      <button className="btn btn-success mt-2">Enable Notifications</button>
    </div>
  );
};

export default TaskReminders;
