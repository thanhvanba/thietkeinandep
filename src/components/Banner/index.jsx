import React from 'react'

const Banner = ({ customPT, customClassName, customBg, customWidth, customTop, titleArr }) => {
    console.log(customWidth)
    console.log('sss')
    return (
        <div className='h-[110vh] w-full relative'>
            <div className={`pt-[${customPT}] relative h-full w-full`}>
                <div className='absolute top-0 left-0 right-0 bottom-0 h-full p-0 m-0'>
                    {/* Phần Header */}
                    <div className={`${customClassName} absolute top-0 left-0 w-full h-full bg-${customBg} bg-cover`}></div>

                    {/* Phần Nội dung chính */}
                    <div className='relative h-full'>
                        <div className='relative max-w-[1080px] h-full bg-cover px-[15px] mx-auto'>
                            <div className='absolute top-0 bottom-0 right-0 left-0 h-full w-full' />
                            <div className={`absolute w-[44%] top-[${customTop}] left-[0%]`}>
                                <p className=''>
                                    {titleArr.map((text, index) => (
                                        <a key={index} className='font-corinthia text-[25pt] text-black font-bold'>
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
    )
}

export default Banner
