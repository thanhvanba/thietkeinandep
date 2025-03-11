import React, { useMemo } from 'react'

import printBasic from '../../assets/img/Digital-Printing.jpg'
import printAdvanced from '../../assets/img/Offset-Printing.jpg'
import printPremium from '../../assets/img/POSM-Printing.jpg'

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Banner2 from '../../components/Banner2';
import { useLocation, useParams } from 'react-router-dom';
import Pricing from '../../components/Pricing';
import Title from '../../components/Title';
import List_Client from '../../components/List_Client';
import { option, title } from 'framer-motion/client';

const DetailPrinting = () => {
    const location = useLocation();
    const { id } = useParams()
    console.log("🚀 ~ DetailPrinting ~ id:", id)
    // Lấy giá trị của hash
    const hash = location.hash;
    const hashValue = hash.substring(1);
    const titleArray = ['Printing', 'thổi hồn vào từng chiếc hộp mang', ' thương hiệu đến khách hàng'];
    const dumbData = [
        {
            id: 'in-nhanh',
            title: 'In nhanh KTX',
            desc: `In nhanh KTS là công nghệ in ấn tiên tiến và linh hoạt, cho phép sản xuất nhanh chóng các sản phẩm in đơn giản hoặc phức tạp, đáp ứng nhu cầu của khách hàng với số lượng in linh hoạt và chất lượng cao. 
            Đặc biệt in nhanh KTS đáp ứng nhu cầu in các ấn phẩm có dữ liệu thay đổi như số thứ tự, mà bốc thăm, mã vạch, QR...`,
            option: [
                { title: 'In ấn tài liệu văn phòng:', desc: 'Giấy tiêu đề, bao thư, danh thiếp, thư mời, thiệp chúc mừng và brochure...' },
                { title: 'In ấn sách, catalogue với số lượng nhỏ:', desc: 'In kỹ thuật số cung cấp một giải pháp kinh tế và nhanh chóng cho sản xuất sách, catalo-gue với số lượng nhỏ.' },
                { title: 'In ấn hình ảnh và tranh ảnh:', desc: 'In kỹ thuật số là lựa chọn phổ biến để in các hình ảnh chất lượng cao như ảnh sản phẩm, ảnh trang trí...' },
                { title: 'In ấn bao bì:', desc: 'In kỹ thuật số được sử dụng để in tem nhãn dán trên bao bì, hộp với số lượng nhỏ. In trên đa dạng chất liệu.' },
            ]
        },
        {
            id: 'in-offset',
            title: 'In offset',
            desc: `In offset là kỹ thuật in được sử dụng khi cần sản xuất các sản phẩm in với số lượng lớn, chất lượng đồng nhất với chi phí hợp lý. `,
            option: [
                { title: 'In ấn phẩm số lượng lớn:', desc: 'Lịch, Catalogue, Tạp chí, Sách, Brochure,...' },
                { title: 'In ấn bao bì:', desc: 'In offset dùng sản xuất các loại bao bì với SỐ lượng nhiều như tem nhãn, hộp giấy, túi giấy...' },
            ]
        },
        {
            id: 'in-quang-cao',
            title: 'In quảng cáo',
            desc: `Cũng là công nghệ in KTS nhưng trên các chất liệu chuyên dụng sản xuất POSM dùng cho các hoạt động quảng cáo, truyền thông, marketing. `,
            option: [
                { title: 'In PP ngoài trời:', desc: 'Standee, Backdrop (Bạt Hiflex), Poster, Billboard, Bảng hiệu...' },
                { title: 'In ấn các vật dụng quà tặng quảng cáo:', desc: 'Áo thun, Nón, Ly, Dù, Móc khóa, Túi xách,...' },
            ]
        },
    ]

    const selectedItem = useMemo(() => dumbData.find((item) => item.id === id), [id]);
    console.log("🚀 ~ DetailPrinting ~ selectedItem:", selectedItem)
    return (
        <div>
            {/* <Header /> */}
            {/* Banner */}
            <Banner2 titleArray={titleArray} imageId={167} position="0% 0%" width="" top="27%" height="52.25%" />
            <section className='flex bg-[#EDEDED]'>
                <div className='relative w-full'>
                    <div className='max-w-7xl mx-auto flex-col'>
                        {hashValue === 'innhanhkts' &&
                            <div id='innhanhkts' className='px-[15px] pb-[30px] pt-16 -mt-16'>
                                <div className='-mb-[30px]'>
                                    <img className='w-full h-full object-cover' src={printBasic} alt="" />
                                </div>
                            </div>
                        }
                        {hashValue === 'offset' &&
                            <div id='offset' className='px-[15px] pb-[30px] pt-16 -mt-16'>
                                <div className='-mb-[30px]'>
                                    <img className='w-full h-full object-cover' src={printAdvanced} alt="" />
                                </div>
                            </div>
                        }
                        {hashValue === 'posm' &&
                            <div id='posm' className='px-[15px] pb-[30px] pt-16 -mt-16'>
                                <div className=''>
                                    <img className='w-full h-full object-cover' src={printPremium} alt="" />
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </section>

            <section className='flex'>
                <div className='relative w-full'>
                    <div className='max-w-7xl mx-auto'>
                        <div className='p-4'>
                            <Title text={selectedItem?.title} />
                            <div className='font-light text-lg'>
                                {selectedItem.desc}
                            </div>

                            <p className='font-semibold pt-8 px-6'>MỘT SỐ TRƯỜNG HỢP PHỔ BIẾN MÀ IN KỸ THUẬT SỐ ĐƯỢC SỬ DỤNG:</p>
                            <div className='max-w-6xl mx-auto'>
                                <div className='p-4'>

                                    <div className='font-roboto relative text-sm sm:text-base'>
                                        <div className='red-line' />
                                        {selectedItem && selectedItem.option.map((item, index) => (
                                            <div key={index} className='mt-5 relative'>
                                                <div className='list-bullet mr-5' />
                                                <div className='text-[#777] table-row'>
                                                    <div className='font-bold'>
                                                        {item.title}
                                                    </div>
                                                    <div className='font-normal'>
                                                        {item.desc}
                                                    </div>
                                                </div>
                                                {selectedItem.option.length - 1 === index && <div className='white-line' />}
                                            </div>
                                        ))}
                                        {/* <div className='mt-5 relative'>
                                            <div className='list-bullet mr-5' />
                                            <div className='text-[#777] table-row'>
                                                <div className='font-bold'>
                                                    In ấn tài liệu văn phòng:
                                                </div>
                                                <div className='font-normal'>
                                                    Giấy tiêu đề, bao thư, danh thiếp, thư mời, thiệp chúc mừng và brochure...
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mt-5 relative'>
                                            <div className='list-bullet mr-5' />
                                            <div className='text-[#777] table-row'>
                                                <div className='font-bold'>
                                                    In ấn sách, catalogue với số lượng nhỏ:
                                                </div>
                                                <div className='font-normal'>
                                                    In kỹ thuật số cung cấp một giải pháp kinh tế và nhanh chóng cho sản xuất sách, catalo-gue với số lượng nhỏ.
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mt-5 relative'>
                                            <div className='list-bullet mr-5' />
                                            <div className='text-[#777] table-row'>
                                                <div className='font-bold'>
                                                    In ấn hình ảnh và tranh ảnh:
                                                </div>
                                                <div className='font-normal'>
                                                    In kỹ thuật số là lựa chọn phổ biến để in các hình ảnh chất lượng cao như ảnh sản phẩm, ảnh trang trí...
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mt-5 relative'>
                                            <div className='list-bullet mr-5' />
                                            <div className='text-[#777] table-row'>
                                                <div className='font-bold'>
                                                    In ấn bao bì:
                                                </div>
                                                <div className='font-normal'>
                                                    In kỹ thuật số được sử dụng để in tem nhãn dán trên bao bì, hộp với số lượng nhỏ. In trên đa dạng chất liệu.
                                                </div>
                                            </div>
                                            <div className='white-line' />
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Banner />
            <section className='flex'>
                <div className='relative w-full'>
                    <div className='max-w-6xl mx-auto'>
                        <div className='p-4'>
                            <br />
                            <div className='font-roboto relative text-sm sm:text-base'>
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
            <section className='bg-[#EDEDED] -mb-20'>
                <List_Client />
            </section>
            {/* <Footer /> */}
        </div>
    )
}

export default DetailPrinting
