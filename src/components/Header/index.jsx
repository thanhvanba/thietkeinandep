import React from 'react'
import logo from "../../assets/img/LOGO.png"
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import DropDown from '../DropDown'
import "./header.css"

const Header = () => {
    return (
        <header className='bg-transparent absolute z-30 block w-full'>
            <div className='relative w-full'>
                <div className='max-w-[1080px] px-[15px] mx-auto h-[120px] flex justify-between items-center'>
                    <div>
                        <a>
                            <span className="sr-only">Your Company</span>
                            <img className="h-[120px] w-auto" src={logo} alt="" />
                        </a>
                    </div>
                    <div className=''>
                        <ul className='flex'>
                            <li className='mx-2 relative'>
                                <a className="flex text-[12.8px]/[16px] font-bold font-robotoSlab uppercase py-2 option-style active">
                                    TRANG CHỦ
                                </a>
                            </li>
                            <li className='mx-2 relative'>
                                {/* <a href='#' className="flex text-[12.8px]/[16px] font-bold font-robotoSlab uppercase py-2 option-style">
                                    DỊCH VỤ
                                    <ChevronDownIcon
                                        className='h-4 w-4'
                                        aria-hidden="true"
                                    />
                                </a> */}
                                <DropDown/>
                            </li>
                            <li className='mx-2 relative'>
                                <a href='#' className="flex text-[12.8px]/[16px] font-bold font-robotoSlab uppercase py-2 option-style">
                                    TIN TỨC
                                </a>
                            </li>
                            <li className='mx-2 relative'>
                                <a href='#' className="flex text-[12.8px]/[16px] font-bold font-robotoSlab uppercase py-2 option-style">
                                    DỰ ÁN
                                </a>
                            </li><li className='mx-2 relative'>
                                <a href='#' className="flex text-[12.8px]/[16px] font-bold font-robotoSlab uppercase py-2 option-style">
                                    LIÊN HỆ
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
