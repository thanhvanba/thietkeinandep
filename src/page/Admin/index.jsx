import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { Bars3Icon, XMarkIcon, ChevronUpDownIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { FacebookIcon, Instagram, Twitter, Mail } from 'lucide-react';
import { HashLink } from 'react-router-hash-link'
import ProjectManagement from './ProjectManagement'

import logo from '../../assets/img/LOGO.png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './admin.css'

const Admin = () => {
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
            <Tabs>
                <div className='fixed top-0 bottom-0 right-0 left-0 max-w-xs shadow-right'>
                    <div className='flex items-center justify-center pt-5'>
                        <a href='/' className='h-32 w-32 '>
                            <span className="sr-only">Your Company</span>
                            <img className="h-full w-auto" src={logo} alt="" />
                        </a>
                    </div>
                    <TabList>
                        <ul className="relative text-center font-lato text-[16px] text-[#666]">
                            <Tab className="border-t-[0.8px] w-full font-robotoSlab text-[12.8px] font-extrabold uppercase text-black">
                                <div className='pl-5 py-[15px] flex '>
                                    <a href="/">Thống kê</a>
                                </div>
                            </Tab>
                            <Tab className="border-t-[0.8px] w-full font-robotoSlab text-[12.8px]">
                                <div className='flex flex-row font-extrabold uppercase text-black items-center'>
                                    <div className='pl-5 py-[15px] flex flex-grow'>
                                        <a href="#service">Quản lý dự án</a>
                                    </div>
                                    <div className='w-11 h-10 relative'>
                                        <ChevronUpDownIcon onClick={showService} className='w-6 h-6 absolute top-1 left-2 font-normal' />
                                    </div>
                                </div>

                                <ul className={`${show ? '' : 'hidden'} font-lato text-[16px] pb-[30px]`}>
                                    <li className="pl-2">
                                        <a href="/thiet-ke-logo" className='pl-5 py-[5px] flex'>Tất cả dự án</a>
                                    </li>
                                    <li className="pl-2">
                                        <a href="/thiet-ke-bao-bi" className='pl-5 py-[5px] flex'>Thêm dự án</a>
                                    </li>
                                </ul>

                            </Tab>
                            <Tab className="border-t-[0.8px] w-full font-robotoSlab text-[12.8px]">
                                <div className='flex flex-row font-extrabold uppercase text-black items-center'>
                                    <div className='pl-5 py-[15px] flex flex-grow'>
                                        <a href="#service">Quản lý Dịch vụ</a>
                                    </div>
                                    <div className='w-11 h-10 relative'>
                                        <ChevronUpDownIcon onClick={showService} className='w-6 h-6 absolute top-1 left-2 font-normal' />
                                    </div>
                                </div>

                                <ul className={`${show ? '' : 'hidden'} font-lato text-[16px] pb-[30px]`}>
                                    <li className="pl-2">
                                        <a href="/thiet-ke-logo" className='pl-5 py-[5px] flex'>Thiết kế thương hiệu</a>
                                    </li>
                                    <li className="pl-2">
                                        <a href="/thiet-ke-bao-bi" className='pl-5 py-[5px] flex'>Thiết kế bao bì</a>
                                    </li>
                                    <li className="pl-2">
                                        <a href="/san-xuat-in-an" className='pl-5 py-[5px] flex'>In ấn sản xuất</a>
                                    </li>
                                </ul>

                            </Tab>
                            <Tab className="border-t-[0.8px] w-full font-robotoSlab text-[12.8px] font-extrabold uppercase text-black">
                                <div className='pl-5 py-[15px]  flex'>
                                    <a href="/tin-tuc">Quản lý thông tin</a>
                                </div>
                            </Tab>
                            <Tab className="border-t-[0.8px] w-full font-robotoSlab text-[12.8px] font-extrabold uppercase text-black">
                                <div className='pl-5 py-[15px]  flex'>
                                    <a href="/tin-tuc">Quản lý trang tin tức</a>
                                </div>
                            </Tab>
                            <Tab className="border-t-[0.8px] w-full">
                                <div className='pl-5 py-[15px]  flex'>
                                    <FacebookIcon className='h-4 w-4 mx-1' />
                                    <Instagram className='h-4 w-4 mx-1' />
                                    <Twitter className='h-4 w-4 mx-1' />
                                    <Mail className='h-4 w-4 mx-1' />
                                </div>
                            </Tab>
                        </ul>
                    </TabList>
                </div>
                <div div className='pr-4 pb-10 pl-[336px]'>
                    <TabPanel>
                        <ProjectManagement />
                    </TabPanel>
                </div>
            </Tabs>

        </>
    )
}

export default Admin
