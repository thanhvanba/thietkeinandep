import React from 'react';

import ServicesComponent from '../../components/ServicesComponent';
import ProjectComponent from '../../components/ProjectComponent';


import pro1 from "../../assets/img/NDTH-RUOU-05.jpg"
import pro2 from "../../assets/img/Thiet-ke-logo-nhan-dien-thuong-hieu-CSSgroup-1.jpg"
import pro3 from "../../assets/img/Thiet-ke-Logo-nhan-dien-thuong-hieu-Bamboo-Phu-Quoc-Resort.jpg"
import pro4 from "../../assets/img/Thiet-ke-logo-nhan-dien-thuong-hieu-nha-hang-song-vien-27.jpg"
import logoKH from "../../assets/img/LOGO-KHACH-HANG.png"

import Header from '../../components/Header';
import Footer from '../../components/Footer'
import Banner from '../../components/Banner';
import './home.css'

const Home = () => {
  const titleArray = ['Chúng tôi cùng bạn tạo nên kết nối', 'từ thương hiệu đến khách hàng'];
  return (
    <div>
      <Header />
      {/* Banner */}
      <div className='h-[full] w-full relative'>
        <div className={`pt-[50%] relative h-full w-full`}>
          <div className='absolute top-0 left-0 right-0 bottom-0 h-full p-0 m-0'>

            <div className={`bg absolute top-0 left-0 w-full h-full bg-header bg-cover`}></div>


            <div className='relative h-full'>
              <div className='relative max-w-[1080px] h-full bg-cover px-[15px] mx-auto'>
                <div className='absolute top-0 bottom-0 right-0 left-0 h-full w-full' />
                <div className={`absolute w-[44%] top-[34%] left-[0%]`}>
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
            </div>
          </div>
        </div>
      </div>
      {/* <Banner customPT="50%" customClassName="bg" customBg="header" customWidth="44%" customTop="34%" titleArr={titleArray} /> */}

      {/* Dịch vụ */}
      <section className='flex bg-[#CECECE]'>
        <div className='relative w-full'>
          <div className='max-w-[1080px] mx-auto flex'>
            <ServicesComponent
              colBg="#FFFFFF"
              name="Thiết kế thương hiệu"
              colName="#555"
              nameE="Brand design"
              colNameE="#334862"
              text1="Thiết kế LOGO, bộ nhận diện thương hiệu."
              text2="Catalogue, hồ sơ năng lực."
              colText="#777"
            />
            <ServicesComponent
              colBg="#446084"
              name="Thiết kế bao bì"
              colName="#FFFFFF"
              nameE="PACKING DESIGN"
              colNameE="#FFF"
              text1="Thiết kế đa dạng hộp giấy, tem nhãn, túi."
              text2="Tối ưu quy trình đóng gói."
              colText="#FFF"
            />
            <ServicesComponent
              colBg="#A29E9E"
              name="Sản xuất - in ấn"
              colName="#fff"
              nameE="Printing"
              colNameE="#334862"
              text1="Sản xuất in ấn bao bì: hộp, túi, tem nhãn"
              text2="In ấn Namecard, Catalogue, Poster,…"
              colText="#FFF"
            />
          </div>

        </div>

      </section>

      {/* Dự án đã làm */}
      <section className='flex bg-[#CECECE]'>
        <div className='relative w-full'>
          <div className=''>
            <div className='relative px-[15px] pb-[30px]'>
              <div className='w-1/2 m-auto'>
                <p className='font-alexandria uppercase text-[25pt] text-black text-center'>CÁC DỰ ÁN ĐÃ THỰC HIỆN</p>
              </div>
            </div>
          </div>
          <div className='max-w-[1065px] mx-auto '>
            <div className='grid grid-cols-3 gap-5 pb-5'>
              <ProjectComponent
                title="Thiết kế Logo"
                name="LOGO VN.WINE"
                img={pro1}
              />
              <ProjectComponent
                title="Thiết kế Logo"
                name="GROUP"
                img={pro2}
              />
              <ProjectComponent
                title="Thiết kế bao bì"
                name="BAMBOO"
                img={pro3}
              />
              <ProjectComponent
                title="Thiết kế Logo"
                name="LOGO VN.WINE"
                img={pro1}
              />
              <ProjectComponent
                title="Thiết kế nhận dạng thương hiệu"
                name="SONG VIÊN"
                img={pro4}
              />
              <ProjectComponent
                title="Thiết kế bao bì"
                name="BAMBOO"
                img={pro3}
              />
            </div>
          </div>
        </div>
      </section>

      {/* flex */}
      <section className='flex'>
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
                  href="">
                  <span className='inline-block'>LIÊN HỆ ĐỂ ĐƯỢC TƯ VẤN!</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Tin tức */}
      <section>

      </section>
      <Footer />
    </div>
  );
}

export default Home;
