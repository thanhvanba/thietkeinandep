import React from 'react'
import Title from '../Title'
import logoKH from "../../assets/img/LOGO-KHACH-HANG.png"

export default function List_Client() {
    return (
        <div>
            < section className='flex' >
                <div className='relative w-full'>
                    <div className='max-w-7xl mx-auto'>
                        <div className='px-[15px] pb-[30px]'>
                            <div className='text-center pt-[15px]'>
                                <Title text={'cảm ơn đã lựa chọn chúng tôi'}></Title>
                                <div className=''>
                                    <img className='w-full h-full object-cover' src={logoKH} alt="" />
                                </div>
                                <a
                                    className='inline-block border-[#0000000D] border-[0.8px] bg-[#446084] hover:bg-[#334862] text-white px-[1.2em] leading-[2.4em]'
                                    href="#"
                                    onClick={() => window.open("https://zalo.me/0906260488", '_blank')}
                                >
                                    <span className='inline-block'>LIÊN HỆ ĐỂ ĐƯỢC TƯ VẤN!</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </ section>
        </div>
    )
}
