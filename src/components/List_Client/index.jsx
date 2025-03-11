import React from 'react'
import Title from '../Title'
import logoKH from "../../assets/img/LOGO-KHACH-HANG.png"

export default function List_Client() {
    return (
        <div>
            < section className='flex' >
                <div className='relative w-full'>
                    <div className='max-w-7xl mx-auto'>
                        <div className='px-[15px]'>
                            <div className='text-center pt-[15px]'>
                                <Title text={'cảm ơn đã lựa chọn chúng tôi'}></Title>
                                <div className=''>
                                    <img
                                        loading="lazy"
                                        className='w-full h-full object-cover'
                                        src={logoKH}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </ section>
        </div>
    )
}
