import React from 'react'

import { useLocation, useNavigate, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring';

import logo from "../../assets/img/LOGO.png"
import phone from "../../assets/img/phone-icon1.png"
import fb from "../../assets/img/iconfb2.png"

import ResponsiveMenu from './responsiveMenu'
import "./header.css"
import { Facebook, Phone, Search, ShoppingCart } from 'lucide-react';
import HeaderContent from './headerContent';

const Header = () => {
    const [currentTab, setCurrentTab] = useState('');
    console.log("🚀 ~ Header ~ currentTab:", currentTab)
    const [isScrolled, setIsScrolled] = useState(false);
    const { pathname } = useLocation()
    const handleCheckPathname = (pathname) => {
        switch (pathname) {
            case "/":
                setCurrentTab("0")
                break;
            case "/thiet-ke-logo":
            case '/thiet-ke-bao-bi':
            case '/thiet-ke-quang-cao':
                setCurrentTab("1")
                break;
            case "/tin-tuc":
                setCurrentTab("2")
                break;;
            case "/du-an":
                setCurrentTab("3")
                break;
            case "/lien-he":
                setCurrentTab("4")
                break;
            case "/san-xuat-in-an":
            case "/san-xuat-in-an/in-nhanh":
            case "/san-xuat-in-an/in-offset":
            case "/san-xuat-in-an/in-quang-cao":
                setCurrentTab("5")
                break;
        }
    }
    useEffect(() => {
        handleCheckPathname(pathname);
    }, [pathname]); // Không ảnh hưởng đến handleScroll

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []); // Chỉ chạy 1 lần khi component mount

    const slideIn = useSpring({
        opacity: isScrolled ? 1 : 0,
        transform: isScrolled ? 'translateY(0)' : 'translateY(-100%)',
        config: { duration: 500 },
        // Các thuộc tính animation khác tùy thuộc vào yêu cầu của bạn
    });
    return (
        <>
            {isScrolled ? <animated.header style={slideIn} className={`block w-full z-30 h-20 ${isScrolled ? 'scrolled active' : ''}`}>
                <div className='relative w-full h-full'>
                    <div className='max-w-7xl px-[15px] mx-auto h-full flex justify-between items-center'>
                        <div className='h-full'>
                            <Link to='/'>
                                <span className="sr-only">Your Company</span>
                                <img className="h-full w-auto" src={logo} alt="" />
                            </Link>
                        </div>
                        <ResponsiveMenu />
                        <HeaderContent currentTab={currentTab} />
                    </div>
                </div >
            </animated.header >
                :
                <animated.header className={`w-full`}>
                    <div className='relative bg-[#e9e8e8] h-20 z-30'>
                        <div className='max-w-7xl px-[15px] mx-auto h-full flex justify-between items-center'>
                            <div className='h-full'>
                                <Link to='/'>
                                    <span className="sr-only">Your Company</span>
                                    <img className="h-full w-auto" src={logo} alt="" />
                                </Link>
                            </div>
                            <ResponsiveMenu />
                            {/* Search bar */}
                            {/* <div className={`relative hidden md:block w-full md:w-1/3 my-4 md:my-0 `}>
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm sản phẩm mẫu thiết kế..."
                                    className="w-full py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#26b6a5]"
                                // value={searchQuery}
                                // onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#26b6a5]">
                                    <Search size={20} />
                                </button>
                            </div> */}
                            <div className='relative hidden md:block w-full md:w-3/5 my-4 md:my-0 font-robotoSlab'>
                                <div className='text-lg'>
                                    CTY TNHH TM DV GIẢI PHÁP HOME
                                </div>
                                <div className='text-sm font-light'>
                                    52/3/1 Thạnh Xuân 38, P. Thạnh Xuân, Quận 12, Tp. HCM
                                </div>
                                <div className='text-sm font-light'>
                                    Phone: 0906 260 488 (Zalo)
                                </div>
                            </div>
                            {/* Phone, cart and login */}
                            <div className={`items-center hidden md:flex space-x-6`}>
                                <Link to="https://zalo.me/0906260488" rel="nofollow" target="_blank" className="flex items-center">
                                    <img className="h-12 w-12" src={phone} alt="" />
                                    <div className='pl-2'>
                                        <div className='text-amber-600 font-semibold text-lg'>0906.260.488</div>
                                        <div className='text-xs'>Tư vấn bán miễn phí 24/7</div>
                                    </div>
                                </Link>

                                <Link to="https://www.facebook.com/thietkehome" rel="nofollow" target="_blank" className="relative">
                                    <img className="h-12 w-12 text-neutral-300" src={fb} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:flex bg-[#446083] justify-center items-center h-12'>
                        <HeaderContent currentTab={currentTab} />
                    </div>
                </animated.header >
            }
        </>
    )
}

export default Header
