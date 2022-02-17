import React from "react";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import Button from "../components/Button";

const TaskForm = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="border border-white/50 rounded p-3">
      <h2 className="text-xl mb-5">Add task</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3 flex-grow w-full md:w-auto">
          <label className="text-gray-400 mb-2 block" htmlFor="title">
            Title
          </label>
          <input
            className="bg-white/10 rounded p-2 outline-none block w-full mb-2 border border-transparent focus:border-white/50 transition"
            id="title"
          />
          <small className="text-red-700 block">Required</small>
        </div>
        <div className="mb-3">
          <label className="text-gray-400 mb-2 block" htmlFor="description">
            Description
          </label>
          <textarea
            className="bg-white/10 rounded p-2 outline-none block w-full mb-2 border border-transparent focus:border-white/50 transition"
            id="description"
          />
        </div>
        <div className="flex flex-col-reverse md:grid gap-2 md:grid-cols-2">
          <Button
            type="reset"
            text="Reset"
            icon={<AiOutlineClose className="text-lg text-white" />}
          />
          <Button
            type="submit"
            classType="primary"
            text="Add task"
            icon={<AiOutlinePlus className="text-lg text-white" />}
          />
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
