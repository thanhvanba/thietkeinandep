import React from 'react'

import Header from '../../components/Header'
const DetailProject = () => {
    return (
        <div>
            <Header />
            {/* Banner */}
            <div className='h-[full] w-full relative'>
                <div className={`pt-[56.25%] relative h-full w-full`}>
                    <div className='absolute top-0 left-0 right-0 bottom-0 h-full p-0 m-0'>

                        <div className={`absolute top-0 left-0 w-full h-full bg-logo bg-cover`}></div>


                        {/* <div className='relative h-full'>
                            <div className='relative max-w-[1080px] h-full bg-cover px-[15px] mx-auto'>
                                <div className='absolute top-0 bottom-0 right-0 left-0 h-full w-full' />
                                <div className={`absolute w-[31%] top-[34%] left-[0%]`}>
                                    <p className=''>
                                        {titleArray.map((text, index) => (
                                            <a key={index} className='font-corinthia text-[25pt] text-black font-bold'>
                                                <br />
                                                {text}
                                            </a>
                                        ))}
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            <section className='flex py-5'>
                <div className='relative w-full'>
                    <div className='max-w-[1080px] mx-auto'>
                        <div className='px-[15px] pb-[30px]'>
                            <div className='font-roboto relative'>
                                <div className='red-line' />
                                <div className='mt-5 relative'>
                                    <div className='list-bullet mr-5' />
                                    <div className='text-[#777] table-row'>
                                        <div className='font-bold'>

                                            TỔNG QUAN DỰ ÁN
                                        </div>
                                        <div className='font-normal'>

                                        </div>
                                    </div>
                                </div>
                                <div className='mt-5 relative'>
                                    <div className='list-bullet mr-5' />
                                    <div className='text-[#777] table-row'>
                                        <div className='font-bold'>
                                            KHÁCH HÀNG:
                                        </div>
                                        <div className='font-normal'>
                                            THƯƠNG HIỆU RƯỢU PHÂN PHỐI RƯỢU VN.WINE
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-5 relative'>
                                    <div className='list-bullet mr-5' />
                                    <div className='text-[#777] table-row'>
                                        <div className='font-bold'>
                                            KHU VỰC:
                                        </div>
                                        <div className='font-normal'>
                                            HỒ CHÍ MINH – VIỆT NAM.
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-5 relative'>
                                    <div className='list-bullet mr-5' />
                                    <div className='text-[#777] table-row'>
                                        <div className='font-bold'>
                                            YÊU CẦU
                                        </div>
                                        <div className='font-normal'>
                                            – BIỂU TƯỢNG SANG TRỌNG <br/>
                                            – PHÙ HỢP PHÂN KHÚC KHÁCH HÀNG CAO CẤP
                                        </div>
                                    </div>
                                    <div className='white-line' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Banner customPT="56.25%" customClassName="bg3" customBg="packageDesign" customWidth="31%" customTop="34%" titleArr={titleArray} /> */}
        </div>
    )
}

export default DetailProject
