import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "../page/Home"
import LogoDesign from "../page/LogoDesign"
import PackageDesign from "../page/PackageDesign"
import Printing from "../page/Printing"
import DetailBrandDesign from "../page/DetailBrandDesign"
import DetailPackageDesign from "../page/DetailPackageDesign"
import DetailPrinting from "../page/DetailPrinting"
import DetailProject from "../page/DetailProject"
import News from '../page/News';
import DetailNews from '../page/DetailNews';
import Contact from '../page/Contact';
import AdvertisingDesign from '../page/AdvertisingDesign';
import Projects from '../page/Projects';

const MainRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/du-an" element={<Projects />} />
                <Route path="/thiet-ke-logo" element={<LogoDesign />} />
                <Route path="/thiet-ke-quang-cao" element={<AdvertisingDesign />} />
                <Route path="/thiet-ke-bao-bi" element={<PackageDesign />} />
                <Route path="/san-xuat-in-an" element={<Printing />} />
                <Route path="/bao-gia-thiet-ke-logo" element={<DetailBrandDesign />} />
                <Route path="/bao-gia-thiet-ke-bao-bi" element={<DetailPackageDesign />} />
                <Route path="/bao-gia-in-an-san-xuat" element={<DetailPrinting />} />
                
                <Route path="/san-xuat-in-an/:id" element={<DetailPrinting />} />
                <Route path='/du-an/:id' element={<DetailProject />} />
                <Route path="/tin-tuc" element={<News />} />
                <Route path="/tin-tuc/:slug" element={<DetailNews />} />
                <Route path="/lien-he" element={<Contact />} />
            </Routes>
        </div>
    )
}

export default MainRouter
