import React from "react";

const Button = ({ text, icon, action, type, classType, classes, isDisabled }) => {
    const typeClasses = () => {
        if (classType === 'primary')
            return 'bg-sky-500 hover:bg-sky-600 focus:bg-sky-700';
        
        if (classType === 'secondary')
            return 'bg-gray-900 hover:bg-gray-800 focus:bg-slate-700';

        return 'border border-white/30 hover:border-white/100';
    }

  return (
    <button
      className={ `${ classes } ${ typeClasses() } text-white hover:translate-y-px py-2 px-3 rounded transition flex items-center justify-center gap-1 disabled:opacity-30 disabled:cursor-not-allowed` }
      type={ type }
      onClick={ action }
      disabled={ isDisabled }
    >
      { icon ?  icon : null }
      { text ? <span>{ text }</span> : null }
    </button>
  );
};

export default Button;
