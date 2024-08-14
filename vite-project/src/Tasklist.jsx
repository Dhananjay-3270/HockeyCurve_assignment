import "./Tasklist.css";

function Tasklist() {
  const initialTasks = [
    {
      id: 1,
      name: "Task 1",
      dueDate: "30 July 2024",
      priority: "High",
      color: "#8B0000",
      details: "Details about Task 1",
      isExpanded: false,
    },
    {
      id: 2,
      name: "Task 2",
      dueDate: "25 July 2024",
      priority: "High",
      color: "#8B0000",
      details: "Details about Task 2",
      isExpanded: false,
    },
    {
      id: 3,
      name: "Task 3",
      dueDate: "01 Aug 2024",
      priority: "Medium",
      color: "#FFA500",
      details: "Details about Task 3",
      isExpanded: false,
    },
    {
      id: 4,
      name: "Task 4",
      dueDate: "12 Aug 2024",
      priority: "Medium",
      color: "#FFA500",
      details: "Details about Task 4",
      isExpanded: false,
    },
  ];
  return (
    <>
      <div className="task-list-view">
        <header>
          <div className="task-list-header">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="25"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3m-8.322.12q.322-.119.684-.12h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981z" />
            </svg>
            Task List View
          </div>
        </header>

        <div className="task-list-actions">
          <div className="addtask-btn-div">
            <button className="addtask-btn"> + Add new task</button>
          </div>
          <div className="task-list-filters">
            <button className="filter-active">All</button>
            <button className="filter">High</button>
            <button className="filter">Medium</button>
            <button className="filter">Low</button>
            <button className="filter">Done</button>
          </div>
        </div>
        <div className="task-container">
          <ul className="task-list">
            {initialTasks.map((task) => (
              <li key={task.id} className="task-list-item">
                {" "}
                <div className="task-list-item-info">
                  <button className="task-expand-button">
                    {task.isExpanded ? "▼" : "▶"}
                  </button>
                  <div>
                    <div className="task-name">{task.name}</div>
                    <div className="task-date">Due date:{task.dueDate}</div>
                  </div>
                </div>
                <div className="task-priority">
                  {task.priority}
                  <span
                    className="priority-indicator"
                    style={{ backgroundColor: task.color }}
                  ></span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default Tasklist;
