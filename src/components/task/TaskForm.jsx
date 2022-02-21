import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { AiOutlinePlus } from "react-icons/ai";
import { VscRefresh } from "react-icons/vsc";
import { useTasks } from "../../context/taskContext";
import Button from "../buttons/Button";

const TaskForm = () => {
  const { createTask, updateTask, currentTask, resetCurrentTask } = useTasks();

  let initialValues = {
    id: 0,
    title: '',
    description: ''
  };

  const validate = ({ title, description }) => {
    const errors = {};

    if (!title) {
      errors.title = "The title is required";
    }

    if (description.length > 300) {
      errors.description = `The description must be under 300 characters. Current length ${description.length}.`;
    }

    setDisableForm(!!Object.keys(errors).length);

    return errors;
  };

  const onSubmit = ({ id, title, description }, { setSubmitting, resetForm }) => {
    try {
      const task = {
        id,
        title,
        description,
      };

      if (!id) {
        createTask(task);
      } else {
        updateTask(task);
      }

      resetForm();
      setDisableForm(true);
      resetCurrentTask();
    } catch (error) {
      console.error(error);
    }
  };

  const onReset = (values, formikBag) => {
    values = initialValues;
    setDisableForm(true);
    resetCurrentTask();
  };

  
  const [disableForm, setDisableForm] = useState(true);
  
  useEffect(async () => {
    if (currentTask.id) {
      await formik.setValues({ ...currentTask });
      setDisableForm(false);
    }
  }, [currentTask]);
  
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
    onReset,
    enableReinitialize: true
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-3 flex-grow w-full md:w-auto">
        <label className="text-gray-400 mb-2 block" htmlFor="title">
          Title
        </label>
        <input
          className="bg-white/10 rounded p-2 outline-none block w-full mb-2 border border-transparent focus:border-white/50 transition"
          id="title"
          name="title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          autoComplete="off"
          spellCheck="false"
        />
        {formik.touched.title && formik.errors.title ? (
          <small className="text-red-700 block">{formik.errors.title}</small>
        ) : null}
      </div>
      <div className="mb-3">
        <label className="text-gray-400 mb-2 block" htmlFor="description">
          Description
        </label>
        <textarea
          className="bg-white/10 rounded p-2 outline-none block w-full mb-2 border border-transparent focus:border-white/50 transition"
          id="description"
          name="description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          autoComplete="off"
          spellCheck="false"
          rows={4}
        />
        {formik.touched.description && formik.errors.description ? (
          <small className="text-red-700 block">
            {formik.errors.description}
          </small>
        ) : null}
      </div>
      <div className="flex flex-col-reverse md:grid gap-2 md:grid-cols-2 mt-5">
        <Button
          type="reset"
          text="Reset"
          icon={<VscRefresh className="text-lg text-white" />}
          action={formik.resetForm}
          isDisabled={disableForm}
        />
        <Button
          type="submit"
          classType="primary"
          text="Add task"
          icon={<AiOutlinePlus className="text-lg text-white" />}
          isDisabled={disableForm}
        />
      </div>
    </form>
  );
};

export default TaskForm;
