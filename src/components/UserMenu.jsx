import React from 'react';
import { AiOutlineUser, AiOutlineLogout } from 'react-icons/ai';
import { useAuth } from '../context/authContext';
import Button from './Button';

const UserMenu = ({ username }) => {
    const { logoutUser } = useAuth();

  return (
    <div className='p-1 md:pt-2 hover:bg-white/20 rounded transition cursor-default relative group'>
        <div className='flex gap-2 md:gap-1 items-center md:flex-col justify-center'>
            <AiOutlineUser className="text-xl text-white border rounded-full" />
            <span>{ username }</span>
        </div>
        <div className='bg-white absolute p-1 rounded top-full md:right-0 w-max hidden group-hover:flex flex-col gap-1 shadow '>
            <span className='px-1 text-gray-900 text-sm'>
                Options
            </span>
            <Button 
                text='Log Out' 
                classes='text-xs w-full justify-start' 
                classType='secondary' 
                icon={ <AiOutlineLogout className='text-sm'  /> } 
                action={ logoutUser }
            />
        </div>
    </div>
  )
}

export default UserMenu