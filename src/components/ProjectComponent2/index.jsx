import React, { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import DetailProject from "../../page/DetailProject";
import Apiservice from "../../service/apiservice";

const ProjectComponent2 = ({ products }) => {
  console.log("🚀 ~ ProjectComponent ~ products:", products)
  const { projectApi } = Apiservice()
  const [project, setProject] = useState({})
  const [request, setRequest] = useState([])

  const handleGetItem = async (slug) => {
    let resProject = await projectApi()

    if (resProject && resProject.data) {
      const foundProject = resProject.data.find((project) => project.slug === slug);
      setRequest(foundProject.acf.request.split('-').filter(item => item.trim() !== ''))
      setProject(foundProject || {});
    }

    setVisible(true)
  }

  const handleSelectProduct = (slug) => {
    setVisible(false); // Đóng modal trước
    setTimeout(() => {
      setSelectedId(slug); // Cập nhật sản phẩm mới
    }, 100);
  };
  const [visible, setVisible] = useState(false);
  const [selectedId, setSelectedId] = useState('');
  console.log("🚀 ~ ProjectComponent ~ selectedId:", selectedId)

  useEffect(() => {
    console.log('render')
    if (selectedId !== '') {
      console.log('render1')
      handleGetItem(selectedId)
    }
  }, [selectedId])
  return (
    <div className="p-4">
      {/* Grid sản phẩm */}
      {/* <div className="grid gap-4 
                      grid-cols-1 
                      sm:grid-cols-2 
                      lg:grid-cols-3 
                      auto-rows-[250px] sm:auto-rows-[300px] lg:auto-rows-[400px]">
        {products.map((product, index) => (
          <div
            key={product.id}
            // to={`/du-an/${product.slug}`}
            onClick={() => setSelectedId(product.slug)}
            className={`relative overflow-hidden rounded-sm group cursor-pointer block 
              ${index % 6 === 0 || index % 6 === 4 ? "lg:row-span-2 lg:col-span-2" : ""}`}
          >
            {/* Hình ảnh *
            <img
              loading="lazy"
              src={product.acf.img_home}
              alt={product.acf.project_name}
              className="w-full h-full object-cover"
            />

            {/* Overlay hiển thị thông tin khi hover *
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold">{product.acf.project_name}</h3>
              <p className="text-xs sm:text-sm lg:text-base">{product.acf.services}</p>
            </div>
          </div>
        ))}
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div
            key={product.id}
            onClick={() => setSelectedId(product.slug)}
            className="cursor-pointer overflow-hidden transition-transform transform hover:scale-105"
          >
            {/* Hình ảnh */}
            <img
              loading="lazy"
              src={product.acf.img_home}
              alt={product.acf.project_name}
              className="w-full h-60 object-cover"
            />

            {/* Thông tin */}
            <div className="p-4">
              <h3 className="text-base font-semibold text-gray-800">{product.acf.project_name}</h3>
              <p className="text-sm text-gray-600">{product.acf.services}</p>
            </div>
          </div>
        ))}
      </div>

      <DetailProject visible={visible} onClose={() => setVisible(false)} listProject={products} project={project} request={request} onSelectProduct={handleSelectProduct} />
    </div>
  );
};

export default ProjectComponent2;
