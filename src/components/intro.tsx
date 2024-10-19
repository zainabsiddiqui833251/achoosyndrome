import React from 'react';

const Intro = () => {
    return (
        <section className='w-[95%] md:w-[70%] lg:w-[70%] m-auto capitalize p-5 leading-relaxed'>
            <h1 className='text-[24px] md:text-[28px] lg:text-[32px] font-serif font-bold text-[#495219] m-4'>
                Introduction:
            </h1>
            <p className='text-[16px] md:text-[18px] lg:text-[20px] m-4'>
                The <span className="font-semibold">photic sneeze reflex</span>, also called <span className="font-semibold">ACHOO syndrome</span> (Autosomal-dominant Compelling Helio-Ophthalmic Outburst), is a genetic trait that causes uncontrollable sneezing in response to sunlight or bright lights. This condition affects 18-35% of people.
            </p>
            <h1 className='text-[24px] md:text-[28px] lg:text-[32px] font-serif font-bold text-[#495219] m-4'>
                Significance
            </h1>
            <p className='text-[16px] md:text-[18px] lg:text-[20px] m-4 mb-0'>
                The <span className="font-semibold">photic sneeze reflex</span> highlights human neurological and genetic diversity. Though it is harmless, studying this phenomenon can help understand sensory processing and reflexes in the brain.
            </p>
        </section>
    );
};

export default Intro;

