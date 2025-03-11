import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner2 from '../../components/Banner2'
import location from '../../../src/assets/img/location.png'
import phone from '../../../src/assets/img/phone-icon.png'
import mail from '../../../src/assets/img/website-icon.png'
import fanpage from '../../../src/assets/img/support-icon.png'
import { MapPinIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'

function Contact() {
    const navigate = useNavigate()
    return (
        <div>
            {/* <Header /> */}
            <Banner2
                titleArray={[]}
                imageId={169}
                position="0% 100%"
                width=""
                top=""
                height="40%"
            />
            <div className='py-8 px-4 w-full xl:max-w-[1360px] mx-auto flex flex-col'>
                <h2 className='mb-3 md:mb-6 text-lg md:text-3xl font-bold font-lato uppercase text-[#334862]'>
                    CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ GIẢI PHÁP HOME
                </h2>
                <div className='border-2 p-2 md:p-4 text-[10px] md:text-xl space-y-1 md:space-y-2'>
                    <h3 className='font-semibold font-lato flex items-center gap-x-2'>
                        <img className='h-3 md:h-5 lg:h-6' src={location} alt="" />
                        <p className=''>CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ GIẢI PHÁP HOME</p>
                    </h3>
                    <p className='relative pl-10 md:pl-20 text-sx md:text-base font-lato'><span className='absolute top-0 left-0 text-[#334862]'>Địa chỉ:</span>52/3 Thạnh Xuân 38, P. Thạnh Xuân, Quận 12, Tp. HCM</p>
                    <p className='relative pl-10 md:pl-20 text-sx md:text-base font-lato'><span className='absolute top-0 left-0 text-[#334862]'>SĐT:</span> 0906 260 488</p>
                    <p className='relative pl-10 md:pl-20 text-sx md:text-base font-lato'><span className='absolute top-0 left-0 text-[#334862]'>Email:</span> ndqlinh@gmail.com</p>
                    <div className='flex justify-center'>
                        <div className='w-[670px] h-[240px] md:w-[1320px] md:h-[450px]'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.013651044506!2d106.67706027488416!3d10.88656588926897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528ec2cd746c7%3A0x90329209ef68fc45!2sCTY%20TNHH%20TMDV%20GI%E1%BA%A2I%20PH%C3%81P%20HOME!5e0!3m2!1svi!2s!4v1719385753678!5m2!1svi!2s"
                                width='100%'
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>

                <h2 className='my-6 text-center text-base md:text-3xl font-bold font-lato uppercase text-[#334862]'>
                    LIÊN HỆ với chúng tôi
                </h2>
                <div className='flex justify-center'>
                    <div className='flex justify-between gap-x-12 sm:gap-x-32 md:gap-x-40'>
                        <div className='cursor-pointer' onClick={() => window.open("mailto:ndqlinh@gmail.com", '_blank')}>
                            <img className='h-20 w-20 md:h-32 md:w-32' src={mail} alt="" />
                            <p className='text-center text-[#334862] font-bold text-lg hover:text-blue-500'>Email</p>
                        </div>
                        <div className='cursor-pointer' onClick={() => window.open("https://zalo.me/0906260488", '_blank')}>
                            <img className='h-20 w-20 md:h-32 md:w-32' src={phone} alt="" />
                            <p className='text-center text-[#334862] font-bold text-lg hover:text-blue-500'>Zalo</p>
                        </div>
                        <div className='cursor-pointer' onClick={() => window.open("https://www.facebook.com/thietkehome", '_blank')}>
                            <img className='h-20 w-20 md:h-32 md:w-32' src={fanpage} alt="" />
                            <p className='text-center text-[#334862] font-bold text-lg hover:text-blue-500'>Fanpage</p>
                        </div>
                    </div>

                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Contact
