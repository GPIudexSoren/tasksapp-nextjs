import React from 'react';

const Auth = ({ children, sectionName }) => {
  return (
    <div className='bg-gray-900/30 rounded p-3 max-w-md m-auto' >
        <h1 className='text-2xl font-bold mb-5 text-sky-500'>Task App</h1>
        <h2 className='text-lg mb-3'>{ sectionName }</h2>
        { children }
    </div>
  )
}

export default Auth