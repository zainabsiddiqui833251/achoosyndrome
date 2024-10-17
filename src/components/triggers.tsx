import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';


const Triggers = () => {
    return (
        <section className='w-[70%] m-auto capitalize p-5 pt-0'>
        <h1 className='text-[2.8vw] font-serif font-bold text-[#495219] m-4'>Triggers</h1>
        <div className="parent flex justify-between items-start flex-wrap">
            <div className="card w-[400px] h-[100px] border-solid border-2 border-black p-3 m-2 rounded-lg flex items-center">
                <i className="bi bi-sun text-4xl mr-4"></i>
                <p className='text-[18px]'>Sunlight</p>
            </div>
            <div className="card w-[400px] h-[100px] border-solid border-2 border-black p-3 m-2 rounded-lg flex items-center">
                <i className="bi bi-lightning text-4xl mr-4"></i>
                <p className='text-[18px]'>Flashing Lights</p>
            </div>
            <div className="card w-[400px] h-[100px] border-solid border-2 border-black p-3 m-2 rounded-lg flex items-center">
                <i className="bi bi-thermometer text-4xl mr-4"></i>
                <p className='text-[18px]'>Rapid Temperature Changes</p>
            </div>
            <div className="card w-[400px] h-[100px] border-solid border-2 border-black p-3 m-2 rounded-lg flex items-center">
                <i className="bi bi-wind text-4xl mr-4"></i>
                <p className='text-[18px]'>Strong Odors</p>
            </div>
            <div className="card w-[400px] h-[100px] border-solid border-2 border-black p-3 m-2 rounded-lg flex items-center">
                <i className="bi bi-cloud-fog text-4xl mr-4"></i>
                <p className='text-[18px]'>Dust or Allergens</p>
            </div>
            <div className="card w-[400px] h-[100px] border-solid border-2 border-black p-3 m-2 rounded-lg flex items-center">
                <i className="bi bi-hand-thumbs-up text-4xl mr-4"></i>
                <p className='text-[18px]'>Tactile Stimuli</p>
            </div>
        </div>
    </section>

    )
}

export default Triggers