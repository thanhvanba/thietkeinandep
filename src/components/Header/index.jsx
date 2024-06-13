import React from 'react'

import { useLocation, useNavigate, Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring';

import logo from "../../assets/img/LOGO.png"
import { ChevronDownIcon, Bars3Icon } from '@heroicons/react/20/solid'

import ResponsiveMenu from '../ResponsiveMenu'
import DropDown from '../DropDown'
import "./header.css"

const Header = () => {
    const [currentTab, setCurrentTab] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const handleCheckPathname = (pathname) => {
        switch (pathname) {
            case "/":
                setCurrentTab("0")
                break;
            case "/thiet-ke-thuong-hieu":
            case '/thiet-ke-bao-bi':
            case "/san-xuat-in-an":
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
    const handleScroll = () => {
        // Kiểm tra vị trí cuộn và cập nhật trạng thái scrolled
        setIsScrolled(window.scrollY > 100);
    };

    useEffect(() => {
        // Kiểm tra đường dẫn khi component được mount
        handleCheckPathname(pathname);

        // Thêm trình nghe sự kiện cuộn khi component được mount
        window.addEventListener('scroll', handleScroll);

        // Dọn sạch trình nghe sự kiện khi component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pathname]);

    const slideIn = useSpring({
        opacity: isScrolled ? 1 : 0,
        transform: isScrolled ? 'translateY(0)' : 'translateY(-100%)',
        config: { duration: 500 },
        // Các thuộc tính animation khác tùy thuộc vào yêu cầu của bạn
    });
    return (
        <>
            <animated.header style={slideIn} className={`block w-full ${isScrolled ? 'scrolled active' : 'bg-transparent absolute z-30 h-20 sm:h-[120px]'}`}>
                <div className='relative w-full h-full'>
                    <div className='max-w-[1080px] px-[15px] mx-auto h-full flex justify-between items-center'>
                        <div className='h-full'>
                            <Link to='/'>
                                <span className="sr-only">Your Company</span>
                                <img className="h-full w-auto" src={logo} alt="" />
                            </Link>
                        </div>
                        <ResponsiveMenu />
                        <div className='hidden md:block'>
                            <ul className='flex'>
                                <li className='mx-2 relative'>
                                    <Link to='/' className={`${currentTab === "0" ? 'active' : ''} flex text-[12.8px]/[16px] font-bold font-robotoSlab uppercase py-2 option-style`}>
                                        TRANG CHỦ
                                    </Link>
                                </li>
                                <li className={`${currentTab === "1" ? 'active' : ''} mx-2 relative  option-style`}>
                                    <DropDown />
                                </li>
                                <li className='mx-2 relative'>
                                    <Link to='/tin-tuc' className={`${currentTab === "2" ? 'active' : ''} flex text-[12.8px]/[16px] font-bold font-robotoSlab uppercase py-2 option-style`}>
                                        TIN TỨC
                                    </Link>
                                </li>
                                <li className='mx-2 relative'>
                                    <HashLink to='/#du-an' className="w-1/3">
                                        <p className={`${currentTab === "3" ? 'active' : ''} flex text-[12.8px]/[16px] font-bold font-robotoSlab uppercase py-2 option-style`}>
                                            DỰ ÁN
                                        </p>
                                    </HashLink>
                                </li>
                                <li className='mx-2 relative'>
                                    <a href='#' onClick={() => window.open("https://zalo.me/0906260488", '_blank')} className="flex text-[12.8px]/[16px] font-bold font-robotoSlab uppercase py-2 option-style">
                                        LIÊN HỆ
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div >
            </animated.header >
            <animated.header className={`block w-full ${isScrolled ? 'hidden' : 'bg-transparent absolute z-30 h-20 sm:h-[120px]'}`}>
                <div className='relative w-full h-full'>
                    <div className='max-w-[1080px] px-[15px] mx-auto h-full flex justify-between items-center'>
                        <div className='h-full'>
                            <Link to='/'>
                                <span className="sr-only">Your Company</span>
                                <img className="h-full w-auto" src={logo} alt="" />
                            </Link>
                        </div>
                        <ResponsiveMenu />
                        <div className='hidden md:block'>
                            <ul className='flex'>
                                <li className='mx-2 relative'>
                                    <Link to='/' className={`${currentTab === "0" ? 'active' : ''} flex text-[12.8px]/[16px] font-bold font-robotoSlab uppercase py-2 option-style`}>
                                        TRANG CHỦ
                                    </Link>
                                </li>
                                <li className={`${currentTab === "1" ? 'active' : ''} mx-2 relative  option-style`}>
                                    <DropDown />
                                </li>
                                <li className='mx-2 relative'>
                                    <Link to='/tin-tuc' className={`${currentTab === "2" ? 'active' : ''} flex text-[12.8px]/[16px] font-bold font-robotoSlab uppercase py-2 option-style`}>
                                        TIN TỨC
                                    </Link>
                                </li>
                                <li className='mx-2 relative'>
                                    <HashLink to='/#du-an' className="w-1/3">
                                        <p className={`${currentTab === "3" ? 'active' : ''} flex text-[12.8px]/[16px] font-bold font-robotoSlab uppercase py-2 option-style`}>
                                            DỰ ÁN
                                        </p>
                                    </HashLink>
                                </li><li className='mx-2 relative'>
                                    <a href='#' onClick={() => window.open("https://zalo.me/0906260488", '_blank')} className="flex text-[12.8px]/[16px] font-bold font-robotoSlab uppercase py-2 option-style">
                                        LIÊN HỆ
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </animated.header >
        </>
    )
}

export default Header
