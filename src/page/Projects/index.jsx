import React, { useEffect, useState } from 'react'
import Banner2 from '../../components/Banner2'
import { MinusIcon } from '@heroicons/react/20/solid'
import logo from "../../assets/img/LOGO.png"

import Apiservice from '../../service/apiservice'

import { Link } from 'react-router-dom'
import Loader from '../../components/Loader'
import ProjectComponent from '../../components/ProjectComponent'
const Projects = () => {
    const { projectApi, } = Apiservice()

    const [loading, setLoading] = useState(false)
    const [projects, setProjects] = useState([])
    const handleGetItem = async () => {
        setLoading(true)
        let resProject = await projectApi()

        if (resProject && resProject.data)
            setProjects(resProject.data)

        setLoading(false)
    }
    useEffect(() => {
        console.log('render')
        handleGetItem()
    }, [])
    return (
        <div>
            {/* {loading ? <Loader /> */}
                 <>
                    {/* <Header /> */}
                    <Banner2 titleArray={[]} imageId={169} position="0% 100%" width="" top="" height="50%" />
                    {/* <section className='flex'>
                        <div className='py-[30px] w-full'>
                            <div className='max-w-7xl mx-auto'>
                                <div className='grid sm:grid-cols-3 mx-1'>
                                    {
                                        news && news.map((post) => (
                                            <Link to={`/tin-tuc/${post.slug}`}>
                                                <div className='mx-0.5 mb-1 border border-dashed bg-red-50 rounded-md'>
                                                    <div className='relative'>
                                                        <div className='news-item w-2/5 sm:w-3/5 mx-auto'>
                                                            <div className='h-auto relative'
                                                                style={{ paddingTop: '90%' }}>
                                                                <img className='news-over absolute w-full h-full object-cover top-0 left-0 bottom-0 right-0' src={logo} alt="" />
                                                            </div>
                                                        </div>
                                                        <div className='px-2 pt-[0.7em] pb-[0.7em] text-center text-[14.4px] font-lato'>
                                                            <div>
                                                                <h5 className='my-[0.1em] font-bold text[16.56px] text-[#555] opacity-90'>
                                                                    {post.title.rendered}
                                                                </h5>
                                                                <MinusIcon className='h-8 w-full text-[#0000001A] text-center' />
                                                            </div>
                                                        </div>
                                                        <div className='absolute table top-[0%] left-0 h-[2.8em] w-[2.8em] font-lato font-normal'>
                                                            <div className='rounded-md table-cell align-middle w-full h-full text-white bg-[#446084] p-0.5 text-center leading-[13.6px]'>
                                                                <span className=''>02</span> <br />
                                                                <span className='text-[11.2px] '>Th3</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </section> */}
                    <div>
                        <ProjectComponent products={projects} />
                    </div>
                    {/* <Footer /> */}
                </>
            
        </div>
    )
}

export default Projects
