# Task Management App

A React-based task management application that allows users to create, edit, delete, and filter tasks based on priority levels. Each task has a name, due date, priority, and details, and users can expand tasks to view more information. The app also provides the option to mark tasks as completed.

## Setup and Run Instructions

1. Clone the repository:
   bash
   git clone https://github.com/Dhananjay-3270/HockeyCurve_assignment.git
   cd HockeyCurve_assignment/vite-project
   

2. Install dependencies:
   bash
   npm install
   

3. Run the development server (using Vite):
   bash
   npm run dev
   

4. Open the app in your browser:
   Navigate to `http://localhost:3000` (or the port Vite specifies).

Features

- **Add New Task:** Users can create a new task with a name, due date, priority (High, Medium, Low), and task details.
- **Task List View:** Displays all tasks in a collapsible list with the option to expand to see task details.
- **Edit Task:** Users can edit the task's name, due date, priority, and details.
- **Delete Task:** Allows for deletion of a task from the task list.
- **Mark as Done:** Users can mark a task as completed, which will change its priority to "Done."
- **Filter Tasks:** Tasks can be filtered by priority level (All, High, Medium, Low, Done).
  
## Known Issues

- The current date validation for the due date input may not be consistent across all browsers.
- Minor layout shifts occur when expanding and collapsing task details.
  
## Additional Features

- **Form Validation:** Checks for duplicate task names when adding a new task.
- **Color Mapping:** Tasks are color-coded based on their priority (High, Medium, Low, Done).
- **Toggle Task Details:** Tasks can be expanded or collapsed to show or hide additional details.
