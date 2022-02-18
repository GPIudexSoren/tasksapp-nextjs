import React from "react";
import TaskForm from "../components/task/TaskForm";

const TaskFormContainer = () => {
  return (
    <div className="bg-gray-900/30 rounded p-3 lg:self-start">
      <h2 className="text-lg md:text-xl mb-3 font-bold">Add task</h2>
      <TaskForm />
    </div>
  );
};

export default TaskFormContainer;
