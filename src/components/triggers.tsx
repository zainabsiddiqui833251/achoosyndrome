import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Triggers = () => {
    return (
        <section className='w-[95%] md:w-[70%] lg:w-[60%] m-auto capitalize p-5 pt-0'>
            <h1 className='text-[24px] md:text-[28px] lg:text-[32px] font-serif font-bold text-[#495219] m-4'>
                Triggers
            </h1>
            <div className="parent flex flex-wrap justify-between items-start">
                {[
                    { icon: 'bi-sun', text: 'Sunlight' },
                    { icon: 'bi-lightning', text: 'Flashing Lights' },
                    { icon: 'bi-thermometer', text: 'Rapid Temperature Changes' },
                    { icon: 'bi-wind', text: 'Strong Odors' },
                    { icon: 'bi-cloud-fog', text: 'Dust or Allergens' },
                    { icon: 'bi-hand-thumbs-up', text: 'Tactile Stimuli' },
                ].map((trigger, index) => (
                    <div key={index} className="card transition-all duration-200 bg-gray-50 shadow-md ease-in-out hover:scale-105 hover:shadow-lg w-[100%] justify-between sm:w-[45%] md:w-[30%] lg:w-[350px] h-[100px] border-solid border-2 border-black p-3 m-2 rounded-lg flex items-center">
                        <i className={`bi ${trigger.icon} text-4xl mr-4`}></i>
                        <p className='text-[18px]'>{trigger.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Triggers;
