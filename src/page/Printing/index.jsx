import React from 'react'
import { HashLink } from 'react-router-hash-link';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ServicesComponent from '../../components/ServicesComponent';
import logoKH from "../../assets/img/LOGO-KHACH-HANG.png"
import Banner from '../../components/Banner';

import './printing.css'
import Banner2 from '../../components/Banner2';
const Printing = () => {
    const titleArray = ['Printing', 'thổi hồn vào từng chiếc hộp mang', ' thương hiệu đến khách hàng'];
    return (
        <div>
            <Header />
            {/* Banner */}
            <Banner2 titleArray={titleArray} image="bg-printing" position="0% 0%" width="" top="27%" height="52.25%" />
            <section className='flex'>
                <div className='relative w-full'>
                    <div className='max-w-[1080px] mx-auto'>
                        <div className='px-[15px] pb-[30px]'>
                        <div className='md:w-3/4 mx-auto'>
                                <br />
                                <p className='font-alexandria uppercase text-[20px] sm:text-[20pt] text-[#334862] text-center'>Quy trình làm việc</p>
                            </div>
                            <div className='font-roboto relative text-sm sm:text-base'>
                                <div className='red-line' />
                                <div className='mt-5 relative'>
                                    <div className='list-bullet mr-5' />
                                    <div className='text-[#777] table-row'>
                                        <div className='font-bold'>
                                            Tư vấn
                                        </div>
                                        <div className='font-normal'>
                                            Tư vấn viên sẽ tư vấn phong cách thiết kế, bố cục, màu sắc dựa theo yêu cầu của bạn
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-5 relative'>
                                    <div className='list-bullet mr-5' />
                                    <div className='text-[#777] table-row'>
                                        <div className='font-bold'>
                                            Chọn gói thiết kế và đặt cọc
                                        </div>
                                        <div className='font-normal'>
                                            Bạn lựa chọn gói thiết kế phù hợp, đặt cọc 50% phí thiết kế
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-5 relative'>
                                    <div className='list-bullet mr-5' />
                                    <div className='text-[#777] table-row'>
                                        <div className='font-bold'>
                                            Thống nhất nội dung
                                        </div>
                                        <div className='font-normal'>
                                            Hai bên thống nhất nội dung, hình ảnh, phong cách sử dụng thiết kế.
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-5 relative'>
                                    <div className='list-bullet mr-5' />
                                    <div className='text-[#777] table-row'>
                                        <div className='font-bold'>
                                            Bắt đầu thiết kế
                                        </div>
                                        <div className='font-normal'>
                                            Bạn sẽ nhận được các mẫu thiết kế phác thảo sau 3-7 ngày làm việc (số lượng mẫu phát thảo và thời gian thiết kế tuỳ theo gói đã chọn và yêu cầu cụ thể)
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-5 relative'>
                                    <div className='list-bullet mr-5' />
                                    <div className='text-[#777] table-row'>
                                        <div className='font-bold'>
                                            Duyệt phác thảo
                                        </div>
                                        <div className='font-normal'>
                                            Chọn ra 1 mẫu phác thảo phù hợp nhất để chỉnh sửa hoàn thiện. Số lần chỉnh sửa tối đa tuỳ theo gói thiết kế bạn chọn
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-5 relative'>
                                    <div className='list-bullet mr-5' />
                                    <div className='text-[#777] table-row'>
                                        <div className='font-bold'>
                                            Hoàn thành thiết kế
                                        </div>
                                        <div className='font-normal'>
                                            Khi hoàn thiện mẫu thiết kế, file gốc của bạn (.ai, .pdf, .jpg/.png) sẽ được gửi qua email sau khi bạn thanh toán 50% phí thiết kế còn lại
                                        </div>
                                    </div>
                                    <div className='white-line' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='flex bg-[#CECECE]'>
                <div className='relative w-full'>
                    <div className='w-1/2 mx-auto'>
                        <br />
                        <p className='font-alexandria uppercase text-[20px] sm:text-[20pt] text-[#334862] text-center'>Các gói dịch vụ</p>
                        <br />
                    </div>
                    <div className='max-w-[1080px] mx-auto flex flex-col sm:flex-row'>
                        <HashLink to='/bao-gia-in-an-san-xuat/#innhanhkts' className='sm:w-1/3 px-[15px] pb-[30px]'>
                            <ServicesComponent
                                colBg="#FFFFFF"
                                name="SẢN XUẤT IN ẤN cơ bản"
                                colName="#555"
                                nameE="IN NHANH"
                                colNameE="#334862"
                                text1="In KTS, số lượng ít (danh thiếp, tem nhãn…)"
                                text2="in dữ liệu biến đổi (mã vạch, QR code…)"
                                colText="#777"
                            />
                        </HashLink>
                        <HashLink to='/bao-gia-in-an-san-xuat/#offset' className='sm:w-1/3 px-[15px] pb-[30px]'>
                            <ServicesComponent
                                colBg="#446084"
                                name="SẢN XUẤT IN ẤN nâng cao"
                                colName="#FFFFFF"
                                nameE="IN OFFSET"
                                colNameE="#FFF"
                                text1="In ấn bao bì, ấn phẩm số lượng lớn, chuẩn"
                                text2="màu sắc, đa dạng chất liệu, quy cách"
                                colText="#FFF"
                            />
                        </HashLink>
                        <HashLink to='/bao-gia-in-an-san-xuat/#posm' className='sm:w-1/3 px-[15px] pb-[30px]'>
                            <ServicesComponent
                                colBg="#A29E9E"
                                name="SẢN XUẤT IN ẤN cao cấp"
                                colName="#fff"
                                nameE="IN QUẢNG CÁO"
                                colNameE="#334862"
                                text1="In ấn phẩm quảng cáo, backdrop, Standee,"
                                text2="đồng phục, POSM…"
                                colText="#FFF"
                            />
                        </HashLink>
                    </div>
                </div>
            </section>

            <section className='flex'>
                <div className='relative w-full'>
                    <div className='max-w-[1080px] mx-auto'>
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

            <section className='flex bg-[#EDEDED]'>
                <div className='relative w-full'>
                    <div className='max-w-[1080px] mx-auto'>
                        <div className='px-[15px] pb-[30px]'>
                            <div className='text-center pt-[15px]'>
                                <div className='md:w-2/3 m-auto'>
                                    <p className='font-alexandria uppercase text-[20px] sm:text-[25pt] text-black text-center'>CẢM ƠN BẠN ĐÃ LỰA CHỌN CHÚNG TÔI !</p>
                                </div>
                                <div className='-mb-20'>
                                    <img className='w-full h-full object-cover' src={logoKH} alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Printing
