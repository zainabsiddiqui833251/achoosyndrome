import React from 'react'

const Factsstats = () => {
    return (
        <section className='w-[70%] m-auto capitalize p-5 pt-0'>
            <h1 className=' text-[2.8vw] font-serif font-bold text-[#495219] m-4'>facts and prevelance rate</h1>
            <div className='flex justify-between items-center p-4 flex-wrap'>
                <div className='child transition-transform duration-300 ease-in-out transform hover:scale-105 border-solid border-2 border-black w-[400px] rounded-xl p-2 h-[200px]'>
                    <h3 className='font-bold text-[28px] text-[#C08261] text-center '>prevelance rates:</h3>
                    <p>The photic sneeze reflex is estimated to affect 10% to 35% of the world&apos;s population. Common, it is nevertheless with variation among populations, although no specific environmental or geographical factors have been proven</p>
                </div>
                <div className='child transition-transform duration-300 ease-in-out transform hover:scale-105 border-solid border-2 border-black w-[400px] rounded-xl p-2 h-[200px]'>
                    <h3 className='font-bold text-[28px] text-[#C08261] text-center '>Genetic Factors: </h3>
                    <p> The condition follows an autosomal dominant inheritance pattern, meaning that a person has a 50% chance of inheriting the reflex if one parent carries the gene. This suggests a strong genetic basis, though the exact genes involved remain unidentified.</p>                </div>
            </div>
        </section>
    )
}

export default Factsstats