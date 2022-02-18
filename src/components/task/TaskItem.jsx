import React from "react";
import RoundedButton from "../buttons/RoundedButton";
import { AiOutlineEdit, AiOutlineEye, AiOutlineCheck } from 'react-icons/ai';
import { formatDistance } from 'date-fns';
import { useTasks } from "../../context/taskContext";

const TaskItem = ({ task }) => {
    const { setCurrentTask, currentTask } = useTasks();

  return (
    <li className={ `border-2 border-transparent ${ currentTask?.id === task.id ? 'border-slate-600' : null } bg-gray-900/30 p-3 rounded lg:self-start cursor-default group` }>
      <div>
        <h3 className="text-slate-300 group-hover:text-white transition">{task.title}</h3>
        <span className="text-xs text-slate-500">{ formatDistance(task.date, new Date()) }</span>
      </div>
      <p className="text-sm my-2 max-h-10 h-10 line-clamp-2 text-slate-500">{task.description}</p>
      <div className="flex justify-between items-end">
          <span className="text-xs text-slate-500">{ task.user }</span>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
            <RoundedButton icon={ <AiOutlineEdit className="text-lg" /> } action={ () => setCurrentTask(task) } />
            <RoundedButton icon={ <AiOutlineEye className="text-lg" /> } />
            <RoundedButton icon={ <AiOutlineCheck className="text-lg" /> } />
          </div>
      </div>
    </li>
  );
};

export default TaskItem;
