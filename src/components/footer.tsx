import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-[#EC2E5B] text-white py-6'>
            <div className='flex flex-col items-center space-y-2 md:space-y-4'>
                <h2 className='text-[18px] md:text-[20px] lg:text-[22px] font-semibold'>Zainab Siddiqui</h2>
                <h2 className='text-[16px] md:text-[18px] lg:text-[20px] font-medium'>BS Physiology (Section B)</h2>
                <h2 className='text-[16px] md:text-[18px] lg:text-[20px] font-medium'>Dr. Sadaf Ahmed</h2>
                <h2 className='text-[16px] md:text-[18px] lg:text-[20px] font-medium'>Course Code: 302</h2>
                <h2 className='text-[16px] md:text-[18px] lg:text-[20px] font-medium'>Seat No: B23124006101</h2>
            </div>
            <p className='text-center text-[12px] md:text-[14px] lg:text-[16px] text-gray-300 mt-4'>
                &copy; 2022 Achoo Syndrome. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
