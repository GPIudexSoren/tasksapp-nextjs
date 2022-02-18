import React from "react";
import RoundedButton from "../buttons/RoundedButton";
import { AiOutlineEdit } from 'react-icons/ai';
import { formatDistance } from 'date-fns';
import { useAuth } from "../../context/authContext";

const TaskItem = ({ task }) => {
    const { setCurrentTask } = useAuth();

  return (
    <li className="bg-gray-900/30 p-3 rounded lg:self-start cursor-default group">
      <div>
        <h3 className="text-slate-300 group-hover:text-white transition">{task.title}</h3>
        <span className="text-xs text-slate-500">{ formatDistance(task.date, new Date()) }</span>
      </div>
      <p className="text-sm my-2 max-h-10 h-10 line-clamp-2 text-slate-500">{task.description}</p>
      <div className="flex justify-between items-end">
          <span className="text-xs text-slate-500">{ task.user }</span>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
            <RoundedButton icon={ <AiOutlineEdit className="text-lg" /> } action={ () => setCurrentTask(task) } />
          </div>
      </div>
    </li>
  );
};

export default TaskItem;
