import React from "react";
import { AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import { useAuth } from "../context/authContext";
import Button from "./Button";

const UserMenu = ({ username }) => {
  const { logoutUser } = useAuth();

  return (
    <div className="p-1 md:pt-2 hover:bg-white/20 rounded transition cursor-default relative group">
      <div className="flex gap-2 items-center sm:justify-center">
        <AiOutlineUser className="text-xl text-white border rounded-full" />
        <span className="text-sm">{username}</span>
      </div>
      <div className="bg-white absolute p-1 rounded left-0 sm:left-auto top-full md:right-0 w-max hidden group-hover:flex flex-col gap-1 shadow ">
        <span className="px-1 text-gray-900 text-sm mb-1">Options</span>
        <Button
          text="Log Out"
          classes="text-xs w-full justify-start"
          classType="secondary"
          icon={<AiOutlineLogout className="text-sm" />}
          action={logoutUser}
        />
      </div>
    </div>
  );
};

export default UserMenu;
