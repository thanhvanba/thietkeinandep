import React, { useEffect, useState } from 'react'

import { Carousel, Modal } from "antd";

import parse from 'html-react-parser';
import './detailProject.css'
import { ChevronLeft, ChevronRight } from 'lucide-react';
const DetailProject = ({ visible, onClose, listProject, project, request, onSelectProduct }) => {
    console.log("🚀 ~ DetailProject ~ project:", project)
    const CustomPrevArrow = ({ currentSlide, slideCount, ...props }) => (
        <button {...props} className="custom-arrow left-1 md:left-5">
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>
    );

    const CustomNextArrow = ({ currentSlide, slideCount, ...props }) => (
        <button {...props} className="custom-arrow right-1 md:right-5">
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>
    );
    return (
        <Modal
            open={visible}
            onCancel={onClose}
            footer={null}
            width="100vw"
            className="custom-modal"
            style={{ top: 0, height: "100vh", maxWidth: "100%", margin: "0 auto" }}
            bodyStyle={{ height: "100%", overflow: "visible", display: "flex", flexDirection: "column" }} // Bỏ overflow: auto
        >
            <div className="p-1 md:p-2 lg:p-3 w-full">
                {/* <Header /> */}
                {/* Banner */}
                <div className='h-[full] w-full relative'>
                    <div className={`pt-[56.25%] relative h-full w-full`}>
                        <div className='absolute top-0 left-0 right-0 bottom-0 h-full p-0 m-0'>

                            <div
                                className={`absolute top-0 left-0 w-full h-full bg-cover`}
                                style={{
                                    backgroundImage: project && project.acf && project.acf.img_header && project.acf.img_home
                                        ? `url(${project.acf.img_header})`
                                        : ``
                                }}
                            />
                        </div>
                    </div>
                </div>
                <section className='flex py-5'>
                    <div className='relative w-full'>
                        <div className='max-w-7xl mx-auto'>
                            <div className='px-[15px] pb-[30px]'>
                                {/* {
                                    project && <div className='font-roboto relative text-sm sm:text-base'>
                                        <div className='red-line' />
                                        <div className='mt-5 relative'>
                                            <div className='list-bullet mr-5' />
                                            <div className='text-[#777] table-row'>
                                                <div className='font-bold'>

                                                    TỔNG QUAN DỰ ÁN
                                                </div>
                                                <div className='font-normal'>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='mt-5 relative'>
                                            <div className='list-bullet mr-5' />
                                            <div className='text-[#777] table-row'>
                                                <div className='font-bold'>
                                                    KHÁCH HÀNG:
                                                </div>
                                                <div className='font-normal'>
                                                    {project && project.acf && project.acf.customer ? project.acf.customer : ''}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mt-5 relative'>
                                            <div className='list-bullet mr-5' />
                                            <div className='text-[#777] table-row'>
                                                <div className='font-bold'>
                                                    KHU VỰC:
                                                </div>
                                                <div className='font-normal'>
                                                    {project && project.acf && project.acf.area ? project.acf.area : ''}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mt-5 relative'>
                                            <div className='list-bullet mr-5' />
                                            <div className='text-[#777] table-row'>
                                                <div className='font-bold'>
                                                    YÊU CẦU
                                                </div>
                                                <ul className='font-normal'>
                                                    {request.map((item, index) => (
                                                        <li key={index}>{`- ${item.trim()}`}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className='white-line' />
                                        </div>
                                    </div>
                                } */}
                                <div className='text-sm sm:text-base'> {project && project.content && project.content.rendered ? parse(`${project.content.rendered}`) : ''}</div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <Footer /> */}
                <div className='bg-zinc-500/70 px-2 lg:px-8'>
                    <Carousel
                        arrows
                        infinite={false}
                        dots={{ className: "custom-dots" }}
                        slidesToShow={4}
                        prevArrow={<CustomPrevArrow />}
                        nextArrow={<CustomNextArrow />}
                        responsive={[
                            {
                                breakpoint: 1024,
                                settings: { slidesToShow: 2 }
                            },
                            {
                                breakpoint: 640,
                                settings: { slidesToShow: 1 }
                            }
                        ]}>
                        {listProject.map((product) => (
                            <div
                                key={product.id}
                                className="p-2 cursor-pointer"
                                onClick={() => onSelectProduct(product.slug)}
                            >
                                <div className="rounded-lg overflow-hidden shadow-lg">
                                    {/* Hình ảnh */}
                                    <img
                                        src={product.acf.img_home}
                                        alt={product.acf.project_name}
                                        className="w-full h-56 object-cover"
                                    />
                                    {/* Thông tin bên dưới */}
                                    <div className="p-4 text-center">
                                        <h3 className="text-lg font-semibold text-white">{product.acf.project_name}</h3>
                                        <p className="text-sm text-amber-700">{product.acf.services}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </Modal>
    )
}
export default DetailProject;
