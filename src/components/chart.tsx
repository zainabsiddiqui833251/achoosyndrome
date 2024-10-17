import React from 'react'
import Flowchart from './flowchart'
import Image from 'next/image'

const Chart = () => {
    return (
        <section className='w-[70%] m-auto p-5 pt-0'>
            <h1 className=' text-[2.8vw] font-serif font-bold text-[#495219] m-4'>Mechanism of Action</h1>
            <div className="parent flex justify-between items-center m-4">
                <div >
                    <Flowchart />
                </div>
                <div >
                    <Image src='/image/mechanism.png' alt='Mechanism Of Action' width={500} height={500}></Image>
                </div>
            </div>
        </section>
    )
}

export default Chart