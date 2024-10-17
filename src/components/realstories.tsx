"use client";

import React, { useState } from "react";

const stories = [
    {
        title: "Reddit User Story",
        content:
            "A user on Reddit shared their experience of sneezing uncontrollably every time they stepped into bright sunlight after being indoors. They noted that it often led to awkward moments when they were out with friends, as they would suddenly sneeze multiple times upon exiting a building.",
    },
    {
        title: "Online Forum Discussion",
        content:
            "In an online health forum, an individual described how they discovered their photic sneeze reflex while on a family vacation. They were playing on the beach and noticed that every time they looked up at the sun, they would sneeze. This led them to wear sunglasses more often to manage their symptoms.",
    },
    {
        title: "Personal Blog Account",
        content:
            "A personal blog post recounted how a woman realized she had ACHOO syndrome after her first visit to a dermatologist. She mentioned that the bright lights in the clinic triggered her sneezing, and the doctor confirmed that this was likely due to the photic sneeze reflex. She now carries sunglasses everywhere and tries to avoid sudden exposure to bright lights.",
    },
    {
        title: "Social Media Post",
        content:
            "A tweet from a user humorously shared their struggle with sneezing every time they stepped outside after a movie, where they had been in a dark theater. They joked about how their friends found it amusing and how they had to explain their sneezing condition repeatedly.",
    },
    {
        title: "YouTube Video Testimonial",
        content:
            "In a YouTube video, a content creator explained their experience with ACHOO syndrome and how it impacts their daily life. They shared tips on managing symptoms, such as wearing hats and sunglasses, and discussed the confusion they often faced when trying to explain the syndrome to others.",
    },
];

const CustomSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === stories.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? stories.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-[70%] p-5 mx-auto">
            <h1 className='text-[24px] md:text-[28px] lg:text-[32px] font-serif font-bold text-[#495219] m-4'>case studies</h1>

            <div className="real-stories bg-white rounded-lg shadow-lg p-6 w-[95%] m-4 h-[200px]"> {/* Set a fixed width and height for the slides */}
                <h2 className="text-xl font-bold mb-2 text-[1.3vw]">{stories[currentIndex].title}</h2> {/* Adjusted text size */}
                <p className="text-gray-700 text-[15px]">{stories[currentIndex].content}</p> {/* Adjusted text size */}
            </div>
            <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
                onClick={prevSlide}
            >
                &lt;
            </button>
            <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
                onClick={nextSlide}
            >
                &gt;
            </button>
            <div className="flex justify-center mt-4">
                {stories.map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 w-2 mx-1 rounded-full ${index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default CustomSlider;

