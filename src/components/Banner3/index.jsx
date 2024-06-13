import React from 'react'
import { MinusIcon } from '@heroicons/react/20/solid'

const Banner3 = ({ title }) => {
    return (
        <div className='pt-20 sm:pt-[120px] bg-[#446084] relative'>
            <div className='absolute top-0 left-0 right-0 bottom-0 h-full'>
                <div className='h-[192px] sm:h-[419.778px] bg-logoHome overflow-hidden bg-top object-top bg-cover'>
                </div>
                <div className='absolute top-0 left-0 right-0 bottom-0 h-full bg-[#00000080]'>
                </div>
            </div>
            <div className='relative flex sm:min-h-[300px] py-5 px-[15px] text-center text-[18.4px] items-center'>
                <div className='text-center mx-auto text-white font-lato'>
                    <h6 className='text-[10px] sm:text-[12.88px] font-bold mb-[0.5em] opacity-80 uppercase'>
                        <a href="https://thietkeinandep.vn/category/tin-tuc/">Tin tức</a>
                    </h6>
                    <h1 className='sm:text-[31.28px] text-[14.4px] mb-2 sm:mb-[15.64px] w-full font-bold'>{title}</h1>
                    <MinusIcon className='w-full h-10 sm:h-14 text-[#0000001A] -mt-6 -mb-2 sm:-mt-8' />
                    <div className="text-[10px] sm:text-[12.88px] uppercase text-[#F1F1F1]">
                        <span >Posted on
                            <a href="https://thietkeinandep.vn/7-nguyen-tac-thiet-ke-logo-dep/" rel="bookmark">
                                <time dateTime="2023-03-02T06:47:23+00:00"> Tháng Ba 2, 2023</time>
                            </a>
                        </span>
                        <span className=""> by
                            <span>
                                <a href="https://thietkeinandep.vn/author/admin/"> admin</a>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner3
