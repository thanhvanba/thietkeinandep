import React from 'react'

import { ChevronRightIcon } from '@heroicons/react/20/solid'
import "./footer.css"
const Footer = () => {
    return (
        <footer className='w-full relative'>
            <section className='py-[30px] bg-[#36455D]'>
                <div className='w-full'>
                    <div className='max-w-[1110px] mx-auto pt-[30px] justify-center flex flex-col sm:flex-row'>
                        <div className='sm:w-1/3 px-[30px] pb-[30px]'>
                            <div className='text-[#f1f1f1]'>
                                <div className='flex-col'>
                                    <a href="/thiet-ke-thuong-hieu" className='flex items-center leading-relaxed py-[4.8px]'>
                                        <ChevronRightIcon className='h-4 w-4' />
                                        <span className='pl-2 font-robotoSlab text-[16px]'>Thiết kế thương hiệu</span>
                                    </a>
                                    <a href="/thiet-ke-bao-bi" className='flex items-center leading-relaxed py-[4.8px]'>
                                        <ChevronRightIcon className='h-4 w-4' />
                                        <span className='pl-2 font-robotoSlab text-[16px]'>Thiết kế bao bì</span>
                                    </a>
                                    <a href="/san-xuat-in-an" className='flex items-center leading-relaxed py-[4.8px]'>
                                        <ChevronRightIcon className='h-4 w-4' />
                                        <span className='pl-2 font-robotoSlab text-[16px]'>In ấn sản xuất</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='sm:w-1/3 px-[30px] pb-[30px]'>
                            <div className='text-[#f1f1f1]'>
                                <div className='flex-col'>
                                    <a href="/" className='flex items-center leading-relaxed py-[4.8px]'>
                                        <ChevronRightIcon className='h-4 w-4' />
                                        <span className='pl-2 font-robotoSlab text-[16px]'>Về chúng tôi</span>
                                    </a>
                                    <a href="/tin-tuc" className='flex items-center leading-relaxed py-[4.8px]'>
                                        <ChevronRightIcon className='h-4 w-4' />
                                        <span className='pl-2 font-robotoSlab text-[16px]'>Tin tức</span>
                                    </a>
                                    <a href="/" className='flex items-center leading-relaxed py-[4.8px]'>
                                        <ChevronRightIcon className='h-4 w-4' />
                                        <span className='pl-2 font-robotoSlab text-[16px]'>Các dự án đã thực hiện</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='sm:w-1/3 px-[30px] pb-[30px]'>
                            <div className='text-[#f1f1f1] font-robotoSlab'>
                                <div className='flex-col'>
                                    CTY TNHH TM DV GIẢI PHÁP HOME
                                    <br />
                                    52/3 Thạnh Xuân 38,
                                    P. Thạnh Xuân, Quận 12, Tp. HCM
                                    <br />
                                    Phone: 0906 260 488 (Zalo)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='pt-[10px] pb-[15px] bg-[#5b5b5b] text-[#FFFFFF80]'>
                <div className='max-w-[1080px] mx-auto px-[15px] clearfix'>
                    <div className='font-lato text-center sm:float-left'>
                        <div className='text-[12.24px]'>
                            <ul className='my-[5px] pb-[5px] border-b-[0.8px] border-[#FFFFFF14] uppercase opacity-80'>
                                <li className='mr-[5px] inline-block'>
                                    <a href="#" onClick={() => window.open("https://zalo.me/0906260488", '_blank')}>Tư vấn miễn phí</a>
                                </li>
                                <li className='ml-[5px] inline-block'>
                                    <a href="#">Porfolio</a>
                                </li>
                            </ul>
                        </div>
                        <div className='text-[14.4px]'>
                            Copyright 2024 ©&nbsp;
                            <strong className='font-semibold'>Thietkeinandep.vn</strong>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
