import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "../page/Home"
import BrandDesign from "../page/BrandDesign"
import PackageDesign from "../page/PackageDesign"
import Printing from "../page/Printing"
import DetailBrandDesign from "../page/DetailBrandDesign"
import DetailPackageDesign from "../page/DetailPackageDesign"
import DetailPrinting from "../page/DetailPrinting"
import DetailProject from "../page/DetailProject"

const MainRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/du-an" element={<Home />} />
                <Route path="/thiet-ke-thuong-hieu" element={<BrandDesign />} />
                <Route path="/thiet-ke-bao-bi" element={<PackageDesign />} />
                <Route path="/in-an-san-xuat" element={<Printing />} />
                <Route path="/bao-gia-thiet-ke-thuong-hieu" element={<DetailBrandDesign />} />
                <Route path="/bao-gia-thiet-ke-bao-bi" element={<DetailPackageDesign />} />
                <Route path="/bao-gia-in-an-san-xuat" element={<DetailPrinting />} />
                <Route path="/project-logo-vnwine" element={<DetailProject />} />
            </Routes>
        </div>
    )
}

export default MainRouter
