import React from 'react'

import { HashLink } from 'react-router-hash-link';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ServicesComponent from '../../components/ServicesComponent';
import logoKH from "../../assets/img/LOGO-KHACH-HANG.png"

import Banner from '../../components/Banner';
import './PackageDesign.css'
import Banner2 from '../../components/Banner2';
import ProcessWork from '../../components/ProcessWork';
import List_Client from '../../components/List_Client';
const PackageDesign = () => {
    const titleArray = ['Packing Design', 'thổi hồn vào từng chiếc hộp mang', 'thương hiệu đến khách hàng'];
    return (
        <div>
            {/* <Header /> */}
            {/* Banner */}
            <Banner2 titleArray={titleArray} imageId={165} position="0% 10%" width="" top="34%" height="56.25%" />
            <section className='flex'>
                <div className='relative w-full'>
                    <div className='max-w-7xl mx-auto'>
                        <ProcessWork />
                    </div>
                </div>
            </section>
            <Banner />
            {/* <section className='flex bg-[#CECECE]'>
                <div className='relative w-full'>
                    <div className='w-1/2 mx-auto'>
                        <br />
                        <p className='font-alexandria uppercase text-[20px] sm:text-[20pt] text-[#334862] text-center'>Các gói dịch vụ</p>
                        <br />
                    </div>
                    <div className='max-w-7xl mx-auto flex flex-col sm:flex-row'>
                        <HashLink to='/bao-gia-thiet-ke-bao-bi/#packingdesigncoban' className='sm:w-1/3 px-5 sm:px-2 md:px-[15px] pb-[30px]'>
                            <ServicesComponent
                                colBg="#FFFFFF"
                                name="THIẾT KẾ BAO BÌ cơ bản"
                                colName="#555"
                                nameE="Basic"
                                colNameE="#334862"
                                text1="Thiết kế đa dạng hộp giấy, tem nhãn, túi."
                                text2="Tối ưu quy trình đóng gói."
                                colText="#777"
                            />
                        </HashLink>
                        <HashLink to='/bao-gia-thiet-ke-bao-bi/#packingdesignnangcao' className='sm:w-1/3 px-5 sm:px-2 md:px-[15px] pb-[30px]'>
                            <ServicesComponent
                                colBg="#446084"
                                name="THIẾT KẾ BAO BÌ nâng cao"
                                colName="#FFFFFF"
                                nameE="advanced"
                                colNameE="#FFF"
                                text1="Thiết kế đa dạng hộp giấy, tem nhãn, túi."
                                text2="Tối ưu quy trình đóng gói."
                                colText="#FFF"
                            />
                        </HashLink>
                        <HashLink to='/bao-gia-thiet-ke-bao-bi/#packingdesigncaocap' className='sm:w-1/3 px-5 sm:px-2 md:px-[15px] pb-[30px]'>
                            <ServicesComponent
                                colBg="#A29E9E"
                                name="THIẾT KẾ BAO BÌ cao cấp"
                                colName="#fff"
                                nameE="premium"
                                colNameE="#334862"
                                text1="Thiết kế đa dạng hộp giấy, tem nhãn, túi."
                                text2="Tối ưu quy trình đóng gói."
                                colText="#FFF"
                            />
                        </HashLink>
                    </div>
                </div>
            </section> */}

            <section className='flex'>
                <div className='relative w-full'>
                    <div className='max-w-7xl mx-auto'>
                        <div className='px-[15px] pb-[30px]'>
                            <div className='w-1/2 mx-auto'>
                                <br />
                                <p className='font-alexandria uppercase text-[20px] sm:text-[20pt] text-[#334862] text-center'>Các dạng file</p>
                            </div>
                            <div className='font-roboto relative text-sm sm:text-base'>
                                <div className='red-line' />
                                <div className='mt-5 relative'>
                                    <div className='list-bullet mr-5' />
                                    <div className='text-[#777] table-row'>
                                        <div className='font-bold'>
                                            .Ai
                                        </div>
                                        <div className='font-normal'>
                                            Hệ màu CMYK. File sử dụng để in ấn, cho phép chỉnh sửa chi tiết. Mở bằng phần mềm Adobe Illutrator khi chỉnh sửa.
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-5 relative'>
                                    <div className='list-bullet mr-5' />
                                    <div className='text-[#777] table-row'>
                                        <div className='font-bold'>
                                            .PDF
                                        </div>
                                        <div className='font-normal'>
                                            Hệ màu CMYK. File sử dụng để in ấn, cho phép chỉnh sửa chi tiết. Mở bằng các phần mềm xem file PDF. Mở bằng Adobe Illutrator khi chỉnh sửa.
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-5 relative'>
                                    <div className='list-bullet mr-5' />
                                    <div className='text-[#777] table-row'>
                                        <div className='font-bold'>
                                            .JPG
                                        </div>
                                        <div className='font-normal'>
                                            Hệ màu CMYK. File sử dụng cho phép xem.
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-5 relative'>
                                    <div className='list-bullet mr-5' />
                                    <div className='text-[#777] table-row'>
                                        <div className='font-bold'>
                                            .PNG
                                        </div>
                                        <div className='font-normal'>
                                            Hệ màu CMYK/RGB. File sử dụng cho phép xem, đăng tải online.
                                        </div>
                                    </div>
                                    <div className='white-line' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-[#EDEDED] -mb-20'>
                <List_Client />
            </section>
            {/* <Footer /> */}
        </div>
    )
}

export default PackageDesign
