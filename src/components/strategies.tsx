import React from 'react';

const Strategies = () => {
    return (
        <section className='w-[95%] md:w-[70%] lg:w-[70%] m-auto capitalize p-5 pt-0'>
            <h1 className='text-[24px] md:text-[28px] lg:text-[32px] font-serif font-bold text-[#495219] m-4'>
                Strategies to Reduce Photic Sneezing Triggers:
            </h1>
            <div className="space-y-4 p-4 pt-0">
                {[
                    {
                        title: 'Wear Sunglasses',
                        description: 'Sunglasses with polarized lenses can help filter out bright sunlight, reducing the chances of triggering a sneeze.'
                    },
                    {
                        title: 'Avoid Sudden Bright Light Exposure',
                        description: 'Gradually exposing your eyes to sunlight or moving into bright environments slowly can help minimize the reflex.'
                    },
                    {
                        title: 'Use Hats or Caps',
                        description: 'Wearing wide-brimmed hats can shield your eyes from direct sunlight, providing an additional layer of protection.'
                    },
                    {
                        title: 'Close or Shield Eyes',
                        description: 'When moving from a dark area to a bright one, close or shield your eyes momentarily to prevent the immediate light trigger.'
                    },
                    {
                        title: 'Tinted Car Windows',
                        description: 'Installing tinted windows in your vehicle can help reduce the amount of sunlight exposure while driving.'
                    },
                    {
                        title: 'Stay Indoors During Peak Sunlight Hours',
                        description: 'Avoiding outdoor activities during the brightest part of the day can help reduce symptom occurrence.'
                    }
                ].map((strategy, index) => (
                    <div key={index} className="p-4 border rounded-lg shadow-md bg-gray-50">
                        <h3 className="font-semibold text-lg">{strategy.title}</h3>
                        <p className="text-gray-700">{strategy.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Strategies;
