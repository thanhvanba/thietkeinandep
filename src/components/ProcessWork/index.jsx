import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function ProcessWork() {

    // useEffect(() => {
    //     AOS.init({
    //         // Thiết lập các tùy chọn của AOS ở đây
    //         // useClassNames: true,
    //         // initClassName: false,
    //         // animatedClassName: 'animated',
    //     });
    // }, []);
    return (
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
    )
}

export default ProcessWork
