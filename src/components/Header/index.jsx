import React from 'react'

import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

import logo from "../../assets/img/LOGO.png"
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import DropDown from '../DropDown'
import "./header.css"

const Header = () => {
    const [currentTab, setCurrentTab] = useState('');
    const { pathname } = useLocation()

    const handleCheckPathname = (pathname) => {
        switch (pathname) {
            case "/":
                setCurrentTab("0")
                break;
            case "/thiet-ke-thuong-hieu":
            case '/thiet-ke-bao-bi':
            case "/in-an-san-xuat":
                setCurrentTab("1")
                break;
            case "/tin-tuc":
                setCurrentTab("2")
                break;;
            case "/du-an":
                setCurrentTab("3")
                break;;
        }
    }
    useEffect(() => {
        handleCheckPathname(pathname)
    }, [pathname]);
    return (
        <header className='bg-transparent absolute z-30 block w-full'>
            <div className='relative w-full'>
                <div className='max-w-[1080px] px-[15px] mx-auto h-[120px] flex justify-between items-center'>
                    <div>
                        <a href='./'>
                            <span className="sr-only">Your Company</span>
                            <img className="h-[120px] w-auto" src={logo} alt="" />
                        </a>
                    </div>
                    <div className=''>
                        <ul className='flex'>
                            <li className='mx-2 relative'>
                                <a href='./' className={`${currentTab === "0" ? 'active' : ''} flex text-[12.8px]/[16px] font-bold font-robotoSlab uppercase py-2 option-style`}>
                                    TRANG CHỦ
                                </a>
                            </li>
                            <li className={`${currentTab === "1" ? 'active' : ''} mx-2 relative  option-style`}>
                                <DropDown />
                            </li>
                            <li className='mx-2 relative'>
                                <a href='./tin-tuc' className={`${currentTab === "2" ? 'active' : ''} flex text-[12.8px]/[16px] font-bold font-robotoSlab uppercase py-2 option-style`}>
                                    TIN TỨC
                                </a>
                            </li>
                            <li className='mx-2 relative'>
                                <a href='./du-an' className={`${currentTab === "3" ? 'active' : ''} flex text-[12.8px]/[16px] font-bold font-robotoSlab uppercase py-2 option-style`}>
                                    DỰ ÁN
                                </a>
                            </li><li className='mx-2 relative'>
                                <a href='#' onClick={() => window.open("https://zalo.me/0906260488", '_blank')} className="flex text-[12.8px]/[16px] font-bold font-robotoSlab uppercase py-2 option-style">
                                    LIÊN HỆ
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
        </header >
    )
}

export default Header
