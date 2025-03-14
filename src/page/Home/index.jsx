import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

import logo from "../../assets/img/LOGO.png"
import logoKH from "../../assets/img/LOGO-KHACH-HANG.png"

import ServicesComponent from '../../components/ServicesComponent';
import ProjectComponent from '../../components/ProjectComponent';
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import Banner2 from '../../components/Banner2';

import Apiservice from '../../service/apiservice';

import './home.css'
import { MinusIcon } from '@heroicons/react/20/solid';
import Loader from '../../components/Loader';
import LoaderStyle2 from '../../components/LoaderStyle2';
import Title from '../../components/Title';
import List_Client from '../../components/List_Client';
const Home = () => {
  const titleArray = ['Chúng tôi cùng bạn tạo nên kết nối', 'từ thương hiệu đến khách hàng'];

  const { serviceApi, projectApi, newsApi } = Apiservice()

  const [loading, setLoading] = useState(false)
  const [services, setServices] = useState([])
  const [projects, setProjects] = useState([])
  const [news1, setNews1] = useState([])
  const [news2, setNews2] = useState([])
  const handleGetItem = async () => {
    setLoading(true)
    let resService = await serviceApi()
    let resProject = await projectApi()
    let resNews = await newsApi()

    if (resService && resService.data)
      setServices(resService.data)

    if (resProject && resProject.data)
      setProjects(resProject.data)

    if (resNews && resNews.data) {
      setNews1(resNews.data.slice(0, 2))
      setNews2(resNews.data.slice(2, 5))
    }
    setLoading(false)
  }
  useEffect(() => {
    handleGetItem()
  }, [])

  return (
    <>
      {/* {loading ? <Loader /> : */}
      <div className='relative'>
        <>
          {/* <Header /> */}
          <Banner2 titleArray={titleArray} imageId={160} position="0% 100%" width="" top="34%" height="50%" />
          {/* Dịch vụ */}
          <section className='flex bg-[#CECECE]'>
            <div className='relative w-full'>
              <div className='max-w-7xl mx-auto flex flex-col md:grid grid-cols-2 lg:grid-cols-4 h-full'>
                {
                  services.slice().map((service) => (
                    <Link to={`/${service.slug}`} className='w-full px-[15px] pb-[30px] h-full z-10'>
                      <ServicesComponent
                        colBg={service.acf.colbg}
                        name={service.acf.title_viet}
                        colName={service.acf.colName}
                        nameE={service.acf.title_en}
                        colNameE={service.acf.colNameE}
                        text1={service.acf.descript_1}
                        text2={service.acf.descript_2}
                        colText={service.acf.colText}
                      />
                    </Link>
                  ))
                }
              </div>
            </div>

          </section >

          {/* Dự án đã làm */}
          <section className='flex bg-[#CECECE]' >
            <div id='du-an' className='relative w-full pt-24 -mt-24'>
              <Title text={'Các dự án đã thực hiện'}></Title>
              <div className=''>
                {/* <div className='grid sm:grid-cols-3 pb-5'>
                  {
                    projects.map((project, index) => (
                      <Link to={`/du-an/${project.slug}`} className='px-[10px] pb-[30px]'>
                        <ProjectComponent
                          title={project.acf.services}
                          name={project.acf.project_name}
                          img={project.acf.img_home}
                          key={project.id} isHovered={index === hoverIndex}
                        />
                      </Link>
                    ))
                  }
                </div> */}
                <div>
                  <ProjectComponent products={projects.slice(0, 6)} />
                  {/* Nút Xem Thêm */}
                  <div className="text-center mb-4">
                    <Link
                      to="/du-an"
                      className="text-sky-900 text-lg font-semibold hover:text-sky-950 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      Xem thêm
                      <span className="transform transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110">
                        ➝
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section >

          {/* logoKH */}
          <div className='-mb-4'>
            <List_Client />
          </div>
          <div className='text-center'>
            <a
              className='inline-block border-[#0000000D] border-[0.8px] bg-[#446084] hover:bg-[#334862] text-white px-[1.2em] leading-[2.4em]'
              href="#"
              onClick={() => window.open("https://zalo.me/0906260488", '_blank')}
            >
              <span className='inline-block'>LIÊN HỆ ĐỂ ĐƯỢC TƯ VẤN!</span>
            </a>
          </div>
          {/* Tin tức */}
          <section >
            <div className='flex mt-[30px] max-w-7xl mx-auto w-full'>
              <div className='relative px-[15px] pb-[30px] w-full'>
                <div className='border-[1.5px] sm:border-dashed flex justify-center items-start bg-[#CECECE] flex-col sm:flex-row'>
                  {news1.map((post) => (
                    <div className='px-0.5 pb-[3px] sm:w-1/2 border-[1px] border-dotted sm:border-none'>
                      <Link to={`/tin-tuc/${post.slug}`}>
                        <div>
                          <div className="table w-full">
                            <div className="table-cell w-[25%] align-middle" >
                              <div className="" >
                                <img className='' src={logo} alt="" />
                              </div>
                            </div>
                            <div className="table-cell group pt-[10px] ">
                              <div className="font-lato font-bold">
                                <p className="text-[8.64px] my-[0.1em] px-[5px] py-0.5 opacity-70 uppercase inline-block rounded-sm bg-[#00000066] group-hover:bg-[#D26E4B] group-hover:opacity-100 text-white">
                                  Tin tức
                                </p>
                                <h5 className="text-[#555] text-[14px] sm:text-[16.56px] mt-[0.1em]">{post && post.title && post.title.rendered ? post.title.rendered : ""}</h5>
                                <div className="text-[#777] text-[10px] sm:text-[11.52px] font-normal group-hover:text-[#000]">Tháng Ba 2, 2023</div>
                                <MinusIcon className='relative text-start h-8 w-6 -ml-1 -my-2 text-[#0000001A]' />
                                <p className="text-[#777] text-[12px] sm:text-[14.4px] mt-[0.1em] font-normal group-hover:text-[#000]">
                                  {
                                    post && post.excerpt && post.excerpt.rendered ?
                                      parse(`${post.excerpt.rendered}`)[0].props.children.slice(0, 130) + '...Xem chi tiết' :
                                      ''
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))
                  }
                </div>
              </div>
            </div>
            <div className='flex max-w-7xl mx-auto w-full'>
              <div className='relative px-[15px] pb-[30px] w-full'>
                <div className='flex place-items-start'>
                  {news2.map((post) => (
                    <div className="px-0.5 pb-[3px] w-1/3">

                      <Link to={`/tin-tuc/${post.slug}`}>
                        <div className=''>
                          <div className="px-1 sm:px-[1.5em] sm:pt-[0.7em] sm:pb-[1.4em]">
                            <div className="table-cell group pt-[10px] ">
                              <div className="font-lato font-bold">
                                <p className="text-[8.64px] my-[0.1em] px-[5px] py-0.5 opacity-70 uppercase inline-block rounded-sm bg-[#00000066] group-hover:bg-[#D26E4B] group-hover:opacity-100 text-white">
                                  Tin tức
                                </p>
                                <h5 className="text-[#555] text-[14px] sm:text-[16.56px] mt-[0.1em]">{post && post.title && post.title.rendered ? post.title.rendered : ""}</h5>
                                <div className="text-[#777] text-[10px] sm:text-[11.52px] font-normal group-hover:text-[#000]">Tháng Ba 2, 2023</div>
                                <MinusIcon className='relative text-start h-8 w-6 -ml-1 -my-2 text-[#0000001A]' />
                                <p className="text-[#777] text-[12px] sm:text-[14.4px] mt-[0.1em] font-normal group-hover:text-[#000]">
                                  {
                                    post && post.excerpt && post.excerpt.rendered ?
                                      parse(`${post.excerpt.rendered}`)[0].props.children.slice(0, 130) + '...Xem chi tiết' :
                                      ''
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>

                  ))}
                </div>
              </div>
            </div>
          </section >
          {/* <Footer /> */}
        </>
      </div >
      {/* } */}
    </>
  );
}

export default Home;
