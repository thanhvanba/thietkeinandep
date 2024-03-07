import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import pro1 from "../../assets/img/NDTH-RUOU-05.jpg"
import pro2 from "../../assets/img/Thiet-ke-logo-nhan-dien-thuong-hieu-CSSgroup-1.jpg"
import pro3 from "../../assets/img/Thiet-ke-Logo-nhan-dien-thuong-hieu-Bamboo-Phu-Quoc-Resort.jpg"
import pro4 from "../../assets/img/Thiet-ke-logo-nhan-dien-thuong-hieu-nha-hang-song-vien-27.jpg"
import logoKH from "../../assets/img/LOGO-KHACH-HANG.png"

import ServicesComponent from '../../components/ServicesComponent';
import ProjectComponent from '../../components/ProjectComponent';
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import Banner2 from '../../components/Banner2';

import Apiservice from '../../service/apiservice';

import './home.css'
const Home = () => {
  const titleArray = ['Chúng tôi cùng bạn tạo nên kết nối', 'từ thương hiệu đến khách hàng'];

  const { serviceApi, projectApi } = Apiservice()

  const [services, setServices] = useState([])
  const [projects, setProjects] = useState([])
  console.log("🚀 ~ Home ~ projects:", projects)

  const handleGetItem = async () => {
    let resService = await serviceApi()
    let resProject = await projectApi()
    if (resService && resService.data)
      setServices(resService.data)

    if (resProject && resProject.data)
      setProjects(resProject.data)
  }
  useEffect(() => {
    handleGetItem()
  }, [])
  return (
    <div>
      <Header />
      <Banner2 titleArray={titleArray} image="bg-header" position="0% 100%" width="44%" top="34%" height="50%" />
      {/* Dịch vụ */}
      <section className='flex bg-[#CECECE]'>
        <div className='relative w-full'>
          <div className='max-w-[1080px] mx-auto flex flex-col sm:flex-row'>
            {
              services.slice().reverse().map((service) => (
                <Link to={`/${service.slug}`} className='sm:w-1/3 px-[15px] pb-[30px]'>
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
        <div id='du-an' className='relative w-full'>
          <div className=''>
            <div className='relative px-[15px] pb-[30px]'>
              <div className='w-1/2 m-auto'>
                <p className='font-alexandria uppercase text-[25pt] text-black text-center'>
                  CÁC DỰ ÁN ĐÃ THỰC HIỆN
                </p>
              </div>
            </div>
          </div>
          <div className='max-w-[1065px] mx-auto '>
            <div className='grid sm:grid-cols-3 pb-5'>
              {
                projects.map((project) => (
                  <Link to={`/du-an/${project.slug}`} className='px-[10px] pb-[30px]'>
                    <ProjectComponent
                      title={project.acf.services}
                      name={project.acf.project_name}
                      img={project.acf.img_home}
                    />
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
      </section >

      {/* logoKH */}
      < section className='flex' >
        <div className='relative w-full'>
          <div className='max-w-[1080px] mx-auto'>
            <div className='px-[15px] pb-[30px]'>
              <div className='text-center pt-[15px]'>
                <div className='w-2/3 m-auto'>
                  <p className='font-alexandria uppercase text-[25pt] text-black text-center'>CẢM ƠN BẠN ĐÃ LỰA CHỌN CHÚNG TÔI !</p>
                </div>
                <div className=''>
                  <img className='w-full h-full object-cover' src={logoKH} alt="" />
                </div>
                <a
                  className='inline-block border-[#0000000D] border-[0.8px] bg-[#446084] hover:bg-[#334862] text-white px-[1.2em] leading-[2.4em]'
                  href="#"
                  onClick={() => window.open("https://zalo.me/0906260488", '_blank')}
                >
                  <span className='inline-block'>LIÊN HỆ ĐỂ ĐƯỢC TƯ VẤN!</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </ section>

      {/* Tin tức */}
      <section >

      </section >
      <Footer />
    </div >
  );
}

export default Home;
