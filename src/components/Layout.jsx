import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children, showNavbar }) => {
    return (
        <div className='min-h-screen text-white flex flex-col items-center'>
            {
                showNavbar ? <Navbar /> : null
            }
            <main className='w-full flex-grow max-w-7xl px-3 md:mx-3 py-3 h-full overflow-auto'>
                {children}
            </main>
        </div>
    );
}

export default Layout;