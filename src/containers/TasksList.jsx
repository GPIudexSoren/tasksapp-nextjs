import React, { useEffect } from "react";
import { useTasks } from "../context/taskContext";
import TaskItem from "../components/task/TaskItem";

const TasksList = () => {
  const { getUserTasks, tasks, getTasksLength } = useTasks();

  useEffect(() => {
    getUserTasks();
  }, []);

  return (
    <div className="col-start-1 col-end-3 overflow-auto h-full">
      <h2 className="mb-3 font-bold text-lg md:text-xl flex flex-col gap-1 md:flex-row md:items-center">
        <span>My Tasks</span>
        <div className="text-sm flex items-center gap-1 text-slate-500">
          <span className="hidden md:block">•</span>
          <span className="cursor-default text-sm">
            {getTasksLength()} {getTasksLength() === 1 ? "task" : "tasks"}
          </span>
        </div>
      </h2>
      <ul className="flex flex-col gap-3 lg:grid grid-cols-2">
        {tasks.length
          ? tasks.map((task) => <TaskItem key={task.id} task={task} />)
          : null}
      </ul>
    </div>
  );
};

export default TasksList;
