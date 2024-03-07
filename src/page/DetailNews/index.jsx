import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Banner3 from '../../components/Banner3'

import Apiservice from '../../service/apiservice'
import { useParams } from 'react-router-dom'

import parse from 'html-react-parser';
import Footer from '../../components/Footer'
const DetailNews = () => {
    const { newsApi } = Apiservice()

    const { slug } = useParams();
    console.log("🚀 ~ DetailNews ~ slug:", slug)

    const [news, setNews] = useState({})
    console.log("🚀 ~ News ~ news:", news)
    const handleGetItem = async (slug) => {
        let resNews = await newsApi()
        if (resNews && resNews.data) {
            const foundNews = resNews.data.find((post) => post.slug === slug);
            console.log("🚀 ~ handleGetItem ~ foundNews:", foundNews)
            setNews(foundNews || {})
        }
    }


    useEffect(() => {
        handleGetItem(slug)
    }, [])
    return (
        <div>
            <Header />
            <Banner3 title={news && news.title && news.title.rendered ? news.title.rendered : 'N/A'} />
            <div className='py-[30px]'>
                <div className='max-w-[1110px] mx-auto'>
                    <div> {news && news.content && news.content.rendered ? parse(`${news.content.rendered}`) : 'N/A'}</div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DetailNews
