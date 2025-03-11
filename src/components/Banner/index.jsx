import React from "react";
import bg from '../../assets/img/thietkewebsite.jpg'
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const CustomBanner = () => {
    return (
        <div
            className="w-full py-10 px-8 my-8 rounded-lg border border-primary/20 relative overflow-hidden"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            {/* Lớp phủ tối để chữ nổi bật */}
            <div className="absolute inset-0 bg-black/70 rounded-lg"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-white">
                    <div>
                        <h3 className="text-xl font-bold">Từ ý tưởng đến thực tế – chúng tôi biến điều đó thành hiện thực!</h3>
                        <p className="opacity-90">Liên hệ ngay để nhận tư vấn chi tiết - hoàn toàn miễn phí!</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <Link to={'mailto:ndqlinh@gmail.com'} className="flex items-center gap-2 text-white border border-white rounded-md px-3 py-1">
                        <Mail className="h-4 w-4" />
                        <span>Email: ndqlinh@gmail.com</span>
                    </Link>
                    <Link to={'https://zalo.me/0906260488'} className="flex items-center gap-2 bg-[#3f5f83] bg-opacity-80 hover:bg-opacity-100 text-white rounded-md px-3 py-1.5">
                        <Phone className="h-4 w-4" />
                        <span>Hotline: 0906.260.488</span>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default CustomBanner;
