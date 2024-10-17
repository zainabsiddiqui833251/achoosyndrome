import React from 'react';
import Flowchart from './flowchart';
import Image from 'next/image';

const Chart = () => {
    return (
        <section className='w-[70%] m-auto p-5 pt-0'>
            <h1 className='text-[24px] md:text-[28px] lg:text-[32px] font-serif font-bold text-[#495219] m-4'>Mechanism of Action</h1>
            <div className="parent flex flex-col md:flex-row justify-between items-center m-4">
                <div className="mb-4 md:mb-0">
                    <Flowchart />
                </div>
                <div>
                    <Image src='/image/mechanism.png' alt='Mechanism Of Action' width={500} height={500} />
                </div>
            </div>
        </section>
    );
}

export default Chart;
