import React, { useEffect, useState } from 'react'

import Header from '../../components/Header'

import parse from 'html-react-parser';
import Footer from '../../components/Footer';
import { useParams } from 'react-router-dom';

import Apiservice from '../../service/apiservice';
const DetailProject = () => {
    const { projectApi } = Apiservice()
    const { id } = useParams();
    console.log("🚀 ~ DetailProject ~ id:", id)
    const [project, setProject] = useState({})
    const [request, setRequest] = useState([])
    console.log("🚀 ~ DetailProject ~ request:", request)

    const handleGetItem = async (slug) => {
        let resProject = await projectApi()

        if (resProject && resProject.data) {
            const foundProject = resProject.data.find((project) => project.slug === slug);
            setRequest(foundProject.acf.request.split('-').filter(item => item.trim() !== ''))
            setProject(foundProject || {});
        }
    }

    useEffect(() => {
        handleGetItem(id)
    }, [])
    return (
        <div>
            <Header />
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


                        {/* <div className='relative h-full'>
                            <div className='relative max-w-[1080px] h-full bg-cover px-[15px] mx-auto'>
                                <div className='absolute top-0 bottom-0 right-0 left-0 h-full w-full' />
                                <div className={`absolute w-[31%] top-[34%] left-[0%]`}>
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
                        </div> */}
                    </div>
                </div>
            </div>
            <section className='flex py-5'>
                <div className='relative w-full'>
                    <div className='max-w-[1080px] mx-auto'>
                        <div className='px-[15px] pb-[30px]'>
                            {
                                project && <div className='font-roboto relative'>
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
                                                {project && project.acf && project.acf.customer ? project.acf.customer : 'N/A'}
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
                                                {project && project.acf && project.acf.area ? project.acf.area : 'N/A'}
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
                            }
                            <div className=''> {project && project.content && project.content.rendered ? parse(`${project.content.rendered}`) : 'N/A'}</div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            {/* <Banner customPT="56.25%" customClassName="bg3" customBg="packageDesign" customWidth="31%" customTop="34%" titleArr={titleArray} /> */}
        </div>
    )
}

export default DetailProject
