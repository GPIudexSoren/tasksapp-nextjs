import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTasks } from "../context/taskContext";
import { useAuth } from "../context/authContext";
import UserMenu from "./UserMenu";
import Button from "../components/Button";
import { AiOutlineLogin } from "react-icons/ai";

const Navbar = () => {
  const router = useRouter();

  const { loggedUser } = useAuth();

  const onLogin = async () => {
    await router.push("/auth/login");
  };

  const getTasksLength = useTasks()?.getTasksLength;

  return (
    <header className="w-full max-w-2xl md:flex items-center justify-between px-3 md:px-0 py-3">
      <div className="mb-3 md:mb-0">
        <Link href="/">
          <a>
            <h1 className="font-bold text-xl lg:text-2xl hover:text-sky-500 transition">
              Task App
            </h1>
          </a>
        </Link>
        <span className="text-sky-500/50 cursor-default">
          {getTasksLength()} {getTasksLength() === 1 ? "task" : "tasks"}
        </span>
      </div>
      {loggedUser ? (
        <UserMenu username={ loggedUser.username } />
      ) : (
        <Button
          text="Login"
          icon={<AiOutlineLogin className="text-lg text-white" />}
          classType="primary"
          classes="w-full md:w-auto"
          action={onLogin}
        />
      )}
    </header>
  );
};

export default Navbar;
