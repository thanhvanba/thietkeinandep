import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { Bars3Icon, XMarkIcon, ChevronUpDownIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { FacebookIcon, Instagram, Twitter, Mail } from 'lucide-react';
import { HashLink } from 'react-router-hash-link'
import phone from "../../assets/img/phone-icon1.png"
import fb from "../../assets/img/iconfb2.png"
import logo from "../../assets/img/LOGO.png"
import { Link } from 'react-router-dom';

const ResponsiveMenu = () => {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);
    const [showPrinting, setShowPrinting] = useState(false);
    const [showButton, setShowButton] = useState(false);

    const showService = () => {
        setShow(!show)
    }
    const handleShowPrinting = () => {
        setShowPrinting(!showPrinting)
    }
    const showDrawer = () => {
        setOpen(true);
        setShowButton(true)
    };
    const onClose = () => {
        setOpen(false);
        setShowButton(false)
    };
    return (
        <>
            <Button
                className='border-[0px] p-0 shadow-none'
                type={'default'}
                onClick={showDrawer}
                style={{ background: 'none', borderColor: 'transparent' }}
            >
                <div className={`${showButton ? 'hidden' : ''} md:hidden h-full`}>
                    <div className='relative'>
                        <Bars3Icon className='h-6 w-6' />
                    </div>
                </div>

            </Button>
            <div className={`${showButton ? '' : 'hidden'} md:hidden absolute top-2 right-2`}>
                <div className='text-white font-extrabold'>
                    <XMarkIcon className='h-8 w-8' />
                </div>
            </div>
            <Drawer
                placement={'left'}
                closable={false}
                onClose={onClose}
                open={open}
                key={'left'}
                width={280}
                // bodyStyle={{ padding: 0 }}
                style={{ background: '#FFFFFFF2' }}
            >
                <ul className="relative text-center font-lato text-[16px] text-[#666] pt-5">
                    <li className='flex items-center justify-center'>
                        <Link to='/' onClick={onClose} className='h-32 w-32 '>
                            <span className="sr-only">Your Company</span>
                            <img className="h-full w-auto" src={logo} alt="" />
                        </Link>
                    </li>
                    <li className="border-t-[0.8px] w-full font-robotoSlab text-[12.8px] font-extrabold uppercase text-black">
                        <div className='py-[15px] flex '>
                            <Link to="/" onClick={onClose}>Trang chủ</Link>
                        </div>
                    </li>
                    <li className="border-t-[0.8px] w-full font-robotoSlab text-[12.8px]">
                        <div className='flex flex-row font-extrabold uppercase text-black items-center'>
                            <div className='py-[15px] flex flex-grow'>
                                <p onClick={handleShowPrinting} >In ấn</p>
                            </div>
                            <div className='w-11 h-10 relative'>
                                <ChevronUpDownIcon onClick={handleShowPrinting} className='w-6 h-6 absolute top-1 left-2 font-normal' />
                            </div>
                        </div>

                        <ul className={`${showPrinting ? '' : 'hidden'} font-lato text-[16px] pb-[30px]`}>
                            <li className="pl-2">
                                <Link to="/san-xuat-in-an/in-nhanh" onClick={onClose} className='py-[5px] flex'>In nhanh</Link>
                            </li>
                            <li className="pl-2">
                                <Link to="/san-xuat-in-an/in-offset" onClick={onClose} className='py-[5px] flex'>In offset</Link>
                            </li>
                            <li className="pl-2">
                                <Link to="/san-xuat-in-an/in-quang-cao" onClick={onClose} className='py-[5px] flex'>In quảng cáo</Link>
                            </li>
                        </ul>

                    </li>
                    <li className="border-t-[0.8px] w-full font-robotoSlab text-[12.8px]">
                        <div className='flex flex-row font-extrabold uppercase text-black items-center'>
                            <div className='py-[15px] flex flex-grow'>
                                <p onClick={showService} >Dịch vụ</p>
                            </div>
                            <div className='w-11 h-10 relative'>
                                <ChevronUpDownIcon onClick={showService} className='w-6 h-6 absolute top-1 left-2 font-normal' />
                            </div>
                        </div>

                        <ul className={`${show ? '' : 'hidden'} font-lato text-[16px] pb-[30px]`}>
                            <li className="pl-2">
                                <Link to="/thiet-ke-logo" onClick={onClose} className='py-[5px] flex'>Thiết kế logo</Link>
                            </li>
                            <li className="pl-2">
                                <Link to="/thiet-ke-bao-bi" onClick={onClose} className='py-[5px] flex'>Thiết kế bao bì</Link>
                            </li>
                            <li className="pl-2">
                                <Link to="/thiet-ke-quang-cao" onClick={onClose} className='py-[5px] flex'>Thiết kế quảng cáo</Link>
                            </li>
                        </ul>

                    </li>
                    <li className="border-t-[0.8px] w-full font-robotoSlab text-[12.8px] font-extrabold uppercase text-black">
                        <div className='py-[15px]  flex'>
                            <Link to="/tin-tuc" onClick={onClose}>Tin tức</Link>
                        </div>
                    </li>
                    <li className="border-t-[0.8px] w-full font-robotoSlab text-[12.8px] font-extrabold uppercase text-black">
                        <div className='py-[15px] flex'>
                            <Link to='/du-an' onClick={onClose}>Dự án</Link>
                        </div>
                    </li>
                    <li className="border-t-[0.8px] w-full font-robotoSlab text-[12.8px] font-extrabold uppercase text-black">
                        <div className='py-[15px] flex'>
                            <Link to="/lien-he" onClick={onClose}>Liên hệ</Link>
                        </div>
                    </li>
                    <div className={`items-center flex space-x-3`}>
                        <Link to="https://zalo.me/0906260488" rel="nofollow" target="_blank" onClick={onClose} className="flex items-center">
                            <img className="h-10 w-10" src={phone} alt="" />
                        </Link>

                        <Link to="https://www.facebook.com/thietkehome" rel="nofollow" target="_blank" onClick={onClose} className="relative">
                            <img className="h-10 w-10 text-neutral-300" src={fb} alt="" />
                        </Link>
                    </div>
                </ul>
            </Drawer>
        </>
    );
};
export default ResponsiveMenu;