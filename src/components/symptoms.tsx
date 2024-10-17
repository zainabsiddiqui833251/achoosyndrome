import React from 'react';

const Symptoms = () => {
    return (
        <section className='w-[90%] md:w-[75%] lg:w-[70%] m-auto p-5 pt-0 capitalize'>
            <h1 className='text-[24px] md:text-[28px] lg:text-[32px] font-serif font-bold text-[#495219] m-4'>
                Description of the Sneezing Response:
            </h1>
            <p className='text-[16px] md:text-[18px] lg:text-[20px] m-4 mb-0'>
                The sneezing response in Autosomal Dominant Compelling Helio-Ophthalmic Outburst (ACHOO) Syndrome is an involuntary reflex triggered by sudden exposure to bright light, typically intense sunlight. When light enters the eyes, individuals with this syndrome may experience an immediate urge to sneeze, sometimes in rapid succession.
            </p>
            <h3 className='font-bold text-[28px] md:text-[32px] lg:text-[36px] text-[#C08261] text-center'>
                Possible Associated Symptoms:
            </h3>
            <ul className='m-4'>
                <li className='text-[16px] md:text-[18px] lg:text-[20px]'>
                    <b className='text-[18px] md:text-[20px] lg:text-[22px]'><u>Tearing:</u></b> Bright light exposure can cause excessive tearing as a secondary response to the sneeze reflex.
                </li>
                <li className='text-[16px] md:text-[18px] lg:text-[20px]'>
                    <b className='text-[18px] md:text-[20px] lg:text-[22px]'><u>Nasal Irritation:</u></b> Individuals may feel a prickling or tingling sensation in the nose just before the sneeze.
                </li>
                <li className='text-[16px] md:text-[18px] lg:text-[20px]'>
                    <b className='text-[18px] md:text-[20px] lg:text-[22px]'><u>Runny Nose:</u></b> In some cases, sneezing may be accompanied by a watery or runny nose.
                </li>
                <li className='text-[16px] md:text-[18px] lg:text-[20px]'>
                    <b className='text-[18px] md:text-[20px] lg:text-[22px]'><u>Eye Discomfort:</u></b> Light sensitivity can cause temporary discomfort or a squinting reaction in the eyes.
                </li>
            </ul>
            <p className='text-[16px] md:text-[18px] lg:text-[20px] m-4 mb-0'>
                These associated symptoms usually occur together with the sneeze reflex but may vary in intensity among individuals.
            </p>
        </section>
    );
}

export default Symptoms;
