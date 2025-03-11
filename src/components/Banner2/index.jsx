import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Apiservice from "../../service/apiservice";

export default function Banner2({ titleArray = [], imageId, position, width, top, height }) {
    const { getOneBannerApi } = Apiservice()
    const [banner, setBanner] = useState('')
    const handleGetItem = async () => {
        let resBanner = await getOneBannerApi(imageId)

        if (resBanner && resBanner.data)
            setBanner(resBanner.data.link)
    }

    useEffect(() => {
        handleGetItem()
    }, [])
    return (
        <div className="w-full relative bg-gray-100 flex flex-col"
            style={{ paddingTop: `30%` }}
        >
            <div className="absolute top-0 left-0 right-0 bottom-0 h-full p-0 m-0">
                <div
                    className={`w-full h-full flex-grow bg-cover bg-no-repeat bg-center`}
                    style={{
                        backgroundPosition: `${position}`,
                        backgroundImage: `url(${banner})`
                    }}
                >
                    <div className="h-full">
                        <div className='relative max-w-7xl h-full bg-cover px-[15px] mx-auto'>
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