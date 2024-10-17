import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center p-4 bg-[#EC2E5B] text-white'>
            <div className="logo text-[2.5vw] md:text-[2vw] font-bold ml-[10%]">
                AchooSyndrome
            </div>
            <div className="subject text-[1.5vw] md:text-[1.3vw] mr-[10%]">
                BS PHYSIOLOGY-302
            </div>
        </nav>
    );
};

export default Navbar;
