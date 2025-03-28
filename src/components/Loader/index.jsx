import React, { useEffect, useState } from 'react';
import './index.css';

const Loader = () => {
    // const [showPreloader, setShowPreloader] = useState(true);

    // useEffect(() => {
    //     const hidePreloader = () => {
    //         setShowPreloader(false);
    //     };

    //     const timeout = setTimeout(hidePreloader, 50000); // Điều chỉnh thời gian trễ theo nhu cầu

    //     return () => clearTimeout(timeout);
    // }, []);

    // // Bạn có thể sử dụng các chuyển tiếp hoặc hoạt hình CSS để kiểm soát hiệu ứng mờ dần
    // const preloaderStyle = {
    //     opacity: showPreloader ? 1 : 0,
    //     transition: "opacity 0.5s ease",
    //     display: "flex",
    // };

    return (
        <div className="absolute z-[999999] top-0 bottom-0 right-0 left-0" >
            <div className="loader flex justify-center items-center h-screen w-full text-2xl sm:text-4xl bg-orange-50 ">
                <span className="l">L</span>
                <span className="o">o</span>
                <span className="a">a</span>
                <span className="d">d</span>
                <span className="i">i</span>
                <span className="n">n</span>
                <span className="g">g</span>
                <span className="d1">.</span>
                <span className="d2">.</span>
            </div>
        </div>
    );
};

export default Loader;
