import React, { useEffect } from "react";
import Button from "../buttons/Button";
import { AiOutlineLogin } from "react-icons/ai";
import { useFormik } from "formik";
import { useAuth } from "../../context/authContext";

const LoginForm = () => {
  const { loginUser, checkLoggedUser } = useAuth();

  useEffect(async () => {
    await checkLoggedUser();
  }, []);

  const initialValues = {
    username: "",
    password: "",
  };

  const validate = ({ username, password }) => {
    const errors = {};

    if (!username) {
      errors.username = "The username is required";
    }

    if (!password) {
      errors.password = "The password is required";
    }

    return errors;
  };

  const onSubmit = async ({ username, password }, { setSubmitting }) => {
    try {
      await loginUser({ username, password });
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  return (
    <form className="m-auto" onSubmit={formik.handleSubmit}>
      <div className="mb-3 flex-grow w-full md:w-auto">
        <label className="text-gray-400 mb-2 block" htmlFor="username">
          Username
        </label>
        <input
          className="bg-white/10 rounded p-2 outline-none block w-full mb-2 border border-transparent focus:border-white/50 transition"
          id="username"
          name="username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          autoComplete="off"
          spellCheck="false"
        />
        {formik.touched.username && formik.errors.username ? (
          <small className="text-red-700 block">{formik.errors.username}</small>
        ) : null}
      </div>
      <div className="mb-3 flex-grow w-full md:w-auto">
        <label className="text-gray-400 mb-2 block" htmlFor="password">
          Password
        </label>
        <input
          className="bg-white/10 rounded p-2 outline-none block w-full mb-2 border border-transparent focus:border-white/50 transition"
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <small className="text-red-700 block">{formik.errors.password}</small>
        )}
      </div>
      <div className="flex flex-col-reverse md:grid gap-2 md:grid-cols-2 mt-5">
        <Button
          classType="primary"
          text="Log In"
          classes="w-full col-span-2"
          icon={<AiOutlineLogin className="text-lg text-white" />}
          type="submit"
        />
      </div>
    </form>
  );
};

export default LoginForm;
