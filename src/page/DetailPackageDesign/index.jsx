import React from 'react'

import packageBasic from '../../assets/img/Packing-design_Co-ban.svg'
import packageAdvanced from '../../assets/img/Packing-design_Nang-cao.svg'
import packagePremium from '../../assets/img/Packing-design_Cao-cap.svg'

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Banner2 from '../../components/Banner2';

const DetailPackageDesign = () => {
    const titleArray = ['Packing Design', 'thổi hồn vào từng chiếc hộp mang thương hiệu đến khách hàng'];
    return (
        <div>
            <Header />
            {/* Banner */}
            <Banner2 titleArray={titleArray} image="bg-packageDesign" position="0% 10%" width="31%" top="34%" height="56.25%" />
            <section className='flex bg-[#EDEDED]'>
                <div className='relative w-full'>
                    <div className='max-w-[1080px] mx-auto flex-col'>
                        <div id='packingdesigncoban' className='px-[15px] pb-[30px]'>
                            <div className='-mb-[30px]'>
                                <img className='w-full h-full object-cover' src={packageBasic} alt="" />
                            </div>
                        </div>
                        <div id='packingdesignnangcao' className='px-[15px] pb-[30px]'>
                            <div className='-mb-[30px]'>
                                <img className='w-full h-full object-cover' src={packageAdvanced} alt="" />
                            </div>
                        </div>
                        <div id='packingdesigncaocap' className='px-[15px] pb-[30px]'>
                            <div className=''>
                                <img className='w-full h-full object-cover' src={packagePremium} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='flex'>
                <div className='relative w-full'>
                    <div className='max-w-[1080px] mx-auto'>
                        <div className='px-[15px] pb-[30px]'>
                            <div className='w-2/3 mx-auto'>
                                <br />
                                <p className='font-alexandria uppercase text-[40px] text-[#334862] text-center'>điều khoản chung</p>
                                <br />
                            </div>
                            <div className='font-roboto relative'>
                                <div className='red-line' />
                                <div className='mt-5 relative'>
                                    <div className='list-bullet mr-5' />
                                    <div className='text-[#777] table-row'>
                                        <div className='font-bold'>
                                            CAM KẾT
                                        </div>
                                        <div className='font-normal'>
                                            Home Design cam kết đảm bảo tiến độ thiết kế. Các thay đổi nếu có gây chậm trễ thời gian thiết kế Sẽ được thông báo ngay cho khách hàng, tránh gây ảnh hưởng đến công việc kinh doanh của quý khách
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-5 relative'>
                                    <div className='list-bullet mr-5' />
                                    <div className='text-[#777] table-row'>
                                        <div className='font-bold'>
                                            THANH TOÁN
                                        </div>
                                        <div className='font-normal'>
                                            Quý khách hàng vui lòng thực hiện thanh toán đúng theo thoả thuận giữa 2 bên. Khách hàng chỉ được sử dụng mẫu thiết kế sau khi đã thanh toán hoàn tất phí thiết kế. Khách hàng không được sử dụng các mẫu phác thảo đã loại trừ vào bất kỳ mục đích gì. Nếu có nhu cầu sử dụng sẽ chịu tính phí phát sinh do 2 bên thống nhất.
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-5 relative'>
                                    <div className='list-bullet mr-5' />
                                    <div className='text-[#777] table-row'>
                                        <div className='font-bold'>
                                            TẠM DỪNG THIẾT KẾ
                                        </div>
                                        <div className='font-normal'>
                                            Trong trường hợp quý khách hàng chưa thanh toán đủ phí thiết kế hoặc tạm ngừng đơn hàng thiết kế vì các lí do khách quan thì khách hàng không có quyền sử dụng các mẫu thiết kế phác thảo cũng như mẫu thiết kế đã chỉnh sửa cuối cùng
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-5 relative'>
                                    <div className='list-bullet mr-5' />
                                    <div className='text-[#777] table-row'>
                                        <div className='font-bold'>
                                            BẢO MẬT THÔNG TIN
                                        </div>
                                        <div className='font-normal'>
                                            Home Design có trách nhiệm bảo mật thông tin, nội dung, hình ảnh thiết kế cho khách hàng. Mọi hình ảnh thiết kế, phác thảo, không được cung cấp cho bên thứ ba nếu không có sự đồng ý từ 2 bên.
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-5 relative'>
                                    <div className='list-bullet mr-5' />
                                    <div className='text-[#777] table-row'>
                                        <div className='font-bold'>
                                            BẢNG GIÁ
                                        </div>
                                        <div className='font-normal'>
                                            Bảng giá các gói thiết kế chưa bao gồm 10% VAT.
                                        </div>
                                    </div>
                                    <div className='white-line' />
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

export default DetailPackageDesign
