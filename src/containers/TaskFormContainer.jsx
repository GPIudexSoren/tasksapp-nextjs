import React from "react";
import TaskForm from "../components/task/TaskForm";

const TaskFormContainer = () => {
  return (
    <div className="border border-white/50 rounded p-3">
      <h2 className="text-xl mb-5">Add task</h2>
      <TaskForm />
    </div>
  );
};

export default TaskFormContainer;
