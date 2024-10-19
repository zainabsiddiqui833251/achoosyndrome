import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex flex-col sm:flex-row justify-between items-center p-4 bg-[#EC2E5B] text-white w-full'>
            <div className="logo text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] font-bold mb-2 sm:mb-0 ml-0 sm:ml-10">
                AchooSyndrome
            </div>
            <div className="subject text-[1rem] sm:text-[1.3rem] md:text-[1.5rem] mr-0 sm:mr-10">
                BS PHYSIOLOGY-302
            </div>
        </nav>
    );
};

export default Navbar;

