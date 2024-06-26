import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Banner3 from '../../components/Banner3'

import Apiservice from '../../service/apiservice'
import { useParams } from 'react-router-dom'

import parse from 'html-react-parser';
import Footer from '../../components/Footer'
import Loader from '../../components/Loader'
import LoaderStyle2 from '../../components/LoaderStyle2'

import './index.css'
const DetailNews = () => {
    const { newsApi } = Apiservice()
    const [imageURL, setImageURL] = useState(null);
    const { slug } = useParams();

    const [news, setNews] = useState({})
    const [loading, setLoading] = useState(false)
    const handleGetItem = async (slug) => {
        setLoading(true)
        let resNews = await newsApi()
        if (resNews && resNews.data) {
            const foundNews = resNews.data.find((post) => post.slug === slug);
            setNews(foundNews || {})
        }
        setLoading(false)
    }
    useEffect(() => {
        handleGetItem(slug)
    }, [])

    const [isFixed, setIsFixed] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const remainingHeight = documentHeight - (scrollTop + windowHeight);

            if (scrollTop >= 400) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }

            if (remainingHeight <= 200) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            {loading ? <LoaderStyle2 />
                : <>
                    <Header />
                    <Banner3 />
                    <div className='py-[30px]'>
                        <div className='max-w-[1320px] mx-auto flex-col sm:flex sm:flex-row'>
                            <div className='sm:w-2/3 px-[30px] pb-[30px] text-sm sm:text-base'>
                                <h2 className='text-lg sm:text-xl font-semibold uppercase font-lato pb-4'>
                                    {news && news.title && news.title.rendered ? news.title.rendered : ''}
                                </h2>
                                <p>{news && news.content && news.content.rendered ? parse(`${news.content.rendered}`) : ''}</p>
                            </div>

                            <div className='hidden sm:block w-1/3 mx-8 space-y-4 relative'>
                                <div className={`banner ${isFixed ? 'fixed' : ''} ${isHidden ? 'hidden' : ''} w-[240px] md:w-[280px] lg:w-[380px] xl:w-[420px]`}>
                                    <div className="mb-4 border">
                                        <img src={imageURL} alt="Banner" className="h-[400px] md:h-[400px] lg:h-[540px] bg-slate-100" />
                                    </div>
                                </div>
                            </div>
                            <div className='block sm:hidden px-16 space-y-4 relative'>
                                <div className="mb-4 border">
                                    <img src={imageURL} alt="Banner" className="h-[500px] bg-slate-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </>
            }
        </div>
    )
}

export default DetailNews
