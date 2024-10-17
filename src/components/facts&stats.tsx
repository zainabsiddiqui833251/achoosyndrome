import React from 'react';

const Factsstats = () => {
    const facts = [
        {
            title: 'Prevalence Rates',
            content: "The photic sneeze reflex is estimated to affect 10% to 35% of the world's population. Common, it is nevertheless with variation among populations, although no specific environmental or geographical factors have been proven."
        },
        {
            title: 'Genetic Factors',
            content: "The condition follows an autosomal dominant inheritance pattern, meaning that a person has a 50% chance of inheriting the reflex if one parent carries the gene. This suggests a strong genetic basis, though the exact genes involved remain unidentified."
        }
    ];

    return (
        <section className='w-[95%] md:w-[70%] lg:w-[60%] m-auto capitalize p-5 pt-0'>
            <h1 className='text-[24px] md:text-[28px] lg:text-[32px] font-serif font-bold text-[#495219] m-4'>
                Facts and Prevalence Rate
            </h1>
            <div className='flex justify-between items-center p-4 flex-wrap'>
                {facts.map((fact, index) => (
                    <div
                        key={index}
                        className='child transition-transform duration-300 ease-in-out transform hover:scale-105 border-solid border-2 border-black w-full md:w-[350px] rounded-xl p-4 h-[auto] m-2'
                    >
                        <h3 className='font-bold text-[28px] text-[#C08261] text-center'>
                            {fact.title}
                        </h3>
                        <p>{fact.content}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Factsstats;
