import React from "react";

const RoundedButton = ({ icon, action, isDisabled }) => {
  return (
    <button
      className="rounded-full bg-sky-500 hover:bg-sky-600 active:bg-sky-700 disabled:opacity-30 disabled:cursor-not-allowed p-2 transition"
      onClick={ action }
      disabled={ isDisabled }
    >
      {icon}
    </button>
  );
};

export default RoundedButton;
