import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ServicesComponent from '../../components/ServicesComponent';
import logoKH from "../../assets/img/LOGO-KHACH-HANG.png"
import Banner from '../../components/Banner';

import './printing.css'
const Printing = () => {
    const titleArray = ['Printing', 'thổi hồn vào từng chiếc hộp mang', ' thương hiệu đến khách hàng'];
    return (
        <div>
            <Header />
            {/* Banner */}
            <div className='h-[full] w-full relative'>
                <div className={`pt-[52.25%] relative h-full w-full`}>
                    <div className='absolute top-0 left-0 right-0 bottom-0 h-full p-0 m-0'>

                        <div className={`bg4 absolute top-0 left-0 w-full h-full bg-printing bg-cover`}></div>


                        <div className='relative h-full'>
                            <div className='relative max-w-[1080px] h-full bg-cover px-[15px] mx-auto'>
                                <div className='absolute top-0 bottom-0 right-0 left-0 h-full w-full' />
                                <div className={`absolute w-[44%] top-[25%] left-[0%]`}>
                                    <p className=''>
                                        {titleArray.map((text, index) => (
                                            <a key={index} className='font-corinthia text-[25pt] text-black font-bold'>
                                                <br />
                                                {text}
                                            </a>
                                        ))}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Banner customPT="55.25%" customClassName="bg4" customBg="printing" customWidth="44%" customTop="25%" titleArr={titleArray} /> */}

            <section className='flex'>
                <div className='relative w-full'>
                    <div className='max-w-[1080px] mx-auto'>
                        <div className='px-[15px] pb-[30px]'>
                            <div className='w-1/2 mx-auto'>
                                <br />
                                <p className='font-alexandria uppercase text-[20pt] text-[#334862] text-center'>Quy trình làm việc</p>
                                <br />
                            </div>
                            <div className='font-roboto relative'>
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
                        <p className='font-alexandria uppercase text-[20pt] text-[#334862] text-center'>Các gói dịch vụ</p>
                        <br />
                    </div>
                    <div className='max-w-[1080px] mx-auto flex'>
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
                    </div>
                </div>
            </section>

            <section className='flex'>
                <div className='relative w-full'>
                    <div className='max-w-[1080px] mx-auto'>
                        <div className='px-[15px] pb-[30px]'>
                            <div className='w-1/2 mx-auto'>
                                <br />
                                <p className='font-alexandria uppercase text-[20pt] text-[#334862] text-center'>Các dạng file</p>
                                <br />
                            </div>
                            <div className='font-roboto relative'>
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
                                <div className='w-2/3 m-auto'>
                                    <p className='font-alexandria uppercase text-[25pt] text-black text-center'>CẢM ƠN BẠN ĐÃ LỰA CHỌN CHÚNG TÔI !</p>
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
