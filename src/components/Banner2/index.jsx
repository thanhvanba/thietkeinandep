import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Banner2({ titleArray = [], image, position, width, top, height }) {
    return (
        <div className="w-full relative bg-gray-100 flex flex-col"
            style={{ paddingTop: `${height}` }}
        >
            <div className="absolute top-0 left-0 right-0 bottom-0 h-full p-0 m-0">
                <div
                    className={`w-full h-full flex-grow ${image} bg-cover bg-no-repeat bg-center`}
                    style={{ backgroundPosition: `${position}` }}
                >
                    <div className="h-full">
                        <div className='relative max-w-[1080px] h-full bg-cover px-[15px] mx-auto'>
                            <div className={`absolute hidden sm:block left-[1%]`}
                                style={{ width: `${width}`, top: `${top}` }}
                            >
                                <p className="">
                                    {titleArray.map((text, index) => (
                                        <a
                                            key={index}
                                            className="font-corinthia text-[25pt] text-black font-bold"
                                        >
                                            <br />
                                            {text}
                                        </a>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}