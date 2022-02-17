import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children, showNavbar }) => {
    return (
        <div className='min-h-screen text-white flex flex-col items-center'>
            {
                showNavbar ? <Navbar /> : null
            }
            <main className='w-full max-w-2xl px-3 md:px-0 py-3 h-full overflow-auto'>
                {children}
            </main>
        </div>
    );
}

export default Layout;