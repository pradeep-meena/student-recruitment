import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TaskAssignment = ({ counselors }) => {
  const [task, setTask] = useState("");
  const [counselor, setCounselor] = useState("");
  const [date, setDate] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAssignTask = () => {
    if (task && counselor && date) {
      setTasks([...tasks, { task, counselor, date }]);
      setTask("");
      setCounselor("");
      setDate("");
    }
  };
  return (
    <div className="container mt-3">
      <h4>Assign Tasks</h4>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <select
        className="form-control mb-2"
        value={counselor}
        onChange={(e) => setCounselor(e.target.value)}
      >
        <option value="">Select Counselor</option>
        {counselors.map((c, index) => (
          <option key={index} value={c}>
            {c}
          </option>
        ))}
      </select>
      <input
        type="date"
        className="form-control mb-2"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleAssignTask}>
        Assign Task
      </button>

      <table className="table mt-3">
        <thead>
          <tr>
            <th>Counselor</th>
            <th>Date</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t, index) => (
            <tr key={index}>
              <td>{t.counselor}</td>
              <td>{t.date}</td>
              <td>{t.task}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskAssignment;
