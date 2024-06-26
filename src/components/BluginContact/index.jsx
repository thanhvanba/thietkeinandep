import React, { useState } from 'react'
import './index.css'
import { ChevronUpIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { ChevronsUp } from 'lucide-react'
import phoneCall from '../../assets/img/phone-call-1.png'
import { StopIcon } from '@heroicons/react/24/solid'


function BluginContact() {
    const [toggle, setToggle] = useState(false)
    return (
        <div className=''>
            <div className="alowebtot-nav">
                {toggle && <ul className='flex flex-col gap-y-6'>
                    {/*pointer-events-none đã được áp dụng cho các phần tử con để đảm bảo chúng không che phủ và không làm mất khả năng click vào <a> tag. */}
                    <li className='relative'>
                        <a
                            href="https://maps.app.goo.gl/feDNV3qb3YyBY8xc9"
                            rel="nofollow"
                            target="_blank"
                        >
                            <i className="ticon-heart" />
                        </a>
                        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                            <div className="absolute -z-10 w-14 h-14 border-2 bg-black bg-opacity-10 rounded-full"></div>
                        </div>
                        <div className='absolute top-0 left-14 flex items-center justify-center'>
                            <StopIcon className='h-6 w-6 text-[#2b88ba] -mr-3.5 rotate-45' />
                            <span className='w-[186px] h-10 px-4 rounded-md bg-[#2b88ba] text-white flex items-center cursor-default'>Xem vị trí trên bản đồ</span>
                        </div>
                    </li>
                    <li className='relative'>
                        <a href="https://zalo.me/0906260488" rel="nofollow" target="_blank">
                            <i className="ticon-zalo-circle2" />
                        </a>
                        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                            <div className="absolute -z-10 w-14 h-14 border-2 bg-black bg-opacity-10 rounded-full"></div>
                        </div>
                        <div className='absolute top-0 left-14 flex items-center justify-center cursor-default'>
                            <StopIcon className='h-6 w-6 text-[#2b88ba] -mr-3.5 rotate-45' />
                            <span className='w-[128px] h-10 px-4 rounded-md bg-[#2b88ba] text-white flex items-center'>Nhắn tin Zalo</span>
                        </div>
                    </li>
                    <li className='relative'>
                        <a href="https://www.facebook.com/thietkehome" rel="nofollow" target="_blank">
                            <i className="ticon-messenger" />
                        </a>
                        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                            <div className="absolute -z-10 w-14 h-14 border-2 bg-black bg-opacity-10 rounded-full"></div>
                        </div>
                        <div className='absolute top-0 left-14 flex items-center justify-center'>
                            <StopIcon className='h-6 w-6 text-[#2b88ba] -mr-3.5 rotate-45' />
                            <span className='w-[200px] h-10 px-4 rounded-md bg-[#2b88ba] text-white flex items-center cursor-default'>Xem fanpage facebook</span>
                        </div>
                    </li>
                    <li className='relative'>
                        <a className='' href="mailto:ndqlinh@gmail.com" rel="nofollow" target="_blank">
                            <i className="ticon-chat-sms" />
                        </a>
                        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                            <div className="absolute -z-10 w-14 h-14 border-2 bg-black bg-opacity-10 rounded-full"></div>
                        </div>
                        <div className='absolute top-0 left-14 flex items-center justify-center'>
                            <StopIcon className='h-6 w-6 text-[#2b88ba] -mr-3.5 rotate-45' />
                            <span className='w-[250px] h-10 px-4 rounded-md bg-[#2b88ba] text-white flex items-center cursor-default'>Email: ndqlinh@gmail.com</span>
                        </div>
                    </li>
                </ul>
                }
            </div>

            <div onClick={() => { setToggle(!toggle) }} className="fixed left-12 bottom-14">
                <div className="relative flex justify-center items-center w-16 h-16  rounded-full shadow-lg">
                    {toggle ?
                        <div className='flex justify-center items-center bg-white h-12 w-12 rounded-full z-10'>
                            <XMarkIcon className='h-10 w-10 text-orange-400' />
                        </div> :
                        <div className="relative z-10 rounded-full">
                            <img className='rounded-full' src={phoneCall} alt="" />
                        </div>
                    }
                    {/* Viền nhỏ gần logo */}
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="absolute w-full h-full border-2 bg-orange-200 rounded-full"></div>
                    </div>
                    {/* Viền lớn ở ngoài */}
                    <div className="absolute inset-0 flex justify-center items-center z-[2000]">
                        <div className="absolute w-20 h-20 border-2 border-orange-500 rounded-full animate-ping"></div>
                    </div>
                </div>
            </div>
            <a href='#' className="fixed right-5 w-auto z-50 bottom-[50px] ticon-angle-up">
                <div className="bg-[#009cf2] p-2 rounded-full">
                    <ChevronsUp className='h-8 w-8 text-white font-extrabold' />
                </div>
            </a>

        </div >

    )
}

export default BluginContact
