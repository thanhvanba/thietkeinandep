import React, { useState } from 'react'
import './index.css'
import { ChevronUpIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { ChevronsUp } from 'lucide-react'
import phoneCall from '../../assets/img/phone-call.png'
import { StopIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'


function BluginContact() {
    const [toggle, setToggle] = useState(false)
    return (
        <div className=''>
            <div className="alowebtot-nav">
                {toggle && <ul className='flex flex-col gap-y-1 sm:gap-y-2 md:gap-y-6'>
                    {/*pointer-events-none đã được áp dụng cho các phần tử con để đảm bảo chúng không che phủ và không làm mất khả năng click vào <a> tag. */}
                    <li className='relative flex justify-center items-center'>
                        <Link
                            to="https://maps.app.goo.gl/feDNV3qb3YyBY8xc9"
                            rel="nofollow"
                            target="_blank"
                        >
                            <i className="ticon-heart" />
                            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                                <div className="absolute -z-10 h-8 w-8 sm:w-10 sm:h-10 md:w-14 md:h-14 border-2 bg-black bg-opacity-10 rounded-full"></div>
                            </div>
                            <div className='absolute top-1 sm:top-0 left-10 sm:left-14 flex items-center justify-center'>
                                <StopIcon className='h-5 w-5 sm:h-6 sm:w-6 text-[#2b88ba] -mr-2.5 sm:-mr-3.5 rotate-45' />
                                <span className='w-[186px] font-normal h-6 sm:h-8 md:h-10 px-4 text-sm sm:text-base rounded-md bg-[#2b88ba] text-white flex items-center cursor-default'>Xem vị trí trên bản đồ</span>
                            </div>
                        </Link>
                    </li>
                    <li className='relative flex justify-center items-center'>
                        <Link to="https://zalo.me/0906260488" rel="nofollow" target="_blank">
                            <i className="ticon-zalo-circle2" />
                            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                                <div className="absolute -z-10 h-8 w-8 sm:w-10 sm:h-10 md:w-14 md:h-14 border-2 bg-black bg-opacity-10 rounded-full"></div>
                            </div>
                            <div className='absolute top-1 sm:top-0 left-10 sm:left-14 flex items-center justify-center cursor-default'>
                                <StopIcon className='h-5 w-5 sm:h-6 sm:w-6 text-[#2b88ba] -mr-2.5 sm:-mr-3.5 rotate-45' />
                                <span className='w-[128px] font-normal h-6 sm:h-8 md:h-10 px-4 text-sm sm:text-base rounded-md bg-[#2b88ba] text-white flex items-center'>Nhắn tin Zalo</span>
                            </div>
                        </Link>
                    </li>
                    <li className='relative flex justify-center items-center'>
                        <Link to="https://www.facebook.com/thietkehome" rel="nofollow" target="_blank">
                            <i className="ticon-messenger" />
                            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                                <div className="absolute -z-10 h-8 w-8 sm:w-10 sm:h-10 md:w-14 md:h-14 border-2 bg-black bg-opacity-10 rounded-full"></div>
                            </div>
                            <div className='absolute top-1 sm:top-0 left-10 sm:left-14 flex items-center justify-center'>
                                <StopIcon className='h-5 w-5 sm:h-6 sm:w-6 text-[#2b88ba] -mr-2.5 sm:-mr-3.5 rotate-45' />
                                <span className='w-[200px] font-normal h-6 sm:h-8 md:h-10 px-4 text-sm sm:text-base rounded-md bg-[#2b88ba] text-white flex items-center cursor-default'>Xem fanpage facebook</span>
                            </div>
                        </Link>
                    </li>
                    <li className='relative flex justify-center items-center'>
                        <Link className='' to="mailto:ndqlinh@gmail.com" rel="nofollow" target="_blank">
                            <i className="ticon-chat-sms" />
                            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                                <div className="absolute -z-10 h-8 w-8 sm:w-10 sm:h-10 md:w-14 md:h-14 border-2 bg-black bg-opacity-10 rounded-full"></div>
                            </div>
                            <div className='absolute top-1 sm:top-0 left-10 sm:left-14 flex items-center justify-center'>
                                <StopIcon className='h-5 w-5 sm:h-6 sm:w-6 text-[#2b88ba] -mr-2.5 sm:-mr-3.5 rotate-45' />
                                <span className='w-[250px] font-normal h-6 sm:h-8 md:h-10 px-4 text-sm sm:text-base rounded-md bg-[#2b88ba] text-white flex items-center cursor-default'>Email: ndqlinh@gmail.com</span>
                            </div>
                        </Link>

                    </li>
                </ul>
                }
            </div>

            <div onClick={() => { setToggle(!toggle) }} className="fixed left-12 bottom-14 z-50">
                <div className="relative flex justify-center items-center h-10 w-10 sm:w-12 sm:h-12 md:w-16 md:h-16  rounded-full shadow-lg">
                    {toggle ?
                        <div className='flex justify-center items-center bg-white h-8 w-8 md:h-12 md:w-12 rounded-full z-10'>
                            <XMarkIcon className='h-6 w-6 sm:w-8 sm:h-8 md:h-10 md:w-10 text-green-400' />
                        </div> :
                        <div className="relative z-10 rounded-full">
                            <img className='h-8 w-8 sm:w-10 sm:h-10 md:h-12 md:w-12 rounded-full' src={phoneCall} alt="" />
                        </div>
                    }
                    {/* Viền nhỏ gần logo */}
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="absolute w-full h-full border-2 bg-green-200 rounded-full"></div>
                    </div>
                    {/* Viền lớn ở ngoài */}
                    <div className="absolute inset-0 flex justify-center items-center z-[2000]">
                        <div className="absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-2 border-green-400 rounded-full animate-ping"></div>
                    </div>
                </div>
            </div>
            <a href='#' className="hidden md:block fixed right-5 w-auto z-50 bottom-[50px] ticon-angle-up">
                <div className="bg-[#009cf2] p-2 rounded-full">
                    <ChevronsUp className='w-4 h-4 sm:w-6 sm:h-6 md:h-8 md:w-8 text-white font-extrabold' />
                </div>
            </a>

        </div >

    )
}

export default BluginContact
