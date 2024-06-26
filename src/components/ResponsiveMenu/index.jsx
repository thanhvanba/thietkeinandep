import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { Bars3Icon, XMarkIcon, ChevronUpDownIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { FacebookIcon, Instagram, Twitter, Mail } from 'lucide-react';
import { HashLink } from 'react-router-hash-link'

import logo from "../../assets/img/LOGO.png"
import { Link } from 'react-router-dom';

const App = () => {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);
    const [showButton, setShowButton] = useState(false);

    const showService = () => {
        setShow(!show)
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
                        <Link to='/' className='h-32 w-32 '>
                            <span className="sr-only">Your Company</span>
                            <img className="h-full w-auto" src={logo} alt="" />
                        </Link>
                    </li>
                    <li className="border-t-[0.8px] w-full font-robotoSlab text-[12.8px] font-extrabold uppercase text-black">
                        <div className='pl-5 py-[15px] flex '>
                            <Link to="/">Trang chủ</Link>
                        </div>
                    </li>
                    <li className="border-t-[0.8px] w-full font-robotoSlab text-[12.8px]">
                        <div className='flex flex-row font-extrabold uppercase text-black items-center'>
                            <div className='pl-5 py-[15px] flex flex-grow'>
                                <p onClick={showService} >Dịch vụ</p>
                            </div>
                            <div className='w-11 h-10 relative'>
                                <ChevronUpDownIcon onClick={showService} className='w-6 h-6 absolute top-1 left-2 font-normal' />
                            </div>
                        </div>

                        <ul className={`${show ? '' : 'hidden'} font-lato text-[16px] pb-[30px]`}>
                            <li className="pl-2">
                                <Link to="/thiet-ke-thuong-hieu" className='pl-5 py-[5px] flex'>Thiết kế thương hiệu</Link>
                            </li>
                            <li className="pl-2">
                                <Link to="/thiet-ke-bao-bi" className='pl-5 py-[5px] flex'>Thiết kế bao bì</Link>
                            </li>
                            <li className="pl-2">
                                <Link to="/san-xuat-in-an" className='pl-5 py-[5px] flex'>In ấn sản xuất</Link>
                            </li>
                        </ul>

                    </li>
                    <li className="border-t-[0.8px] w-full font-robotoSlab text-[12.8px] font-extrabold uppercase text-black">
                        <div className='pl-5 py-[15px]  flex'>
                            <Link to="/tin-tuc">Tin tức</Link>
                        </div>
                    </li>
                    <li className="border-t-[0.8px] w-full font-robotoSlab text-[12.8px] font-extrabold uppercase text-black">
                        <div className='pl-5 py-[15px] flex'>
                            <HashLink to='/du-an/#du-an'>
                                <p href="">Dự án</p>
                            </HashLink>
                        </div>
                    </li>
                    <li className="border-t-[0.8px] w-full font-robotoSlab text-[12.8px] font-extrabold uppercase text-black">
                        <div className='pl-5 py-[15px] flex'>
                        <Link to="/lien-he">Liên hệ</Link>
                        </div>
                    </li>
                    {/* WooCommerce not Found
                    <li className="border-t-[0.8px] w-full font-robotoSlab text-[12.8px] font-extrabold uppercase text-black">
                        <div className='pl-5 py-[15px]  flex'>
                            <a href="#header-newsletter-signup" className="tooltip" title="Sign up for Newsletter">
                                <i className="icon-envelop"></i>
                                <span className="header-newsletter-title flex items-center"><EnvelopeIcon className='h-5 w-5 mr-1' />Newsletter</span>
                            </a>
                        </div>

                    </li>
                    <li className="border-t-[0.8px] w-full">
                        <div className='pl-5 py-[15px]  flex'>
                            <FacebookIcon className='h-4 w-4 mx-1' />
                            <Instagram className='h-4 w-4 mx-1' />
                            <Twitter className='h-4 w-4 mx-1' />
                            <Mail className='h-4 w-4 mx-1' />
                        </div>
                    </li> */}
                </ul>
            </Drawer>
        </>
    );
};
export default App;