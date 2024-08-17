import { useEffect, useState } from "react";
import "./Tasklist.css";

function Tasklist() {
  const initialTasks = [
    {
      id: 1,
      name: "Task 1",
      dueDate: "30 July 2024",
      priority: "High",
      color: "#8B0000",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed malesuada eros, id aliquam magna. Mauris massa mi, pharetra non diam eu, aliquet dictum diam.",
      isExpanded: false,
    },
    {
      id: 2,
      name: "Task 2",
      dueDate: "25 July 2024",
      priority: "High",
      color: "#8B0000",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed malesuada eros, id aliquam magna. Mauris massa mi, pharetra non diam eu, aliquet dictum diam.",
      isExpanded: false,
    },
    {
      id: 3,
      name: "Task 3",
      dueDate: "01 Aug 2024",
      priority: "Medium",
      color: "#FFA500",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed malesuada eros, id aliquam magna. Mauris massa mi, pharetra non diam eu, aliquet dictum diam.",
      isExpanded: false,
    },
    {
      id: 4,
      name: "Task 4",
      dueDate: "12 Aug 2024",
      priority: "Medium",
      color: "#FFA500",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed malesuada eros, id aliquam magna. Mauris massa mi, pharetra non diam eu, aliquet dictum diam.",
      isExpanded: false,
    },
    {
      id: 5,
      name: "Task 5",
      dueDate: "12 Aug 2024",
      priority: "Low",
      color: "#4B0082",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed malesuada eros, id aliquam magna. Mauris massa mi, pharetra non diam eu, aliquet dictum diam.",
      isExpanded: false,
    },
  ];
  const [task, setTask] = useState(initialTasks);
  const [filter, Setfilter] = useState("All");
  const [edit, setEdit] = useState(null);
  const [newtask, setNewtask] = useState({
    name: "",
    dueDate: "",
    priority: "Medium",
    details: "",
  });
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);

  const handleFilterChange = (newFilter) => {
    Setfilter(newFilter);
  };
  const handledelete = (id) => {
    const t = task.filter((tsk) => tsk.id != id);
    console.log(t);
    setTask(t);
  };
  const filteredtask =
    filter === "All" ? task : task.filter((t) => t.priority === filter);

  const handleeditsubmit = (event, id) => {
    event.preventDefault();
    const t = [...task];
    t.map((tsk) => {
      if (tsk.id == id) {
        tsk.name = event.target.name.value;
        tsk.details = event.target.details.value;
        tsk.dueDate = event.target.dueDate.value;
      }
    });
    setTask(t);
    setEdit(null);
  };
  const handleshowdetail = (id) => {
    const demotask = [...task];
    const d = demotask.map((t) => {
      if (t.id == id) {
        t.isExpanded = !t.isExpanded;
      }
      return t;
    });
    setTask(d);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewtask({ ...newtask, [name]: value });
  };
  const addtask = (event) => {
event.preventDefault()
    const id = task.length + 1;
    const colormap = {
      High: "#8B0000",
      Medium: "#FFA500",
      Low: "#90EE90",
    };
    const newtaskobj = {
      ...newtask,
      id,
      color: colormap[newtask.priority],
      isExpanded: false,
    };
   
    setTask([...task, newtaskobj]);
    setShowAddTaskForm(false);
    setNewtask({ name: "", dueDate: "", priority: "Medium", details: "" });
console.log(task)
  };
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
            <button
              className="addtask-btn"
              onClick={() => setShowAddTaskForm(!showAddTaskForm)}
            >
              {showAddTaskForm ? "Cancel" : "+ Add New Task"}
            </button>
          </div>
          <>          {showAddTaskForm && (
            <div className="add-task-form">
              <input
                type="text"
                name="name"
                placeholder="Task Name"
                value={newtask.name}
                onChange={handleInputChange}
              />
              <input
                type="date"
                name="dueDate"
                value={newtask.dueDate}
                onChange={handleInputChange}
              />
              <select
                name="priority"
                value={newtask.priority}
                onChange={handleInputChange}
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              <textarea
                name="details"
                placeholder="Task Details"
                value={newtask.details}
                onChange={handleInputChange}
              ></textarea>
              <button onClick={addtask}>Add Task</button>
            </div>
          )}
          </>


          <div className="task-list-filters">
            <button
              className={filter === "All" ? "filter-active" : "filter"}
              onClick={() => handleFilterChange("All")}
            >
              All
            </button>
            <button
              className={filter === "High" ? "filter-active" : "filter"}
              onClick={() => handleFilterChange("High")}
            >
              High
            </button>
            <button
              className={filter === "Medium" ? "filter-active" : "filter"}
              onClick={() => handleFilterChange("Medium")}
            >
              Medium
            </button>
            <button
              className={filter === "Low" ? "filter-active" : "filter"}
              onClick={() => handleFilterChange("Low")}
            >
              Low
            </button>
            <button
              className={filter === "Done" ? "filter-active" : "filter"}
              onClick={() => handleFilterChange("Done")}
            >
              Done
            </button>
          </div>
          <div className="task-container">
          <ul className="task-list">
            {filteredtask.map((t) => (
              <li key={t.id}>
                {edit === t.id ? (
                  <>
                    <div className="editbox">
                      <div className="edit-heading">
                        <div className="edit-heading-text">Edit task</div>
                        <button onClick={() => handledelete(t.id)}>
                          Delete
                        </button>
                      </div>
                      <div className="edit-form">
                        <form
                          className="form"
                          onSubmit={() => handleeditsubmit(event, t.id)}
                        >
                          <input
                            type="text"
                            name="name"
                            placeholder="Task name"
                          />
                          <input
                            type="text"
                            name="details"
                            placeholder="Edit details"
                          />
                          <input type="date" name="dueDate" />
                          <select name="priority">
                            <option value=""> Select Priority</option>

                            <option value="High">
                              <div className="option">
                                <h4>High</h4>
                                <span
                                  className="priority-indicator-small"
                                  style={{ backgroundColor: "#8B0000" }}
                                ></span>
                              </div>
                            </option>
                            <option value="High">Medium</option>
                            <option value="High">Low</option>
                          </select>
                          <div className="edit-form-btn">
                            <button type="submit">Save Changes</button>
                            <button disabled> Mark as Done</button>
                          </div>
                        </form>
                      </div>

                      <div className="edit-form-cancel-btn">
                        <button onClick={() => setEdit(null)}>Cancel</button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="task-list-item">
                    <div className="task-list-item-info">
                      <div>
                        <button
                          onClick={() => handleshowdetail(t.id)}
                          className="task-expand-button"
                        >
                          {t.isExpanded ? "▼" : "▶"}
                        </button>
                        <div>
                          <div className="task-name">{t.name}</div>
                          <div className="task-date">Due date:{t.dueDate}</div>
                        </div>
                      </div>
                      <div className="task-priority">
                        {t.priority}
                        <span
                          className="priority-indicator"
                          style={{ backgroundColor: t.color }}
                        ></span>
                      </div>
                    </div>

                    <div>
                      {t.isExpanded && (
                        <div className="task-details">
                          <div>Description:{t.details}</div>
                          <div>Due date:{t.dueDate}</div>
                          <div className="task-edit-button">
                            <button onClick={() => setEdit(t.id)}>Edit</button>

                            <button onClick={() => handledelete(t.id)}>
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        </div>
      
      </div>
    </>
  );
}
export default Tasklist;
